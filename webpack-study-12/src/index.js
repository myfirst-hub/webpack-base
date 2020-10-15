import jquery from 'jquery';
import moment from 'moment';
// 设置语言
moment.locale('zh-cn');
// 解决上面引入忽略插件包的其他方法，手动引入所需要的语言
import 'moment/locale/zh-cn';

let r = moment().endOf('day').fromNow();
console.log(r)