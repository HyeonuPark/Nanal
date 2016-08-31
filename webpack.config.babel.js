'use strict'

const path = require('path')
const webpack = require('webpack')
const cssnext = require('postcss-cssnext')

module.exports = {
  entry: path.join(process.cwd(), 'src/js/index.js'),
  output: {
    filename: 'bundle.js',
    path: './public',
  },
  resolve: {
    alias: {
      src: path.join(process.cwd(), 'src'),
    },
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [['es2015', {modules: false}], 'stage-0', 'react'],
        },
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!postcss-loader',
      },
      {
        test: /\.(woff2?|ttf|eot|svg|png|jpe?g|gif|html)(\?.+)?$/,
        loader: 'file?name=[name].[ext]',
      },
    ],
  },/*
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.DedupePlugin(),
  ],*/
  postcss: () => [cssnext],
}
