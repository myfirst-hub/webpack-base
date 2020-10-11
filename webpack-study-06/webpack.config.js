// webpack 是node写出来的 node的写法
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');
let OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
let UglifyJsPlugin = require('uglifyjs-webpack-plugin');
let webpack = require('webpack');

module.exports = {
  optimization: { //  
    // minimizer: [
    //   new UglifyJsPlugin({ // 使用uglifyjs压缩js代码
    //     cache: true,
    //     parallel: true,
    //     sourceMap: true
    //   }),
    //   new OptimizeCssAssetsPlugin() // 压缩css代码
    // ]
  },
  mode: 'development', // 模式 默认两种 production development
  entry: './src/index.js', //入口
  output: {
    filename: 'bundle.[hash:8].js', // 打包后的文件名 // [hash:8]hash值个数
    path: path.resolve(__dirname, 'bundle'), // 路径必须是一个绝对路径
  },
  plugins: [ // 数组 放着所有的webpack插件
    new HtmlWebpackPlugin({ // 根据html模板生成html首页
      template: './src/index.html',
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({ // css抽离生成单独文件
      filename: 'css/main.css'
    }),
    new webpack.ProvidePlugin({ // 2)在每个模块中都注入$
      $:'jquery'
    })
  ],
  module: { // 模块
    rules: [ //loader 默认是从右向左，从下向上执行
      { // // 3）<img src='' alt=''/>
        test: /\.html$/,
        use: 'html-withimg-loader'
      },
      {
        test: /\.(png|jpg|gif)/,
        // 做一个限制 当我们的图片小于多少K的时候 用base64 来转化
        // 否则用file-loader产生真实的图片
        use: [{
          loader: 'url-loader',
          options: {
            esModule:false,
            limit: 35*1024,
            outputPath: 'img/' // 给图片进进行打包分类
          }
        }]
        // use: [{
        //   loader: 'file-loader',
        //   options: {
        //     esModule:false
        //   }
        // }]
      },
      { // 1)引用工具库为全局变量
        test: require.resolve('jquery'),
        use: [{
            loader: 'expose-loader',
            options: 'jQuery'
        },{
            loader: 'expose-loader',
            options: '$'
        }]
    },
      // {
      //   test: /\.js$/,
      //   use: {
      //     loader: 'eslint-loader',
      //     options: {
      //       enforce: 'pre' // pre(previous) 表示该loader最早执行  post 表示该loader最后执行  默认无值按照正常顺序执行
      //     } 
      //   }
      // },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: { // 用babel-loader 把es6 -> es5
            presets: [
              '@babel/preset-env'
            ],
            plugins: [ // 用于将类转成es5
              ['@babel/plugin-proposal-decorators', {'legacy': true}],
              ['@babel/plugin-proposal-class-properties', {'loose': true}],
              '@babel/plugin-transform-runtime'
            ]
          }
        },
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/
      },
      // 规则 css-loader 解析@import这种语法的
      // style-loader 他是把css插入到head的标签中
      // loader的特点 希望单一
      // loader的用法 字符串表示只用一个loader，数组表示同时使用多个loader，数组中的每个loader可以使用字符串
      // 也可以使用对象形式，对象形可以进行参数配置
      // loader的顺序 默认是从右向左 从下向上执行
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      },
      // 可以处理less文件 
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader', // @import 解析路径
          'postcss-loader',
          'less-loader' // 把less转成css
        ]
      }
    ]
  }
}