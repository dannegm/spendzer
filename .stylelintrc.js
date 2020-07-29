module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-styled-components'],
  processors: ['stylelint-processor-styled-components'],
  rules: {
    'selector-type-case': null,
    'value-keyword-case': null,
  },
};
