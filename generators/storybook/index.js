const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, options) {
    super(args, options);

    this.options = options;
  }

  configuring() {
    this.files = [
      'config/storybook/addons.js',
      'config/storybook/config.js',
      'config/storybook/preview-head.html',
      'config/storybook/webpack.config.js',

      'src/views/elements/button/button.stories.tsx',
      'src/views/elements/hyperlink/hyperlink.stories.tsx',
      'src/views/elements/input/input.stories.tsx',

      'src/views/components/tab-navigation/tab-navigation.stories.tsx',

      'src/views/compositions/form/form.stories.tsx',

      // layout

      'src/views/pages/home/home.stories.tsx',
    ];

    this.devDependencies = [
      '@storybook/addon-actions',
      '@storybook/addon-info',
      '@storybook/addon-knobs',
      '@storybook/addon-options',
      '@storybook/react',
      '@types/storybook__addon-actions',
      '@types/storybook__addon-info',
      '@types/storybook__addon-knobs',
      '@types/storybook__addon-options',
      '@types/storybook__react',
    ];
  }

  async writing() {
    for (const fileName of this.files) {
      this.fs.copyTpl(this.templatePath(fileName), this.destinationPath(fileName), this.options);
    }

    const packageJson = this.fs.readJSON(this.destinationPath('package.json'));

    this.fs.writeJSON(this.destinationPath('package.json'), {
      ...packageJson,
      scripts: {
        'start:app': packageJson.scripts.start,
        ...packageJson.scripts,
        start: 'start-storybook -p 9001 -c config/storybook',
      },
    });
  }

  async install() {
    this.npmInstall(this.devDependencies, { 'save-dev': true });
  }
};
