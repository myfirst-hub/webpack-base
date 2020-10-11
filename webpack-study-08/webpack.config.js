let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js', //入口,
  output: {
    filename: 'home.js',
    path: path.resolve(__dirname, 'dist')
  },
  // 1）源码映射 会单独生成一个sourcemap 文件 出错了 会标识 当前报错的列和行（大和全）
  devtool: 'source-map', // 增加映射文件 可以帮我们调试源代码
  // 2）不会产生单独的文件 但是可以显示行和列
  // devtool: 'eval-source-map',
  // 3）不会产生列 但是是一个单独的映射文件
  // devtool: 'cheap-module-source-map',
  // 4）不会产生文件 集成在打包后的文件中 不会产生列
  // devtool: 'cheap-module-eval-source-map',
  watch: true, // 监控实时进行打包
  watchOptions: {
    poll: 100, // 每秒 问我100次
    aggregateTimeout: 500, // 防抖 输入代码
    ignored: /node_modules/ // 不需要进行监控的文件目录
  },
  module: {
    rules: [
      {
        test: '/\.js$/',
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
    }),
  ]
}