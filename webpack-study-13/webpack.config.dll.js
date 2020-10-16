let path = require('path');
let webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    // test: './src/test.js',
    test: ['react', 'react-dom'],
  },
  output: {
    filename: '[name]_dll.js', // 产生的文件名
    path: path.resolve(__dirname, 'dist'),
    // library: 'ab', // 默认以var的形式定义
    library: '[name]_dll',
    libraryTarget: 'var', // 以node形式，  还可以以umd  this  var  等等
  },
  plugins: [
    //DllPlugin 动态连接库
    new webpack.DllPlugin({ // name === library 
      name: '[name]_dll',
      path: path.resolve(__dirname, 'dist', 'mainfest.json')
    })
  ]
}