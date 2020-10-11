// webpack打包我们的图片
// 1）在js中创建图片来引入
// file-loader 默认会在内部生成一张图片 到build目录下
// 把生成的图片的名字返回来
require('./index.css')
import logo from './logo.png'; // 把图片引入，返回的结果是一个新的图片地址
let image = new Image();
console.log(logo);
image.src = logo;
document.body.appendChild(image);

// 2）在css引入background('url')
// 3）<img src='' alt=''/>

// import str from './a.js';
// require('./index.css');
// require('./index.less');

// import $ from 'expose-loader?$!jquery'; //3)
// expose-loader 暴露全局的loader 内联的loader
// pre 前面执行的loader  normal 普通的loader   post 后置的loader   内联的loader
// console.log('$...........', $);
// console.log('window.$.........', window.$);
// console.log('window.jQuery.........', window.jQuery);
// console.log(str);

// let fn = () => {
//   console.log('log');
// }

// fn();

// class A{
//   a = 1;
// }

// let a = new A();
// console.log(a.a)
