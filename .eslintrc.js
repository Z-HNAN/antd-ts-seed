const { eslint } = require('@umijs/fabric');

module.exports = {
  ...eslint,
  rules: {
    ...eslint.rules,
  }
};
