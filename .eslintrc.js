module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true,
    node: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  rules: {
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'space-before-function-paren': 0,
    'no-unused-vars': 'off',
    'no-useless-escape': 'off',
    'no-undef': 'off',
    'no-constant-condition': 'off',
    'no-empty': 'off',
    'no-dupe-keys': 'off',
    'no-irregular-whitespace': 'off',
    'no-prototype-builtins': 'off',
    'vue/no-parsing-error': 'off',
    'vue/attribute-hyphenation': 0,
    'vue/html-self-closing': 0,
    'vue/html-closing-bracket-spacing': 0,
    'vue/html-closing-bracket-newline': 0,
    'vue/require-valid-default-prop': 'off',
    'vue/no-use-v-if-with-v-for': 'off',
    'vue/no-unused-vars': 'off',
    'vue/no-dupe-keys': 'off',
    'vue/no-unused-components': 'off'
  },
  parserOptions: {
    ecmaVersion: 10,
    sourceType: 'module'
  }
}
