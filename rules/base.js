module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    sourceType: 'module',
  },
  extends: ['airbnb', 'prettier'],
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
  },
};
