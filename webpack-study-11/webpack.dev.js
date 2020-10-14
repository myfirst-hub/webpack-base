let { merge } = require('webpack-merge');
let base = require('./webpack.base.js');

module.exports = merge(base, {
  mode: 'development',
});
console.log('NODE_ENV............', process.env)