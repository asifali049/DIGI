import js from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import prettierConfig from 'eslint-config-prettier';
import globals from 'globals';

export default [
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'coverage/**',
      'logs/**',
      '**/*.log',
      '.env',
      '.env.*',
      '**/*.tsbuildinfo',
      'src/generated/**',
      'tmp/**',
      'temp/**',
      '.cache/**',
      '.vscode/**',
      '.idea/**',
      'jest-results/**',
      'playwright-report/**',
      '**/*.js',
      '**/*.mjs',
    ],
  },

  js.configs.recommended,

  {
    files: ['**/*.ts'],

    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: import.meta.dirname,
        sourceType: 'module',
      },
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },

    plugins: {
      '@typescript-eslint': tsPlugin,
      import: importPlugin,
    },

    settings: {
      'import/resolver': {
        typescript: {
          project: './tsconfig.json',
        },
      },
    },

    rules: {
      ...tsPlugin.configs.recommended.rules,
      ...tsPlugin.configs['recommended-requiring-type-checking']?.rules,
      ...importPlugin.configs.recommended.rules,
      ...importPlugin.configs.typescript.rules,
      ...prettierConfig.rules,

      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-debugger': 'error',

      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],

      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',

      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling'],
            'index',
            'object',
            'type',
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],

      'import/no-unresolved': 'off',
    },
  },
];
