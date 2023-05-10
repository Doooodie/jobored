module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
  },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'react/react-in-jsx-scope': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
  ignorePatterns: ['dist/**/*'],
};
