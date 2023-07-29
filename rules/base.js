module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'prettier',
    'airbnb',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  rules: {
    // if文の{}なしを許容
    curly: ['error', 'multi'],
    // アロー関数でreturnが不要な場合は {} で囲むのを禁止
    'arrow-body-style': ['error', 'as-needed'],
    // 拡張子なしimportの設定
    'import/extensions': [
      'error',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
        css: 'always',
      },
    ],
    // import順
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'parent', 'sibling', 'index', 'object'],
        pathGroups: [
          {
            pattern: '@/**',
            group: 'parent',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: {
          order: 'asc',
        },
        'newlines-between': 'never',
      },
    ],
    // default export推奨
    'import/prefer-default-export': 'off',
    // 相対パスによるimportを禁止
    'no-restricted-imports': ['error', { patterns: ['.*'] }],
    //
    // ===== TypeScript =====
    //
    // 定義前の変数使用
    '@typescript-eslint/no-use-before-define': ['off'],
    // 型情報のみのimportはtype修飾子をつけるように
    '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
    // NOTE: JSのルールを無効化しておく
    'no-unused-vars': 'off',
    // 定義済みの未使用変数
    '@typescript-eslint/no-unused-vars': 'error',
  },
};
