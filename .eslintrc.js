// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    "no-console": process.env.NODE_ENV === 'production' ? 2 : 0,
    "no-constant-condition": "warn",
    "block-scoped-var": "error",
    "curly": ["error", "multi-line"],
    "no-empty": ["error", {
      "allowEmptyCatch": true
    }],
    "no-extra-bind": "error",
    "no-extra-label": "error",
    "no-extra-boolean-cast": "off",
    "no-floating-decimal": "error",
    "no-implied-eval": "error",
    "no-iterator": "error",
    "no-loop-func": "error",
    "no-multi-spaces": "error",
    "no-proto": "error",
    "no-script-url": "error",
    "no-throw-literal": "error",
    "no-useless-call": "error",
    "no-with": "error",
    "prefer-promise-reject-errors": "error",
    "wrap-iife": ["error", "inside"],
    "no-use-before-define": "error",
    "array-bracket-spacing": ["error", "never"],
    "block-spacing": "error",
    "brace-style":  ["error", "1tbs", {
      "allowSingleLine": true
    }],
    "camelcase": "error",
    "comma-dangle": "error",
    "comma-spacing": "error",
    "comma-style": "error",
    "computed-property-spacing": "error",
    "func-call-spacing": "error",
    "func-name-matching": "error",
    "key-spacing": "error",
    "keyword-spacing": "error",
    "new-cap": "error",
    "no-trailing-spaces": "error",
    "no-whitespace-before-property": "error",
    "object-curly-spacing": ["error", "always"],
    "object-property-newline": "error",
    "quotes": ["error", "single"],
    "semi": [2, "always"],
    "semi-spacing": "error",
    "space-before-blocks": "error",
    "space-before-function-paren": ["error", "never"],
    "space-in-parens": "error",
    "space-infix-ops": "error",
    "space-unary-ops": "error",
    "spaced-comment": ["error", "always", {
      "block": {
        "markers": ["!"],
        "balanced": true
      }
    }],
    "arrow-parens": ["error", "always"],
    "arrow-spacing": "error",
    "generator-star-spacing": ["error", {
      "before": false,
      "after": true
    }],
    "no-duplicate-imports": "error",
    "yield-star-spacing": ["error", {
      "before": false,
      "after": true
    }],
    "no-var": "error"
  }
}
