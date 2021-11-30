module.exports = {
  extends: [
    './node.js',
    './react.js',
  ].map(require.resolve),
}
