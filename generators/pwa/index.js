const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, options) {
    super(args, options);

    this.options = options;
  }

  configuring() {
    this.files = [
      'public/index.html',
      'public/android-chrome-192x192.png',
      'public/android-chrome-512x512.png',
      'public/apple-touch-icon-180x180.png',
      'public/favicon-16x16.png',
      'public/favicon-32x32.png',
      'public/favicon.ico',
      'public/manifest.json',

      'src/index.tsx',
    ];

    this.dependencies = ['workbox-webpack-plugin'];
  }

  async writing() {
    for (const fileName of this.files) {
      this.fs.copyTpl(this.templatePath(fileName), this.destinationPath(fileName), this.options);
    }
  }

  async install() {
    this.npmInstall(this.dependencies);
  }
};
