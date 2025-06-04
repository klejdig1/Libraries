// eslint.config.js
import js from '@eslint/js';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';

export default [
  js.configs.recommended,
  {
    plugins: {
      react,
      'react-hooks': reactHooks
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      'no-unused-vars': 'warn',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off'
    }
  }
];
