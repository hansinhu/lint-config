const assert = require('assert')
const { ESLint } = require('eslint')
const path = require('path')

const rules = JSON.parse(`
{
  "extends": [
    "${path.join(__dirname, '../rules/es6.js')}"
  ],
  "parserOptions": {
    "requireConfigFile": false
  }
}
`)

const CODE_UNUSED_VARS = 'const a = 0\n'

describe('es6-rules', function () {
  it('validate no-unused-vars', async () => {
    const cli = new ESLint({
      useEslintrc: false,
      baseConfig: rules,
    })

    const res = await cli.lintText(CODE_UNUSED_VARS)

    assert(res[0].messages[0].ruleId === 'no-unused-vars')
  })
})
