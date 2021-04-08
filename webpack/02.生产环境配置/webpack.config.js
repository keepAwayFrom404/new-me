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
    filename: 'js/built[contenthash:10].js',
  },
  module: {
    rules: [
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
        oneOf: [// 以下loader只会匹配一次；不能有两个配置处理同一个类型文件，可以把处理同类型文件的loader放外面，提升构建速度，不会所有文件都被所有loader过一遍
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
              // 开启babel缓存，第二次只会对修改的文件进行babel转译，第二次构建会读取缓存
              cacheDirectory: true
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
        ]
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
      filename: 'css/built[contenthash:10].css',
    }),
    new OptimizeCssAssetsWebpackPlugin(),
  ],
  mode: 'production',
  devtool: 'source-map'
};


/**
 * 缓存：babel缓存: 让第二次打包更快
 * 文件资源缓存：让上线运行缓存更好使用
 *  hash：每次webpack构建都会生成一个hash值
 *    问题：js和css同时使用一个hash缓存会同时失效，但是可能只改动了一个文件
 *  chunkhash：根据chunk生成的hash值，如果打包来源于一个chunk，那么hash值一样
 *    问题：js和hash值还是一样，因为css是在js中被引入的所以属于一个chunk（根据路口文件生成一个chunk）
 * contenthash：根据文件的内容生成生成hash值，不同文件hash值不同
 */