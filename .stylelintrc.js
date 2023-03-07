module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-styled-components', 'stylelint-config-prettier', 'stylelint-prettier/recommended'],
  plugins: ['stylelint-order', 'stylelint-scss'],
  rules: {
    'color-hex-length': 'long',
    'color-hex-case': 'lower',
    'at-rule-no-unknown': null,
    'scss/dollar-variable-default': null,
    'scss/at-rule-no-unknown': true,
    'value-keyword-case': null,
    'scss/selector-no-redundant-nesting-selector': true,
    'scss/dollar-variable-pattern': '^[a-z][a-zA-Z]+$',
    indentation: null,
    'selector-class-pattern': [
      '^([a-z-A-Z]+)+(__([a-z-A-Z]+)+)?(_[a-zA-Z]+([a-zA-Z-]+)*){0,3}$',
      {
        message: 'Selector class pattern does not match project conventions',
        resolveNestedSelectors: true,
      },
    ],
    'scss/at-mixin-pattern': '^[a-zA-Z]+$',
    'max-line-length': 150,
    'declaration-empty-line-before': null,
  },
  overrides: [
    {
      files: ['**/*.sass'],
      customSyntax: 'postcss-sass',
    },
  ],
  ignoreFiles: ['**/*.min.css', 'build/*', 'dist/*', 'node_modules/*'],
}
