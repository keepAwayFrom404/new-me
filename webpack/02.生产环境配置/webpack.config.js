const { resolve } = require('path');
// 处理html的路径引用与生产环境压缩
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 从js中剥离css
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 压缩css
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
// 决定使用browserlist的哪个环境
// process.env.NODE_ENV = 'development'
const commonCssLoader = [
  MiniCssExtractPlugin.loader,
  // 将css加载到js中
  'css-loader',
  // css兼容性处理
  {
    loader: 'postcss-loader',
    options: {
      postcssOptions: {
        plugins: ['postcss-preset-env'],
      },
    },
  },
]

module.exports = {
  entry: './src/index.js',
  output: {
    path: resolve(__dirname, 'build'),
    filename: 'js/built.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          ...commonCssLoader
        ],
      },
      {
        test: /\.less$/,
        use: [
          ...commonCssLoader,
          'less-loader'
        ],
      },
      // 正常来讲，一个文件同时只能被一个loader处理，所以要注意执行顺序，默认差不多
      {
        test: /\.js$/,
        include: /webpack/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        enforce: 'pre',
        options: {
          fix: true,
        },
      },
      {
        exclude: /node_modules/,
        include: /webpack/,
        test: /\.js$/,
        // js兼容性：babel-loader，进行兼容性处理与语法转换
        loader: 'babel-loader',
        options: {
          // 预设：指示babel做什么兼容性处理，@babel/preset-env只能转换基本语法
          // @babel/polyfill: 一次性引入，体积太大
          presets: [
            [
              '@babel/preset-env',
              {
                useBuiltIns: 'usage', // 按需加载
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
      },
      {
        test: /\.(gif|png|jpg|jepg)/,
        loader: 'url-loader',
        options: {
          limit: 8 * 1024,
          name: '[hash:10].[ext]',
          outputPath: 'imgs',
          esModule: false, // 不使用esmodule与html一致
        }
      },
      {
        test: /\.html/,
        // 处理html中的图片路径
        loader: 'html-loader'
      },
      {
        exclude: /\.(css|less|js|png|jpg|jpeg|gif|html)/,
        // 其他文件使用fille-loader原样输出到assets目录
        loader: 'file-loader',
        options: {
          outputPath: 'assets'
        }
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true,
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'css/built.css',
    }),
    new OptimizeCssAssetsWebpackPlugin(),
  ],
  mode: 'production',
};
