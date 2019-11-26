const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// Export a function. Accept the base config as the only param.
module.exports = async ({config, mode}) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.
config.plugins.push(
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: "[id].css"
    })
);
    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.(scss|css)$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });
  config.resolve.extensions.push('.tsx');

  let htmlLoader = config.module.rules.find(i => !!'a.html'.match(i.test));
  if (htmlLoader) {
    htmlLoader.loader = 'html-loader';
  }

    // Return the altered config
    return config;
  };
