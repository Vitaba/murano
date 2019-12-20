const WebpackShellPlugin = require('webpack-shell-plugin-next');

module.exports = (config, options) => {
  config.plugins.push(
    new WebpackShellPlugin({
      onBuildStart: {
        scripts: ['yarn ng build worker-fire-data-access --watch'],
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
