const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, options) {
    super(args, options);

    this.options = options;
  }

  configuring() {
    this.files = [
      'src/providers/state-machine/index.ts',
      'src/providers/state-machine/state-machine.tsx',

      'src/routing/index.ts',
      'src/routing/match-only.tsx',
      'src/routing/match.tsx',
      'src/routing/switch.tsx',

      'src/states/actions.ts',
      'src/states/events.ts',
      'src/states/root-context.ts',
      'src/states/state-machine.ts',

      'src/app.tsx',
    ];

    this.dependencies = ['immer', 'xstate'];
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
