const OFF = 0;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const WARN = 1;
const ERROR = 2;

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
    'jest/globals': true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb-typescript',
    'prettier',
    'plugin:jest/recommended',
    'plugin:testing-library/react',
    'plugin:jest-formatting/recommended',
    'plugin:jest-dom/recommended',
    'plugin:tailwindcss/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint',
    'prettier',
    'jest',
    'jest-formatting',
    'tailwindcss',
    'simple-import-sort',
    'eslint-plugin-jest-dom',
  ],
  settings: {
    'import/resolver': {
      typescript: {},
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['src'],
      },
    },
  },
  rules: {
    'import/prefer-default-export': OFF,
    'react/function-component-definition': [
      ERROR,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.test.ts', './src/test-utils/*', './jest/*'],
        peerDependencies: true,
      },
    ],
    'react/require-default-props': OFF,
    'react/prop-types': OFF,
    'react/forbid-prop-types': OFF,
    'simple-import-sort/imports': ERROR,
    'simple-import-sort/exports': ERROR,
    'react/jsx-props-no-spreading': OFF,
  },
};
