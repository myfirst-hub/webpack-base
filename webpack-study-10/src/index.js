import 'bootstrap';
import './style'

// let xhr = new XMLHttpRequest();

// xhr.open('GET', '/api/user', true);

// xhr.onload = function(){
//   console.log(xhr.response);
// }

// xhr.send();

let url ='';
if(DEV){
  url = 'localhost:3000';
}else{
  url = 'www.zhufengpeixun.cn'
}
console.log('url..........', url);
console.log('flag..........', typeof FLAG);
console.log('expression..........', EXPRESSION);