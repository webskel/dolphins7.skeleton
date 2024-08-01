const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(
  common,
  { mode: "development", devServer: {static: './build'} },
  { plugins: [new HtmlWebpackPlugin({
      inject: false,
      templateParameters: {
        mainjs: '/static/js/main.js'
      }
  })]},

)

  console.log(module.exports)
