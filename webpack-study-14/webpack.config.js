let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let webpack = require('webpack');

// tree-sahking 去除无用代码
// 前提条件：
// 1.开启production模式
// 2.使用es6模块化（即 import 和 export）
// export default导出方式tree-shaking不生效 // 待考证
// export导出方式tree-shaking生效 
// 可能出现问题：
// 1.打包后自动去除.css文件
// 解决方法：在package.json中配置"sideEffects": [ "*.css" ]


module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    port: 3000,
    open: true,
    contentBase: './dist'
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
    })
  ]
}