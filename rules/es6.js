module.exports = {
  plugins: [
    'security'
  ],
  extends: [
    './base/best-practices',
    './base/errors',
    './base/es6',
    './base/strict',
    './base/style',
    './base/variables',
    './imports',
  ].map(require.resolve).concat([
    'plugin:security/recommended'
  ]),
  env: {
    es6: true,
    es2017: true,
    commonjs: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      objectLiteralDuplicateProperties: false,
    },
  },
  rules: {
    'security/detect-object-injection': 'off',
  },
}
