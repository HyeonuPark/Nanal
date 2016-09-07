'use strict'

const webpack = require('webpack')
const CompressPlugin = require('compression-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const config = require('./base.babel.js')

const extractCss = new ExtractTextPlugin('[name].[contenthash].css')

module.exports = config({
  entry: [],
  cssLoader: extractCss.extract({
    loader: 'css?modules!postcss',
    fallbackLoader: 'style',
  }),
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    extractCss,
    new CompressPlugin(),
  ],
})
