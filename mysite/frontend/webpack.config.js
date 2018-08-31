const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const WebpackBundleTracker = require("webpack-bundle-tracker");

const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});

const dir = path.resolve("../");
const webpackBundleTracker = new WebpackBundleTracker({
    path: dir,
    filename: 'webpack-stats.dev.json'
});

module.exports = {
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
    //filename: 'static/js/bundle.js',
    // There are also additional JS chunk files if you use code splitting.
    //chunkFilename: 'static/js/[name].chunk.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [htmlPlugin, webpackBundleTracker]
};
