module.exports = {
  extends: [
    './browser',
    './rules/react',
    './rules/ts',
  ].map(require.resolve),
  rules: {
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx', '.ts', '.jsx', '.js'] }],
  }
}
