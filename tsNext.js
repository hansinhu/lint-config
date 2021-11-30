module.exports = {
  extends: [
    './node.js',
    './tsReact.js',
  ].map(require.resolve),
}
