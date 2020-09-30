import str from './a.js';
require('./index.css');
require('./index.less');

console.log(str);

let fn = () => {
  console.log('log');
}

fn();

class A{
  a = 1;
}

let a = new A();
console.log(a.a)
