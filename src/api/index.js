const pluginConnector = require('./pluginConnector.js');

const resolver = {
  allPlugins: pluginConnector.readAllPlugins,
};

module.exports = resolver;
