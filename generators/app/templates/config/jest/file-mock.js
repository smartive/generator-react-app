const { basename } = require('path');

module.exports = {
  process: (_src, filename) => `module.exports = ${JSON.stringify(basename(filename))};`,
};
