const path = require('path')
const commonConfig = require('./webpack.common')

module.exports = Object.assign(commonConfig, {
  mode: 'production',
  devtool: 'cheap-module-source-map',
})