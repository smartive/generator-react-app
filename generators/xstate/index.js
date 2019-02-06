const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, options) {
    super(args, options);

    this.options = options;
  }

  initializing() {
    this.log('🤙 xstate');
  }
};
