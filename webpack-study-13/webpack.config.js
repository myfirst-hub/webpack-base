let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let webpack = require('webpack');
// 模块 happypack 可以实现多线程来打包 进程
let Happypack = require('happypack');

module.exports = {
  mode: 'development',
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
        use: 'Happypack/loader?id=js',
      },
      {
        test: /\.css$/,
        use: 'Happypack/loader?id=css'
      }
    ]
  },
  plugins: [
    new Happypack({ // 多线程打包一般适用于大项目，小项目由于启动多线程反而加长打包时长
      id: 'css',
      use: ['style-loader', 'css-loader']
    }),
    new Happypack({
      id: 'js',
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react'
          ]
        }
      }]
    }),
    new webpack.DllReferencePlugin({ // 定义引用动态连接库
      manifest: path.resolve(__dirname, 'dist', 'mainfest.json') // mainfest.json是清单配置
    }),
    new webpack.IgnorePlugin(/\.\/locale/, /moment/),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}