const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const mode =
  process.env.NODE_ENV === 'production' ? 'production' : 'development'

console.log('mode', mode)

module.exports = {
  //! development production 打包模式
  mode,

  //!入口文件
  entry: './src/index.js',

  //!出口文件
  output: {
    filename: 'main.[hash].js',
    path: path.resolve(__dirname, 'dist'),
    // !配置静态资源输出文件名
    assetModuleFilename: 'images/[hash][ext][query]',
    clean: true,
  },

  //!本地启动服务器
  devServer: {
    //   指定执行文件位置
    contentBase: path.join(__dirname, 'dist'),
  },

  //! 模块
  module: {
    //!配置文件打包规则
    rules: [
      {
        test: /\.(css|scss)$/i,
        use: [
          MiniCssExtractPlugin.loader,
          //!@import 和 url() 进行处理，就像 js 解析 import/require() 一样，默认生成一个数组存放存放处理后的样式字符串，并将其导出。
          'css-loader',
          // !样式适配浏览器，自动添加前缀，增强项目兼容性
          'postcss-loader',
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png|jpeg|jpg)/,
        type: 'asset/resource',
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './base.html',
      title: 'webpack-笔记',
    }),
    new MiniCssExtractPlugin({ filename: 'main.[hash].css' }),
  ],
  // !开发工具
  devtool: 'source-map',
}
