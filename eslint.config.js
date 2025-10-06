module.exports = [
  {
    files: ['**/*.js'],
    env: {
      node: true,
      es2022: true
    },
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'commonjs',
    },
    rules: {
      'no-undef': 'error',
      'no-unused-vars': 'warn',
      'no-console': 'off'
    }
  }
];
