module.exports = {
  extends: [
    './rules/es6',
    './rules/base/node',
  ].map(require.resolve),
  env: {
    node: true,
  },
}
