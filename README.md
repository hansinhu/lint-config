## 统一管理lint 配置

相关资料

- [ESLint](http://eslint.cn/docs/rules/)
- [Typescript ESLint](https://github.com/typescript-eslint/typescript-eslint)
- [Typescript ESLint 中与 TSlint 的关联](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/ROADMAP.md)
- [从 1.x 迁移到 2.x](./MIGRATION.md)

已经内置相关依赖

```json

{
  "@typescript-eslint/eslint-plugin": "^3.2.0",
  "@typescript-eslint/parser": "^3.2.0",
  "@babel/eslint-parser": "^7.14.5",
  "eslint": "^7.2.0",
  "eslint-plugin-import": "^2.21.2",
  "eslint-plugin-react": "^7.20.0",
  "eslint-plugin-react-hooks": "^4.0.4",
  "eslint-plugin-security": "^1.4.0",
  "stylelint": "^13.6.0",
  "stylelint-config-standard": "^20.0.0",
  "stylelint-scss": "^3.17.2"
}

```

因此，项目中无需安装以上依赖，防止版本冲突

### 配置方式

#### ESlint 配置

安装依赖

```base
yarn add -D @hansin/lint-config
```

根目录下新建 `.eslintrc` 文件

```json
{
  "extends": [
    "./node_modules/@hansin/lint-config/{配置文件}.js"
  ]
}
```

其中 `{配置文件}.js` 有 5 种，组合不同的文件满足不同的项目 (**注：ts相关的预设都要放到最后一条**)

- security.js - 用于打开 eslint-plugin-security 中被关闭的全部规则
- browser.js - 浏览器环境
- node.js - Nodejs 环境
- react.js - React 环境 (包括 browser 环境)
- ts.js - Typescript 环境
- tsReact.js - Typescript React 环境 (包括 browser 环境)
- next.js - Next.js 环境 
- tsNext.js - Typescript + Next.js 环境
- tsNextRelax.js - 宽松版的 tsNext 规则，方便迁移

extends 数组里的预设会按顺序覆盖，每个预设都带了 parser 字段，所以要用 ts 的话，ts 的预设需要放在最后，覆盖掉前面的 parser

示例：需要 Typescript + React + Browser + Nodejs

```json
{
  "extends": [
    "./node_modules/@hansin/lint-config/node.js",
    "./node_modules/@hansin/lint-config/tsReact.js"
  ]
}
```

#### Stylelint 配置

根目录下新建 `.stylelintrc` 文件

```json
{
  "extends": [
    "./node_modules/@hansin/lint-config/style.js"
  ]
}
```
