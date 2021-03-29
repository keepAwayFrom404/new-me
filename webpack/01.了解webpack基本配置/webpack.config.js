const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './src/index.js',
  output: {
    path: resolve(__dirname, 'public'),
    filename: 'js/built.js',
  },
  module: {
    rules: [
      {
        exclude: /\.(css|js|html|less|jpg|png|jpeg)$/,
        loader: 'file-loader',
        options: {
          name: '[hash:10].[ext]',
          outputPath: 'iconfont'
        } 
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
        ]
      },
      {
        test: /\.jpg|png|jpeg/,
        loader: 'url-loader',
        options: {
          limit: 8 * 1024,
          name: '[hash:10].[ext]',
          esModule: false,
          outputPath: 'assets'
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  mode: 'development',
  // mode: 'production',
  devServer: {
    contentBase: resolve(__dirname, 'public'),
    compress: true,
    port: 3000,
    open: true
  }
}