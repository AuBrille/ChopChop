import { fixupConfigRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import eslint from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import eslintConfigPrettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import tsEslint from 'typescript-eslint';

const flatCompat = new FlatCompat();

const restrictEnvAccess = tsEslint.config({
  files: ['**/*.js', '**/*.mjs', '**/*.ts', '**/*.tsx'],
  rules: {
    'no-restricted-properties': [
      'error',
      {
        object: 'process',
        property: 'env',
        message:
          "Use `import { env } from '@/config/environment'` instead to ensure validated types.",
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: [
              '@/graphql/generated/*',
              '!@/graphql/generated/graphql',
              '!@/graphql/generated/introspection.json',
            ],
            message:
              "Import documents from '@/graphql/generated/graphql' instead to get gql DocumentNode.",
          },
        ],
        paths: [
          {
            name: '@/graphql/sdk/generated',
            message:
              "Use `import { ... } from '@/graphql/generated/graphql'` to get graphql types instead.",
          },
          {
            name: 'process',
            importNames: ['env'],
            message:
              "Use `import { env } from '@/config/environment'` instead to ensure validated types.",
          },
        ],
      },
    ],
  },
});

const baseConfig = tsEslint.config(
  {
    // Globally ignored files
    ignores: ['.next', 'storybook-static', 'dist', 'node_modules', '**/generated/*'],
  },
  {
    files: ['**/*.js', '**/*.ts', '**/*.tsx', '**/*.mjs'],
    plugins: {
      import: importPlugin,
    },
    extends: [
      eslint.configs.recommended,
      ...tsEslint.configs.recommended,
      ...tsEslint.configs.recommendedTypeChecked,
      ...tsEslint.configs.stylisticTypeChecked,
    ],
    rules: {
      'jsx-a11y/click-events-have-key-events': 'off',
      'no-console': ['warn', { allow: ['info', 'warn', 'error'] }],
      'prefer-template': 'warn',

      '@typescript-eslint/unbound-method': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_', caughtErrors: 'none' },
      ],
      '@typescript-eslint/consistent-type-imports': [
        'warn',
        { prefer: 'type-imports', fixStyle: 'separate-type-imports' },
      ],
      '@typescript-eslint/no-unnecessary-condition': [
        'warn',
        {
          allowConstantLoopConditions: true,
        },
      ],
      '@typescript-eslint/prefer-nullish-coalescing': 'off',
      '@typescript-eslint/no-misused-promises': [2, { checksVoidReturn: { attributes: false } }],

      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/no-unused-expressions': ['error', { allowShortCircuit: true }],
      'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
    },
  },
  {
    linterOptions: { reportUnusedDisableDirectives: true },
    languageOptions: { parserOptions: { projectService: true } },
  },
);

/** @type {Awaited<import('typescript-eslint').Config>} */
const reactConfig = [
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      'jsx-a11y': jsxA11y,
    },
    rules: {
      ...reactPlugin.configs['jsx-runtime'].rules,
      ...reactHooksPlugin.configs.recommended.rules,
      ...jsxA11y.flatConfigs.recommended.rules,
      'react/prop-types': 'off',
      'react/jsx-curly-brace-presence': [2, { props: 'never' }],
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        React: 'writable',
      },
    },
  },
];

/** @type {Awaited<import('typescript-eslint').Config>} */
const nextjsConfig = [
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
      '@next/next/no-duplicate-head': 'off',
      '@next/next/no-img-element': 'off',
    },
  },
];

/** @type {import('typescript-eslint').Config} */
export default [
  ...baseConfig,

  ...reactConfig,
  ...nextjsConfig,

  ...restrictEnvAccess,

  eslintConfigPrettier,

  ...fixupConfigRules(flatCompat.extends('plugin:storybook/recommended')),
];
