## 迁移指南

### 从 1.x 迁移到 2.x

#### 1. 清理文件

```bash
// 删除旧版本
yarn remove @hansin/lint-config

// 删除旧版本配置文件
rm ./tslint.json

// 安装新版本
yarn add -D @hansin/lint-config
```

#### 2. 创建或修改 ESLint 配置文件

新版本的预设配置有调整，项目中有旧的 eslint 配置，需要按自己需求合并下，新预设 [相关说明](./README.md)

没有 eslint 配置的可以先创建配置

```bash
touch .eslintrc
```

根据不同项目类型填入内容

Next.js + Typescript (注：检查版本 >=2.0.0-beta.2)

```json
{
  "extends": [
    "./node_modules/@hansin/lint-config/tsNext.js"
  ]
}
```

如果错误过多建议加上过度规则，同时 lint:ts 中关闭 warning `eslint ./client --fix --ext .ts,.tsx --quiet`

可以使用 `tsNextRelax.js` 作为过渡规则，这个规则检查会宽松很多，很多规则都改成了 warn

过渡的 .eslintrc（如果还有改不动的规则可以在 rules 中设置为 warn，后面再慢慢改）

```json
{
  "extends": [
    "./node_modules/@hansin/lint-config/tsNextRelax.js"
  ],
  "rules": {}
}
```

一些规则迁移建议

`no-plusplus` xxx++ 用 xxx = xxx + 1 会清晰点

`react-hooks/exhaustive-deps` 可以保持 warn 状态，因为检测到有没加入依赖数组的依赖变量，建议后续优化下结构

`no-case-declarations` 需要在 case 中声明变量，建议用 `{}` 把整个 case 体包起来

`no-async-promise-executor` async 本来就返回 promise, 可以考虑

```javascript
(async () => {
  await doSomething()
})();
```

`no-return-await` 可以被 await 的结果已经是 promise 了，所以在 async 中不需要 await 直接 return 也能被 resolve
```javascript
// no-return-await
async function foo() {
  return await bar()
}
// 改为
async function foo() {
  return bar()
}
```

Node.js + Typescript
> 不需要 `ts` 删掉带 ts.js 那一行就行

```json
{
  "extends": [
    "./node_modules/@hansin/lint-config/node.js",
    "./node_modules/@hansin/lint-config/ts.js"
  ]
}
```

Browser + Typescript
> 不需要 `ts` 删掉带 ts.js 那一行就行

```json
{
  "extends": [
    "./node_modules/@hansin/lint-config/browser.js",
    "./node_modules/@hansin/lint-config/ts.js"
  ]
}
```

#### 3. 修改 package.json 中的相关 lint 代码

`scripts` 中的 `lint:ts` 可以改为

```json
{
  "lint:ts": "eslint {代码目录}(例如：./client) --fix --ext .ts,.tsx"
}
```

lint-staged ts 相关配置可以改为

```json
"lint-staged": {
  "*.{jsx,ts,tsx}": [
    "eslint --fix",
    "git add"
  ]
}
```
