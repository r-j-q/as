var isChinaMobile = /^134[0-8]\\d{7}$|^(?:13[5-9]|147|15[0-27-9]|178|18[2-478])\\d{8}$/; //移动方面最新答复
var isChinaUnion = /^(?:13[0-2]|145|15[56]|176|18[56])\\d{8}$/; //向联通微博确认并未回复
var isChinaTelcom = /^(?:133|153|177|18[019])\\d{8}$/; //1349号段 电信方面没给出答复，视作不存在
var isOtherTelphone = /^170([059])\\d{7}$/; //其他运营商      
 export default {
	    checkMobile(telphone) {
		     telphone =  telphone ;
		 
		  
		   
		  
		if (telphone.length !== 11) {
			return this.setReturnJson(false, '未检测到正确的手机号码');
		} else {
			 
			if (isChinaMobile.test(telphone)) { 
				console.log("msgmsgmsgmsg","中国移动")
				return '中国移动'
				 
				//  this.setReturnJson(true, '中国移动', {
				// 	name: 'ChinaMobile'
				// });
			} else if (isChinaUnion.test(telphone)) {
				return this.setReturnJson(true, '中国联通', {
					name: 'ChinaUnion'
				});
			} else if (isChinaTelcom.test(telphone)) {
				return this.setReturnJson(true, '中国电信', {
					name: 'ChinaTelcom'
				});
			} else if (isOtherTelphone.test(telphone)) {
				var num = isOtherTelphone.exec(telphone);
				return this.setReturnJson(true, '', {
					name: ''
				});
			} else {
				return this.setReturnJson(false, '未检测到正确的手机号码');
			}
			
			 
		}
	},
	/**
	 * 函数防抖 (只执行最后一次点击)
	 * @param fn
	 * @param delay
	 * @returns {Function}
	 * @constructor
	 */
	Debounce(fn, t)  {
	    let delay = t || 500;
	    let timer;
	    console.log(fn)
	    console.log(typeof fn)
	    return function () {
	        let args = arguments;
	        if(timer){
	            clearTimeout(timer);
	        }
	        timer = setTimeout(() => {
	            timer = null;
	            fn.apply(this, args);
	        }, delay);
	    }
	},
	 
	 
	/**
	 * 函数节流
	 * @param fn
	 * @param interval
	 * @returns {Function}
	 * @constructor
	 */
	 Throttle(fn, t)  {
	    let last;
	    let timer;
	    let interval = t || 500;
	    return function () {
	        let args = arguments;
	        let now = +new Date();
	        if (last && now - last < interval) {
	            clearTimeout(timer);
	            timer = setTimeout(() => {
	                last = now;
	                fn.apply(this, args);
	            }, interval);
	        } else {
	            last = now;
	            fn.apply(this, args);
	        }
	    }
	},
	    setReturnJson(status, msg, data) {
		if (typeof status !== 'boolean' && typeof status !== 'number') {
			status = false;
		}
		if (typeof msg !== 'string') {
			msg = '';
		}
		 
		return {
			'status': status,
			'msg': msg,
			'data': data
		};
	}
	}
   
