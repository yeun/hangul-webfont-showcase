const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    'babel-polyfill',
    './index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, '..', 'dist')
  },
  context: resolve(__dirname, '..', 'src'),
  // resolve: {
  //   extensions: ['.js', '.css']
  // },
  module: {
    loaders: [
      { test: /\.js$/,
        loaders: [
          'babel-loader',
        ],
        exclude: /node_modules/
      },
      {
        test: /\.s[ac]ss$/,
        loaders: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[name]--[local]',
          'sass-loader',
        ],
      },
      {
        test: /\.ya?ml$/,
        loaders: [
          'json-loader',
          'yaml-loader'
        ]
      },
      {
        test: /\.svg$/,
        loaders: [
          'babel-loader',
          'svg-react-loader'
        ]
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, '..', 'src', 'templates', 'index.ejs'),
      inject: true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
};
