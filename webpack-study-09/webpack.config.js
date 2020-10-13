let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js', //入口,
  output: {
    filename: 'home.js',
    path: path.resolve(__dirname, 'dist')
  },
  // 1）源码映射 会单独生成一个sourcemap 文件 出错了 会标识 当前报错的列和行（大和全）
  devtool: 'source-map', // 增加映射文件 可以帮我们调试源代码

  devServer: {
    // 1）重写的方式  把请求代理到express服务器上
    // proxy: { // 配置一个代理把localhost:8080  =>  localhost:3000上
    //   '/api': {
    //     target: 'http://localhost:3000',
    //     pathRewrite: {'api': ''} // 把路由api部分转到3000服务时去除
    //   }
    // }
    // 2）前端只想单纯来模数据
    // before(app){ // 提供的方法 钩子
    //   app.get('/api/user', (req, res) => {
    //     res.json({name: '珠峰架构--before'});
    //   })
    // }
    //3）有服务端 不用代理来处理 能在服务端中启动webpack 端口用服务端端口
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