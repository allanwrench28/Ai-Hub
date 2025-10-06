module.exports = [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'commonjs',
      globals: {
        console: 'readonly',
        process: 'readonly',
        __dirname: 'readonly',
        module: 'readonly',
        require: 'readonly',
        fetch: 'readonly',
        Promise: 'readonly',
        Date: 'readonly',
        Object: 'readonly',
        JSON: 'readonly',
        parseInt: 'readonly',
      }
    },
    rules: {
      'no-undef': 'error',
      'no-unused-vars': 'warn',
      'no-console': 'off'
    }
  }
];
