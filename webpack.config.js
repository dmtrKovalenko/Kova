var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'Build');
var APP_DIR = path.resolve(__dirname, 'App');

var config = {
  entry: ['webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './App/index.jsx'],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel',
        
      }
    ]
  },
  plugins:[
      new webpack.HotModuleReplacementPlugin(),
  ],
  devServer:{
      hot:true,
      contentBase:'./App/'
  }
};

module.exports = config;