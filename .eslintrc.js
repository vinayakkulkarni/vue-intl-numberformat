module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  extends: ['airbnb-base', 'plugin:vue/recommended'],
  // required to lint *.vue files
  plugins: ['vue'],
  rules: {
    'vue/require-default-prop': 0,
  },
};
