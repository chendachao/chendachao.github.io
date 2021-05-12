module.exports = {
    env: {
      browser : true,
      es2021: true,
      node : true,
      es6 : true
    },
    extends: [
      'eslint:recommended',
      'prettier',
    ],
    parser: '@babel/eslint-parser',
    parserOptions: {
      ecmaVersion: 12,
      ecmaFeatures: {
        experimentalObjectRestSpread: true
      },
      sourceType: 'module',
      allowImportExportEverywhere: false,
      babelOptions: {
        configFile: './.babelrc',
      },
    },
    plugins: [
        'standard',
    ],
    rules: {
      'linebreak-style': ['error', 'unix'],
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      'no-unused-vars' : 0,
      'no-undef' : 2
    },
};
