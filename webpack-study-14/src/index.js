import calc from './test';
// 使用import方法 在生产环境下 启动tree-shaking 会自动去除掉没用的代码
// 使用require引入的模块不具备tree-shaking
console.log(calc.sum(1, 2));
// console.log('minus1....................',minus1);

// scope hosting 作用域提升
let a = 1;
let b = 2;
let c = 3;
let d = a + b + c; // 在webpack中 会自动省略 一些可以简化的代码
console.log(d, '-----------------------');