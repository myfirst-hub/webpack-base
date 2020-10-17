let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let webpack = require('webpack');


module.exports = {
  optimization: {
    splitChunks: { // 分割代码块
      cacheGroups: { // 缓存组
        common: { // 公共的模块
          chunks: 'initial', // 必须三选一： "initial" | "all"(推荐) | "async" (默认就是async)
          minSize: 0,
          minChunks: 2,
          name: 'commons',
        },
        vender: { // 抽离的node_modules下的第三方库
          priority: 1, // 权重（加载优先级）
          test: /node_modules/,
          chunks: 'initial', // 必须三选一： "initial" | "all"(推荐) | "async" (默认就是async)
          minSize: 0,
          minChunks: 2,
          name: 'vender',
        }
      }
    }
  },
  mode: 'development',
  entry: {
    index: './src/index.js',
    other: './src/other.js',
  },
  output: {
    filename: '[name].js',
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