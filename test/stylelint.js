const assert = require('assert')
const stylelint = require('stylelint')
const path = require('path')

const rules = JSON.parse(`
{
  "extends": [
    "${path.join(__dirname, '../style.js')}"
  ],
  "ignoreFiles": [
    "./client/**/*.tsx",
    "*/node_modules/**/*"
  ]
}
`)

describe('style-rules', function () {
  it('should pass when use @use', async () => {
    const result = await stylelint.lint({
      config: rules,
      code: `
      @use "sass:math";

      .item {
        width: math.div(12px, 4px);
      } 
      `,
      configBasedir: path.resolve('.'),
    })

    assert(!result.errored)
  })
})
