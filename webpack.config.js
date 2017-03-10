const webpack = require('webpack')

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
