import { readFileSync } from 'fs';
import js from '@eslint/js';
import react from 'eslint-plugin-react';
import prettierPlugin from 'eslint-plugin-prettier';

/** Detectar versão do React automaticamente */
const reactVersion = (() => {
  try {
    const pkg = JSON.parse(readFileSync('./package.json', 'utf8'));
    return pkg.dependencies?.react || pkg.devDependencies?.react || 'detect';
  } catch {
    return 'detect';
  }
})();

export default [
  js.configs.recommended,

  {
    plugins: {
      react,
      prettier: prettierPlugin,
    },
    languageOptions: {
      ecmaVersion: 11,
      sourceType: 'module',
      globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
        ...js.languageOptions?.globals,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      ...react.configs.recommended.rules,
      ...prettierPlugin.configs.recommended.rules,
    },
    settings: {
      react: {
        version: reactVersion,
      },
    },
  },
];
