const Generator = require('yeoman-generator');
const say = require('yosay');
const { blue, white, bgBlue, bgWhite, reset } = require('chalk');
const { get: emoji } = require('node-emoji');
const { basename } = require('path');

module.exports = class extends Generator {
  initializing() {
    this.log(say(blue(`Hi, I'm ${bgBlue.white(`@smartive/reaktor`)}. I'll help you setup your next React project.`)));
  }

  async prompting() {
    const answers = await this.prompt([
      {
        type: 'input',
        name: 'app_name',
        message: blue(`How should I call your project?`),
        default: this.appname,
      },
      {
        type: 'checkbox',
        name: 'features',
        message: blue(`What features would you like?`),
        choices: [
          { name: 'XState', value: 'xstate', checked: false },
          { name: 'Storybook', value: 'storybook', checked: true },
        ],
      },
      {
        type: 'confirm',
        name: 'pwa',
        message: blue(`Do you want the app to be a mobile-first PWA?`),
        default: false,
      },
    ]);

    this.options = answers;

    this._compose();
  }

  configuring() {
    this.files = [
      'config/babel/config.js',

      'config/jest/config.js',
      'config/jest/file-mock.js',
      'config/jest/setup.js',

      'config/typescript/tsconfig.json',

      'config/webpack/config.js',

      '.prettierignore',
      'package.json',
      'prettier.config.js',
      'README.md',
      'tsconfig.json',
      'tslint.json',

      'src/app.tsx',

      'src/views/identity/colors/index.ts',
      'src/views/identity/colors/palettes.ts',
      'src/views/identity/icon/collection.tsx',
      'src/views/identity/icon/icon.tsx',
      'src/views/identity/icon/index.ts',
      'src/views/identity/typography/typefaces.ts',

      'src/views/elements/button/button.tsx',
      'src/views/elements/button/index.ts',
      'src/views/elements/hyperlink/hyperlink.tsx',
      'src/views/elements/hyperlink/index.ts',
      'src/views/elements/input/input.tsx',
      'src/views/elements/input/index.ts',

      'src/views/components/tab-navigation/tab-navigation.tsx',
      'src/views/components/tab-navigation/index.ts',

      'src/views/compositions/form/form.tsx',
      'src/views/compositions/form/index.ts',

      // layout

      'src/views/pages/home/home.tsx',
      'src/views/pages/home/index.ts',
    ];
  }

  async writing() {
    for (const fileName of this.files) {
      this.fs.copyTpl(this.templatePath(fileName), this.destinationPath(fileName), this.options);
    }
  }

  async install() {
    const deps = ['react', 'react-dom', 'styled-components', 'normalize.css'];
    const devDeps = [
      '@babel/core',
      '@babel/polyfill',
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-object-rest-spread',
      '@babel/plugin-transform-async-to-generator',
      '@babel/preset-env',
      '@babel/preset-react',
      '@babel/preset-typescript',
      '@smartive/tslint-config',
      '@types/enzyme',
      '@types/jest',
      '@types/node',
      '@types/react',
      '@types/react-dom',
      '@types/styled-components',
      'babel-loader',
      'babel-plugin-styled-components',
      'clean-webpack-plugin',
      'copy-webpack-plugin',
      'css-loader',
      'enzyme',
      'enzyme-adapter-react-16',
      'enzyme-to-json',
      'html-webpack-plugin',
      'jest',
      'prettier',
      'source-map-loader',
      'style-loader',
      'tslint',
      'tslint-config-prettier',
      'typescript',
      'webpack',
      'webpack-cli',
      'webpack-dev-server',
    ];

    this.npmInstall(deps);
    this.npmInstall(devDeps, { 'save-dev': true });
  }

  _compose() {
    this.composeWith(this.options.pwa ? require.resolve('../pwa') : require.resolve('../non-pwa'), this.options);

    ['storybook', 'xstate'].forEach((feature) => {
      if (this.options.features.includes(feature)) {
        this.composeWith(require.resolve(`../${feature}`), this.options);
      }
    });
  }
};
