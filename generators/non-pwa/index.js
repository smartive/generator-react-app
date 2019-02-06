const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, options) {
    super(args, options);

    this.options = options;
  }

  configuring() {
    this.files = [
      'public/index.html',
      'public/favicon-16x16.png',
      'public/favicon-32x32.png',
      'public/favicon.ico',

      'src/index.tsx',
    ];
  }

  async writing() {
    for (const fileName of this.files) {
      this.fs.copyTpl(this.templatePath(fileName), this.destinationPath(fileName), this.options);
    }
  }
};
