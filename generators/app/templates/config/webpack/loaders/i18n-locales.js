const { realpathSync, readFileSync } = require('fs');
const { resolve, join, basename, extname, normalize } = require('path');
const { safeLoad } = require('js-yaml');
const { sync } = require('glob');

const NS_INDEX_FROM_RIGHT = 3;

module.exports = function() {
  const basePath = resolve(realpathSync(process.cwd()), 'src');
  const files = sync('**/*.yml', { cwd: basePath });
  const appResourceBundle = files.reduce((translations, file) => {
    const filePath = join(basePath, file);
    this.addDependency(filePath);

    const content = readFileSync(filePath);
    const polyglot = safeLoad(content.toString());
    const lang = basename(file, extname(file));
    const dirs = normalize(file).split('/');
    const namespace = dirs[dirs.length - NS_INDEX_FROM_RIGHT];

    return {
      ...translations,
      [lang]: {
        ...translations[lang],
        [namespace]: polyglot,
      },
    };
  }, {});

  return `module.exports = ${JSON.stringify(appResourceBundle)};`;
};
