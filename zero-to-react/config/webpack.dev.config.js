const path = require('path')
const commonConfig = require('./webpack.common')

module.exports = Object.assign(commonConfig, {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    compress: true,
    // hot: true,
    historyApiFallback: true,
    host: '127.0.0.1',
    port: 8002,
    proxy: { // 配置服务代理
      '/api': {
          target: 'http://localhost:3003',
          // 转换请求 /api/users 为 http://localhost:3000/users
          pathRewrite: {'^/api' : ''},  
          changeOrigin: true
      }
    },
  },
  devtool: 'inline-source-map',
})