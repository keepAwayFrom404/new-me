const path = require('path')

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, '../src/index.js'),
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        include: path.join(__dirname, '../src')
      },
      {
        test: /.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  externals: {
    'React': 'react'
  },
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    compress: true,
    // hot: true,
    historyApiFallback: true,
    host: '127.0.0.1',
    port: 8002,
  }
}