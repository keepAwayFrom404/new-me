const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: path.join(__dirname, '../src/index.js'),
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'bundle.js'
    // filename: '[name][chunkhash].js'
  },
  resolve: {
    extensions: [".js", ".jsx", ".json",".ts",".tsx"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        include: path.join(__dirname, '../src'),
      },
      {
        test:/\.(ts|tsx)?$/,
        use:'ts-loader',
        include: path.join(__dirname, "../src"),
        exclude: /node_modules/
      },
      {
        test: /.css$/,
        use: ['style-loader', 'css-loader', "postcss-loader"]
      },
      {
        test: /\.less$/,
        use: ["style-loader","css-loader",
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                strictMath: true,
              },
            },
          },
          "postcss-loader",
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              // 控制小于10K的图片会被转成base64编码，直接插入HTML中.
              limit: 10240,
            },
          },
        ],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.join(__dirname, "../src/index.html"),
    }),
  ],
  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       // 抽取第三方模块
  //       vendor: { 
  //         name: 'vendor',// 模块名
  //         test: /node_modules/, // 如果你多次引用了node_modules第三方模块,就抽取出来
  //         chunks: "all"
  //       }
  //     }
  //   }
  // },
}