// import str from './a.js';
// require('./index.css');
// require('./index.less');

import $ from 'expose-loader?$!jquery'; //3)
// expose-loader 暴露全局的loader 内联的loader
// pre 前面执行的loader  normal 普通的loader   post 后置的loader   内联的loader
console.log('$...........', $);
console.log('window.$.........', window.$);
console.log('window.jQuery.........', window.jQuery);
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
