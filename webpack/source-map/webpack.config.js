const path = require("path");
module.exports = {
  mode: "development",
  entry: path.join(__dirname, "/src/index.js"),
  devtool: "cheap-module-source-map",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // style-loader：创建style标签，将js中的样式资源插入进去，添加到head中生效
          "style-loader",
          // css-loader：将css文件变成commonjs模块加载到js中，里面内容是样式字符串
          "css-loader",
        ],
      },
    ],
  },
};
