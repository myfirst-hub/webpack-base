let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // 多入口
  mode: 'development',
  entry: {
    home: './src/index.js',
    other: './src/other.js'
  },
  output: {
    // [name] home, other
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'public',
  },
  devServer: {
    host: '0.0.0.0',
    compress: true,
    port: '8888',
    contentBase: path.join(__dirname, './dist'),
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'home.html',
      chunks:['home'] // 指定需要引入的js模块
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'other.html',
      chunks:['other'] // 指定需要引入的js模块
    })
  ]
}