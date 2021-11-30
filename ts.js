module.exports = {
  extends: [
    './rules/es6',
    './rules/ts'
  ].map(require.resolve),
}
