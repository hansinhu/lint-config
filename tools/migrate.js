const fs = require("fs");
const path = require("path");
const child_process = require("child_process");
const readline = require("readline");
const util = require("util");

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
const unlinkFile = util.promisify(fs.unlink);
const exec = util.promisify(child_process.exec);
const spawn = util.promisify(child_process.spawn);

const question = (q) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) =>
    rl.question(q, (answer) => {
      resolve(
        answer === "" || answer === "Y" || answer === "y" || answer === "yes"
      );
      rl.close();
    })
  );
};

const CNPM = "--registry=https://registry.npm.taobao.org";
const pkgKeys = ["dependencies", "devDependencies"];
const AUTO_FIX = [
  "./node_modules/.bin/eslint",
  ["./client", "--fix", "--ext", ".ts,.tsx", "--quiet"],
];
const LINT_TS = "eslint ./client --fix --ext .ts,.tsx";
const eslintrcTpl = JSON.parse(`
{
  "extends": [
    "./node_modules/@hansin/lint-config/tsNextRelax.js"
  ],
  "rules": {}
}
`);
const lintStagedTpl = JSON.parse(`
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.{jsx,ts,tsx}": [
      "eslint --fix"
    ],
    "*.scss": [
      "stylelint --fix --syntax scss"
    ]
  }
}
`);

function isVersionLT(verStr, verArr) {
  const cVerArr = verStr.split(".").map((v) => {
    const matched = v.match(/\d+/);
    return matched ? parseInt(matched, 10) || 0 : 0;
  });

  function isLT(a, b, i) {
    if (i >= a.length) return false;

    if (a[i] < b[i]) {
      return true;
    } else if (a[i] === b[i]) {
      return isLT(a, b, i + 1);
    } else {
      return false;
    }
  }

  return isLT(cVerArr, verArr, 0);
}

async function readJson(file) {
  const json = await readFile(file, { encoding: "utf-8" });
  let result = null;

  try {
    result = JSON.parse(json);
  } catch (e) {}

  return result;
}

function printWork(str, works) {
  if (works.length) {
    console.log(`${str}:`);
    console.log(works.map((i) => `  ${i}`).join("\n"));
  }
}

async function main() {
  const cwd = process.cwd();
  const fillpath = (file) => path.join(cwd, file);
  const hasTSLint = fs.existsSync(fillpath("tslint.json"));
  const isNextProj = fs.existsSync(fillpath("client"));
  const hasYarn = fs.existsSync(fillpath("yarn.lock"));
  let packagejson = await readJson(fillpath("package.json"));
  const pkgbin = hasYarn ? `yarn ${CNPM}` : `npm ${CNPM}`;
  const pkgRemove = hasYarn ? `${pkgbin} remove` : `${pkgbin} uninstall`;
  const pkgInstallDev = hasYarn
    ? `${pkgbin} add -D`
    : `${pkgbin} install --save-dev`;

  if (!hasTSLint) {
    console.log("没有检查到 tslint");
    return;
  }

  if (!isNextProj) {
    console.log("不是 next 项目，暂不支持自动升级");
    return;
  }

  const updateCommitHookDeps = [];
  const needRemoveDeps = [];

  pkgKeys.forEach((key) => {
    const pks = packagejson[key] || {};

    Object.keys(pks).forEach((pkgKey) => {
      if (~pkgKey.indexOf("eslint") || ~pkgKey.indexOf("tslint")) {
        needRemoveDeps.push(pkgKey);
      }
      if (~pkgKey.indexOf("husky")) {
        updateCommitHookDeps.push("husky@^4.3.8");
      }
      if (~pkgKey.indexOf("lint-staged")) {
        updateCommitHookDeps.push("lint-staged");
      }
      if (
        ~pkgKey.indexOf("typescript") &&
        isVersionLT(pks[pkgKey], [3, 9, 0])
      ) {
        updateCommitHookDeps.push("typescript@^4.1.0");
      }
    });
  });

  const needRemoveScripts = Object.keys(packagejson["scripts"] || {}).reduce(
    (result, scriptKey) => {
      const script = packagejson["scripts"][scriptKey];

      if (~script.indexOf("tslint") || ~scriptKey.indexOf("precommit")) {
        result.push(scriptKey);
      }

      return result;
    },
    []
  );

  printWork("需要删除的依赖", needRemoveDeps);
  printWork("将会更新的依赖", updateCommitHookDeps);
  printWork("将会删除的 scripts", needRemoveScripts);

  const isContinue = await question("是否继续(Y/n)");

  if (!isContinue) {
    console.log("已取消");
    return;
  }

  if (needRemoveScripts.length) {
    needRemoveScripts.forEach((key) => delete packagejson["scripts"][key]);
  }

  if (updateCommitHookDeps.length) {
    packagejson = { ...packagejson, ...lintStagedTpl };
  }

  packagejson["scripts"]["lint:ts"] = LINT_TS;

  console.log("写入 package.json ...");
  await writeFile(
    fillpath("package.json"),
    JSON.stringify(packagejson, null, 2),
    {
      encoding: "utf-8",
    }
  );

  console.log("写入 .eslintrc ...");
  await writeFile(fillpath(".eslintrc"), JSON.stringify(eslintrcTpl, null, 2), {
    encoding: "utf-8",
  });

  console.log("写入 .eslintignore ...");
  await writeFile(fillpath(".eslintignore"), "*.scss.d.ts\n", {
    encoding: "utf-8",
  });

  if (needRemoveDeps.length) {
    console.log("删除依赖中，请等待 ...");
    await exec(`${pkgRemove} ${needRemoveDeps.join(" ")}`);
  }

  if (updateCommitHookDeps.length) {
    console.log("更新依赖中，请等待 ...");
    await exec(`${pkgInstallDev} ${updateCommitHookDeps.join(" ")}`);
  }

  console.log("删除 tslint.json");
  await unlinkFile(fillpath("tslint.json"));

  const isAutoFix = await question("是否提前 lint 并 fix 整个代码库? (Y/n)");

  if (isAutoFix) {
    console.log("运行 lint 并 fix 中 ...");
    await spawn(AUTO_FIX[0], AUTO_FIX[1], { stdio: "inherit" });
  }
}

main().catch((err) => console.error(err));
