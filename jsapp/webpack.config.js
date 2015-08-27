var webpack = require('webpack');
 var path = require('path');
 var vendor_dir = path.join(__dirname, 'vendor');
 var node_modules_dir = path.join(__dirname, 'node_modules');
var config = {
  addVendor: function (name, path) {
    this.resolve.alias[name] = path;
    this.module.noParse.push(path);
  },
  context: __dirname ,
  entry: {
    home_index: "./src/Home/index",
    home_about: "./src/Home/about"
  },
  output: {
      path: __dirname + '../../testapp/vendor/assets/javascripts',
      filename: "[name].bundle.js"
  },
  module: {
    noParse: [],
    loaders: [
      { test: /\.js$/, loader: "jsx-loader?insertPragma=React.DOM&harmony", exclude: [vendor_dir]},
    ]
  },
  resolve: {
      extensions: ['', '.js', '.jsx'],
      alias: {
        "react": __dirname + '/node_modules/react',
        "react/addons": __dirname + '/node_modules/react/addons',
      }
  }
}

module.exports = config;
