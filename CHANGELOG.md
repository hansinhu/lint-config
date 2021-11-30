### 2.3.2

* 将 babel-eslint 替换为 @babel/eslint-parser
* style 跳过检查 @use
* 初步增加测试用例

### 2.2.2

* husky 固定使用 4.x 版本

### 2.2.1

* 修复 no-use-before-define 在 ts 里报错
* 使用 typescript-eslint 的 eslint-recommended 默认关闭规则

### 2.2.0

* 更新依赖 typescript 默认用 ^4.1.0

### 2.1.0

* 添加 stylelint-order

### 2.0.4

* migrate 自动处理升级 typescript

### 2.0.3

* 关闭 arrow-body-style, no-confusing-arrow, operator-assignment

### 2.0.2

* 增加 tools/migrate.js 自动迁移 next 的 tslint 项目

### 2.0.1

* 增加宽松版 tsNext 规则 `tsNextRelax.js`
* ts 关闭 consistent-type-definitions
  * 优化 no-unused-vars 规则，支持名字开头下划线跳过检查 `_xxxVar`
  * 优化 lines-between-class-members，允许单行代码和重载代码不空行
* max-len 增大到 112

### 2.0.0

* 关闭 no-await-in-loop, no-bitwise

### 2.0.0-beta.6

* 暂时关闭三元表达式里面的 indent rule #3

### 2.0.0-beta.5

* 关了的规则: complexity, valid-jsdoc, no-nested-ternary, no-nested-ternary, import/prefer-default-export, 
* 变为警告的规则: radix, react/jsx-no-target-blank
* 在 ts 中关闭了 no-undef
* *.d.ts 中关闭了 @typescript-eslint/no-unused-vars

### 2.0.0-beta.4

* import/first 使用 disable-absolute-first

### 2.0.0-beta.3

* 优化 ts 规则
  * 关闭 no-var-requires
  * 这些规则改为使用 ts 版的: no-dupe-class-members, lines-between-class-members, no-unused-expressions 
* 更新 @typescript-eslint 版本

### 2.0.0-beta.2

* 修复 @typescript-eslint/member-ordering 和 react/sort-comp 有冲突 #2
* 默认关闭 security/detect-object-injection，提供 security.js 预设能够重新打开这个检测
* 增加 next.js 预设

### 2.0.0-beta.1

* 用 @typescript-eslint/parser 替换 tslint
* 升级依赖
* 入口从 es6.js 改为 browser.js

### 1.0.4

* 添加 tslint-react-hooks
* 添加 tslint-config-security
