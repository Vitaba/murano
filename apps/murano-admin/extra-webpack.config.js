const WebpackShellPlugin = require('webpack-shell-plugin-next');

module.exports = (config, options) => {
  config.plugins.push(
    new WebpackShellPlugin({
      onBuildStart: {
        // TODO: Based on parameters add --watch flag to see the changes
        scripts: ['yarn ngtw build', 'yarn ngtw watch', 'yarn ng build fire-js-data-access --watch'],
        blocking: false,
        parallel: true
      },
      onBuildEnd: {
        scripts: ['echo "Listen changes"'],
        blocking: false,
        parallel: true
      }
    })
  );
  return config;

};
