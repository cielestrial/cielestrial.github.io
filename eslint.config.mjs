import { defineConfig, globalIgnores } from 'eslint/config';
import { fixupConfigRules } from '@eslint/compat';
import tsParser from '@typescript-eslint/parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

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
    extends: fixupConfigRules(
      compat.extends(
        'universe/web',
        'universe/shared/typescript-analysis',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended'
      )
    ),

    languageOptions: {
      parser: tsParser,
      ecmaVersion: 5,
      sourceType: 'script',

      parserOptions: {
        allowAutomaticSingleRunInference: true,

        cacheLifetime: {
          glob: 'Infinity'
        },

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
    files: ['src/**/*.tsx', 'src/**/*.ts']
  }
]);
