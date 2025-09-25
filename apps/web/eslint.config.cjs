const path = require('path')
const { FlatCompat } = require('@eslint/eslintrc')

const compat = new FlatCompat({ baseDirectory: __dirname })

module.exports = [
  // Base Next.js + TypeScript rules
  ...compat.extends('next/core-web-vitals', 'next/typescript'),

  // Type-aware linting for your source code
  {
    files: ['apps/web/src/**/*.{ts,tsx}'],
    languageOptions: {
      parser: require('@typescript-eslint/parser'),
      parserOptions: {
        ecmaVersion: 2023,
        sourceType: 'module',
        project: path.resolve(__dirname, 'apps/web/tsconfig.json'),
      },
    },
    plugins: {
      '@typescript-eslint': require('@typescript-eslint/eslint-plugin'),
    },
    rules: {
      '@typescript-eslint/no-floating-promises': 'warn',
      'no-unused-expressions': 'off', // disable base rule
      '@typescript-eslint/no-unused-expressions': [
        'error',
        {
          allowShortCircuit: true,
          allowTernary: true,
          allowTaggedTemplates: true,
        },
      ],
      'no-html-link-for-pages': 'off', // App Router, not Pages Router
    },
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      'dist/**',
      'next-env.d.ts',
      '**/*.d.ts',
    ],
  },

  // Non-type-aware linting (configs, JS files, etc.)
  {
    files: ['apps/web/**/*.{js,jsx,ts,tsx}'],
    ignores: ['apps/web/src/**/*.{ts,tsx}'], // avoid duplicate linting
  },
]
