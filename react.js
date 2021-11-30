module.exports = {
  extends: [
    './browser',
    './rules/react',
  ].map(require.resolve),
}
