// An example configuration file.
exports.config = {
  directConnect: true,

  // browserstackUser: 'alexeynaumov1',
  // browserstackKey:'qxznQzrhRqpiz1V6oBJc',

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: ['test/e2e/**/*.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000,
    showColors: true
  }
};
