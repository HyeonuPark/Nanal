'use strict'

const path = require('path')
const cssimport = require('postcss-import')
const cssnext = require('postcss-cssnext')
const reporter = require('postcss-reporter')

const cwd = process.cwd()

module.exports = opt => ({
  entry: [...opt.entry, path.join(process.cwd(), 'src/js/index.js')],
  output: {
    filename: 'bundle.js',
    path: './public',
  },
  resolve: {
    alias: {
      src: path.join(cwd, 'src'),
    },
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      {
        test: /\.css$/,
        loader: opt.cssLoader,
      },
      {
        test: /\.(woff2?|ttf|eot|svg|png|jpe?g|gif|html)(\?.+)?$/,
        loader: 'file?name=[name].[ext]',
      },
    ],
  },
  plugins: opt.plugins,
  postcss: () => [cssimport(), cssnext(), reporter()],
})
