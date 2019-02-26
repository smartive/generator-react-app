const { basename } = require('path');

module.exports = {
  process: (_, filename) => `module.exports = ${JSON.stringify(basename(filename))};`,
};
