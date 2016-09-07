'use strict'

const webpack = require('webpack')

const config = require('./base.babel.js')

module.exports = config({
  cssLoader: 'style!css?modules&localIdentName=[local]_[path]_[name]_[hash]!postcss',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
})
