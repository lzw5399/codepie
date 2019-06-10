module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/standard'], // 这个需要是standard，才能是单引号风格！！
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'none', // This needs to be off so we can specify mixin interfaces
        ignoreRestSiblings: false
      }
    ],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always'
      }
    ]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
