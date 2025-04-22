import js from '@eslint/js';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import tseslint from '@typescript-eslint/eslint-plugin';
import parserTypeScript from '@typescript-eslint/parser';

export default [
  js.configs.recommended,

  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      parser: parserTypeScript,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        window: true,
        document: true,
        console: true,
      },
    },
    plugins: {
      'jsx-a11y': jsxA11y,
      react: react,
      '@typescript-eslint': tseslint,
    },
    rules: {
      ...jsxA11y.configs.recommended.rules,
      ...react.configs.flat.recommended.rules,
      ...tseslint.configs.recommended.rules,
    },
  },
];
