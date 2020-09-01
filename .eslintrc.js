module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'eqeqeq': 0, // 不校验===和==
    "indent": [0, 3], //缩进风格，0前一个状态，后一个缩进字符数
    'no-tabs': 0, // 不允许制表符
    'space-in-parens': 0, //小括号里面要不要有空格
    'space-before-function-paren': 0 //函数定义时括号前面要不要有空格
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
