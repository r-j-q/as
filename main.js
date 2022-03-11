import Vue from 'vue'
import App from './App' 
import request from "./utils/request/request";
import commonFun from "./utils/index.js";
import preventReClick from './utils/plugins.js'; 
 import store from "./store/index.js"
import uView from 'uview-ui'; 
Vue.use(uView);
 

// import '@/static/css/reset.css'
 
 Vue.prototype.$store = store
 
Vue.prototype.$commonFun=commonFun 
Vue.use(request);
Vue.config.productionTip = false 
// Vue.prototype.checkLogin = function( backpage, backtype ){
//     // 同步获取本地数据（uid、随机码、用户名、头像）
//     var userlist = uni.getStorageSync('userlist');
//    // var user_img = uni.getStorageSync('user_img');
// 	let ssss = uni.getStorageSync('userlist')
	 
	
//     if(!userlist.user_id ){
// 		console.log(111);
//         // 使用重定向的方式跳转至登录页面
// 		/*  #ifdef  MP-WEIXIN  */
// 		   //  uni.redirectTo({url:'/pages/login/login?backpage='+backpage+'&backtype='+backtype});
// 		/*  #endif  */
   
//    /*  #ifdef  MP-ALIPAY  */
   
//       //   uni.redirectTo({url:'/pages/alogin/alogin?backpage='+backpage+'&backtype='+backtype});
   
//    /*  #endif  */
		
		
// 		// uni.navigateTo({
// 		//     url: '/pages/login/login'
// 		// });
//         return false;
//     }
//     // 登录成功、已经登录返回数组 [用户 id, 用户随机码, 用户昵称, 用户表情]
//  return userlist;
// }
// 定义一个全局的请求地址
// Vue.prototype.apiServer = 'https://ccc.wangwanglive.com'


App.mpType = 'app'

const app = new Vue({
	 
	...App,
	 store
})
app.$mount()
