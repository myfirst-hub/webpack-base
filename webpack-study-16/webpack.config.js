let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let webpack = require('webpack');


module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    port: 3000,
    open: true,
    contentBase: './dist',
    hot: true, // 启用热更新
  },
  module:{
    noParse: /jquery/, // 不去解析jquery中的依赖库
    rules: [
      {
        test: /\.js$/,
        exclude: /node_module/, // 排除这个目录的js文件进行解析
        include: path.resolve('./src'), // 只对src目录下的js进行解析
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        },
      }
    ]
  },
  plugins: [
    // new webpack.DllReferencePlugin({ // 定义引用动态连接库
    //   manifest: path.resolve(__dirname, 'dist', 'mainfest.json') // mainfest.json是清单配置
    // }),
    new webpack.IgnorePlugin(/\.\/locale/, /moment/),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    // new webpack.NamedModulesPlugin(), // 打印更新的模块路径
    new webpack.HotModuleReplacementPlugin(), // 热更新插件
  ]
}