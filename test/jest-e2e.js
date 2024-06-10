const defaultConfig = require('../jest.config');
module.exports = {
  ...defaultConfig,
  testRegex: '.e2e-spec.ts$',
};
