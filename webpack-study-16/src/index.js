// let button = document.createElement('button');
// button.innerHTML = 'hello2'
// button.addEventListener('click', function(){
//   // es6 草案中的语法 jsonp实现动态加载文件
//   import('./source.js').then(data => {
//     console.log(data.default);
//   });
// })
// document.body.appendChild(button);

// 以上是懒加载用例代码

// 以下是热更新用例代码

import str from './source.js';
console.log('str..............', str);
console.log('module..............', module);
console.log('module.hot..............', module.hot);
if(module.hot){
  module.hot.accept('./source', () => {
    console.log('文件更新了~~~~');
  });
}

