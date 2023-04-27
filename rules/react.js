module.exports = {
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      plugins: ['react', 'react-hooks', 'jsx-a11y'],
      extends: [
        'airbnb/hooks',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
      ],
      rules: {
        // Reactコンポーネントの書き方
        'react/function-component-definition': [
          2,
          { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' },
        ],
        // propsのスプレッドを禁止
        'react/jsx-props-no-spreading': ['off'],
        // 空のaタグを許容
        'jsx-a11y/anchor-has-content': ['off'],
        // 必須でないPropsを設定した際に既定値が設定されていない場合のエラー
        'react/require-default-props': 'warn',
        // import順
        'import/order': [
          'error',
          {
            pathGroups: [
              {
                pattern: '{react,react-dom/**,react-router-dom}',
                group: 'builtin',
                position: 'before',
              },
            ],
          },
        ],
      },
    },
  ],
};
