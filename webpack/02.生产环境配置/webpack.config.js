const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
// process.env.NODE_ENV = 'development'

module.exports = {
  entry: './src/index.js',
  output: {
    path: resolve(__dirname, 'public'),
    filename: 'js/built.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // 'style-loader',
          // 将css从js中剥离
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['postcss-preset-env'],
              },
            },
          },
        ],
      },
      {
        test: /\.js$/,
        include: /webpack/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          fix: true,
        },
      },
      {
        // js兼容性：babel-loader，进行兼容性处理与语法转换
        loader: 'babel-loader',
        options: {
          // 预设：指示babel做什么兼容性处理，@babel/preset-env只能转换基本语法
          // @babel/polyfill: 一次性引入，体积太大
          presets: [
            [
              '@babel/preset-env',
              {
                useBuiltIns: 'usage',
                corejs: {
                  version: '3.10',
                },
                // 具体兼容性到
                targets: {
                  chrome: '60',
                  firefox: '60',
                  ie: '9',
                  safari: '10',
                  edge: '17',
                },
              },
            ],
          ],
        },
        exclude: /node_modules/,
        include: /webpack/,
        test: /\.js$/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    // 压缩css
    new MiniCssExtractPlugin({
      filename: 'css/built.css',
    }),
    new OptimizeCssAssetsWebpackPlugin(),
  ],
  mode: 'development',
  // mode: 'production',
  devServer: {
    contentBase: resolve(__dirname, 'public'),
    compress: true,
    port: 3000,
    open: true,
  },
};
