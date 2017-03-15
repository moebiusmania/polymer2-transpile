const webpack = require('webpack');
const WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
  entry: [
    // './bower_components/polymer/polymer-element.html',
    './components/index.js'
  ],
  // entry: {
  //   app: './components/index.js',
  //   polymer: './bower_components/polymer/polymer-element.html'
  // },
  output: {
    path: './',
    filename: 'bundle.js',
  },
  // output: {
  //   path: './',
  //   filename: '[name].bundle.js',
  // },
  plugins: [
		new WebpackNotifierPlugin({
			title: 'Polymer 2 [transpile]',
			alwaysNotify: true
		})
  ],
  devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: ['node_modules', 'bower_components', './bundle.js'],
      loader: 'babel-loader',
      query: {
        presets: ['es2015'],
        // plugins: [
        //   'transform-custom-element-classes',
        //   'transform-es2015-classes'
        // ]
      }
    },{
      test: /\.html$/,
      loader: 'babel-loader!wc-loader'
    }]
  },
  devServer: {
    contentBase: './'
  },
  resolve: {
    mainFields: ['browserify', 'browser', 'module', 'main']
  }
}
