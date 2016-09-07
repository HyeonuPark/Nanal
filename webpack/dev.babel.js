'use strict'

const webpack = require('webpack')

const config = require('./base.babel.js')

module.exports = config({
  entry: ['webpack-dev-server/client?http://localhost:8080'],
  cssLoader: 'style!css?modules&localIdentName=[local]_[path]_[name]_[hash]!postcss',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
})
