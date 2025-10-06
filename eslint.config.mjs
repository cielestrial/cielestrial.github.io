import tsParser from '@typescript-eslint/parser';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import reactHooks from 'eslint-plugin-react-hooks';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores([
    '**/*.config.js',
    '**/*.config.cjs',
    '**/*.config.mjs',
    'logs',
    '**/_.log',
    '**/npm-debug.log_',
    '**/yarn-debug.log*',
    '**/yarn-error.log*',
    '**/npm-debug._',
    '**/yarn-debug._',
    '**/yarn-error.\\*',
    '**/pids',
    '**/_.pid',
    '**/_.seed',
    '**/\\*.pid.lock',
    '**/lib-cov',
    '**/coverage',
    '**/.nyc_output',
    '**/.grunt',
    '**/bower_components',
    '**/.lock-wscript',
    'build/Release',
    '**/node_modules/',
    '**/jspm_packages/',
    '**/typings/',
    '**/\\*.tsbuildinfo',
    '**/.npm',
    '**/.eslintcache',
    '**/.node_repl_history',
    '**/\\*.tgz',
    '**/.pnp.*',
    '.yarn/*',
    '!.yarn/patches',
    '!.yarn/plugins',
    '!.yarn/releases',
    '!.yarn/sdks',
    '!.yarn/versions',
    '**/.env',
    '**/.env\\*.local',
    '**/.cache',
    '**/.next',
    '**/.nuxt',
    '**/.output',
    '**/dist',
    '.vuepress/dist',
    '**/.serverless',
    '**/.idea',
    '**/sw.\\*',
    '**/.DS_Store',
    '**/\\*.pem',
    '**/\\*.swp',
    '**/.expo/',
    '**/dist/',
    '**/web-build/',
    '**/_.orig._',
    '**/_.jks',
    '**/_.p8',
    '**/_.p12',
    '**/_.key',
    '**/\\*.mobileprovision',
    '**/.metro-health-check\\*'
  ]),
  {
    plugins: { 'react-hooks': reactHooks, prettier: prettierPlugin },
    extends: ['react-hooks/recommended', prettierRecommended, prettierConfig],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 5,
      sourceType: 'script',
      parserOptions: {
        allowAutomaticSingleRunInference: true,
        cacheLifetime: { glob: 'Infinity' },
        project: './tsconfig.json'
      }
    },

    rules: {
      'global-require': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'no-console': ['warn', { allow: ['info', 'warn', 'error'] }],
      'no-void': ['warn', { allowAsStatement: true }]
    }
  },
  {
    files: ['src/**/*.{ts, tsx}']
  }
]);
