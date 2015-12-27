/*
 * Webpack development server configuration
 *
 * This file is set up for serving the webpack-dev-server, which will watch for changes and recompile as required if
 * the subfolder /webpack-dev-server/ is visited. Visiting the root will not automatically reload.
 */
'use strict';
var webpack = require('webpack');
var globalTag = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(true)
});

module.exports = {

  output: {
    filename: 'bundle.js',
    publicPath: '/assets/'
  },

  cache: true,
  debug: true,
  devtool: false,
  entry: [
    'webpack/hot/only-dev-server',
    './src/app.js'
  ],

  stats: {
    colors: true,
    reasons: true
  },

  resolve: {
    extensions: [ '', '.js', '.json' ],
    modulesDirectories: [ 'node_modules' ]
  },
  module: {
    loaders: [ {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel-loader'
    }, {
      test: /\.json&/,
      loader: "json"
    } ]
  },

  plugins: [
    globalTag,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
