// webpack 是node写出来的 node的写法
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');

// console.log(path.resolve('dist'));
// console.log(path.resolve(__dirname, 'dist'));

module.exports = {
  devServer: { // 开发服务器的配置  
    port: 3000,
    progress: true,
    contentBase: './bundle',
    compress: true,
    open: true, // 直接在浏览器中打开页面
  },
  mode: 'development', // 模式 默认两种 production development
  entry: './src/index.js', //入口
  output: {
    filename: 'bundle.[hash:8].js', // 打包后的文件名 // [hash:8]hash值个数
    path: path.resolve(__dirname, 'bundle'), // 路径必须是一个绝对路径
  },
  plugins: [ // 数组 放着所有的webpack插件
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      minify: {
        removeAttributeQuotes: true, // 去除index.html模板里的双引号
        collapseWhitespace: true // 优化成一行
      },
      // hash: true
    })
  ]
} 