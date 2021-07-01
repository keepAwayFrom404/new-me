const UploadSourceMapWebpackPlugin = require('./source-map/plugin')

module.exports = {
  entry: './index.js',
  plugin: [new UploadSourceMapWebpackPlugin({
    uploadUrl:'http://localhost:7001/monitor/sourcemap',
    apiKey: 'limoumou'
  })]
}