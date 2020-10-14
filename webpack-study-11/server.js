// express

let express = require('express');
let app = express();
let webpack = require('webpack');

// 3）
//中间件
let middle = require('webpack-dev-middleware');
let config = require('./webpack.config.js');
let compiler = webpack(config);

app.use(middle(compiler));
// 3）

app.get('/api/user', (req, res)=>{
  res.json({name:'珠峰架构'});
});

app.listen(3000, () => {
  console.log('启动~~~')
});