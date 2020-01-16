const fs = require('fs');

function readAllPlugins() {
  const pluginsMetadata = fs
    .readdirSync(`${__dirname}/../plugins`)
    .map((pluginFolderName) => {
      const metaData = require(`${__dirname}/../plugins/${pluginFolderName}/plugin.json`); // eslint-disable-line global-require, import/no-dynamic-require

      return metaData;
    });

  return pluginsMetadata;
}

module.exports = {
  readAllPlugins,
};
