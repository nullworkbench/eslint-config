module.exports = {
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      extends: [
        'airbnb-typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      rules: {
        // 定義前の変数使用
        '@typescript-eslint/no-use-before-define': ['off'],
        // 型情報のみのimportはtype修飾子をつけるように
        '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
        // NOTE: JSのルールを無効化しておく
        'no-unused-vars': 'off',
        // 定義済みの未使用変数
        '@typescript-eslint/no-unused-vars': 'error',
        // default export推奨
        'import/prefer-default-export': 'off',
      },
    },
  ],
};
