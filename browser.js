module.exports = {
  extends: [
    './rules/es6',
  ].map(require.resolve),
  env: {
    browser: true,
  },
}
