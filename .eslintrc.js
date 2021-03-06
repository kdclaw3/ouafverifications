module.exports = {

  'parser': 'babel-eslint',
  'env': {
    es6: true,
    node: true,
    browser: true,
    mocha: true
  },
  'parserOptions': {
    ecmaVersion: 6,
    sourceType: 'module',
    allowImportExportEverywhere: false,
  },
  'extends': [
    'eslint:recommended',
  ],
  'rules': {
    // enable eslint rules
    'array-bracket-newline': ['warn', { multiline: true }],
    'array-bracket-spacing': ['warn', 'never'],
    'arrow-parens': ['warn', 'as-needed'],
    'arrow-spacing': 'warn',
    'brace-style': 'warn',
    'comma-dangle': ['warn', 'never'],
    'comma-spacing': ['warn', { before: false, after: true }],
    'comma-style': ['warn', 'last'],
    'computed-property-spacing': ['warn', 'never'],
    'eol-last': ['error', 'always'],
    'eqeqeq': 'warn',
    'func-call-spacing': ['warn', 'never'],
    'indent': ['warn', 2, { MemberExpression: 0 }],
    'jsx-quotes': ['warn', 'prefer-double'],
    'key-spacing': ['warn', { beforeColon: false, afterColon: true }],
    //'linebreak-style': ['warn', 'unix'],
    // 'multiline-comment-style': ['warn', 'starred-block'],
    'no-multi-spaces': 'warn',
    'no-multiple-empty-lines': ['warn', { max: 2, maxBOF: 0, maxEOF: 0 }],
    'no-trailing-spaces': 'warn',
    'no-whitespace-before-property': 'warn',
    'object-curly-newline': ['warn', { multiline: true }],
    'object-curly-spacing': ['warn', 'always'],
    'quote-props': ['warn', 'consistent-as-needed', { keywords: true, numbers: true, unnecessary: true }],
    'quotes': ['warn', 'single', { allowTemplateLiterals: true }],
    'semi': ['warn', 'always'],
    'semi-spacing': ['warn', { before: false, after: true }],
    'semi-style': ['warn', 'last'],
    'space-before-blocks': 'warn',
    'space-before-function-paren': ['warn', 'always'],
    'space-in-parens': 'warn',
    'space-infix-ops': 'warn',
    'spaced-comment': ['warn', 'always'],
    'yoda': ['warn', 'never', { exceptRange: true }],

    // override eslint eslint:recommended
    'no-unused-vars': ['warn', { ignoreRestSiblings: true }],

    // disable eslint eslint:recommended

  }

};