const { merge } = require('webpack-merge');
const path = require('path');
const base = require('./base');

module.exports = merge(base, {
  mode: 'production',
  output: {
    filename: 'bundle.min.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'images/[hash][ext][query]',
  },
  devtool: false,
  performance: {
    maxEntrypointSize: 1000000,
    maxAssetSize: 1000000,
  },
});
