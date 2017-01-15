var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: __dirname,
  devtool: '#inline-source-map',
  entry: [
    '../src/main.js',
  ],
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js',
  },
  plugins: [
     new webpack.LoaderOptionsPlugin({
       debug: true
     })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel-loader'],
      include: [
        __dirname,
        path.join(__dirname, '..', 'src'),
      ],
    }],
  },
};
