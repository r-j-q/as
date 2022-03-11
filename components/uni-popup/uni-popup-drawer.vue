<template>

	<view class="drawer">
		<view class="drawer-container">
			<view class="drawer-cell ">
				<view class="drawer-cell_hd">充值金额</view>
				<view class="drawer-cell_bd">{{intro.thePrice}}</view>
			</view>
			<view class="drawer-cell under-line">
				<view class="drawer-cell_hd">手机号码</view>
				<view class="drawer-cell_bd">{{intro.theNumber}}</view>
			</view>
			<view class="drawer-cell">
				<view class="drawer-cell_hd">服&ensp;务&ensp;商</view>
				<view class="drawer-cell_bd">{{intro.theOperators}}</view>
			</view>
			<view class="drawer-cell intro">
				<view class="drawer-cell_hd">套餐介绍</view>
				<view class="drawer-cell_bd  ">{{intro.theDetail}} </view>
			</view>

		</view>




		<view class="btn-area">


			<view>
				<view class="grid-content bg-purple">

					<!-- <view class="half" @click="close">
		   	关闭
		   </view> -->

						<button type="info" class="half cancel" @click="close">取消支付</button>
					<button type="theme" class="half confirm" @click="openFullScreen1">支付</button>

				

				</view>
				<view class="grid-content bg-purple-light">

					<!-- <button type='primary'  class="half" @click="closeDrawer" >确认支付</button> -->


				</view>


			</view>

		</view>
		
		<uni-popup ref="popupmore" type="more" :maskclick="false" class="loadmore">
			<uni-popup-more title="popumore"></uni-popup-more>
		</uni-popup>

	</view>
</template>
 
<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	// import uniPopupMore from '@/components/uni-popup/uni-popup-more.vue'

	// uni-popup-share.vue
	export default {
		name: 'UniPopupDrawer',
		components: {
			uniPopup,
			// uniPopupMore


		},
		props: {
			intro: Object,

		},
		data() {
			return {
		apiUrl: 'https://ccc.wangwanglive.com/index.php/api/',
		  step:true,			
				}
		},
		
		// 直接把下面这一行代码，放到自己的组件内
		inject: ['arrobj', 'popup', 'popm'],
		// ...
		methods: {

			/**
			 * 定义的选择事件，选择内容后触发
			 */


			openFullScreen1() {
				// this.centerDialogVisible = true;
				// console.log(this.status);
				// that.$refs.popup.close(

				// )
				// 2020.9.11 需求:点击后,隐藏；解决：这个框体隐藏
				
				
				  this.$emit('fun', true)
				
				/*  #ifdef  MP-WEIXIN  */

								  this.wxConfirmorder(); 
								  console.log("wxpay")
								  
								
				/*  #endif  */
				
				/*  #ifdef  MP-ALIPAY  */
			
										this.step=false;
								  this.zfbConfirmorder();
								
				   /*  #endif  */
		
		  
          //console.log(this.intro)
			},
			
			zfbConfirmorder() {
			   let _this = this;
			  
			    uni.request({
			    	url:
			    	 "" + _this.apiUrl + "/Alixcx/vcreate", //仅为示例，并非真实接口地址。
			    	method: 'GET',
			    	data: { 
			    	  user_id:  uni.getStorageSync('userlist').user_id,
				      itemid:  _this.intro.itemid,
					  phone:  _this.intro.theNumber,
					},
			    	// header: {
			    	//     'custom-header': 'hello' //自定义请求头信息
			    	// },
			    	success: (res) => {
			     console.log(res);
			if(res.data.type==0  && res.data.code==200){
				  // uni.setStorageSync( 'payid', res.data.id );
				   let data = JSON.parse(res.data.data);
				   console.log(data);
					    if(data.code==0 && data.desc=='success' ){
					
					        let pay_param = data.data.content;
					        //console.log(pay_param);
					        _this.juanalipay(pay_param);          
					      }else{ 
					
					uni.showToast({
					       title: ''+data.desc+'',
					       icon:"none"  
					         }); 
							 
					 
					     }
				return ;			
					 
				 }
				
				 this.$emit('fun', false)
				 uni.showToast({
				        title:''+res.data.msg+'',  
				        icon:"none"  
				          });  
				 return ;	
			
				 
				 
				 // console.log(res);
			    					
			    			
			    	}
			    });
			     },
			
			
			wxConfirmorder() {
    let _this = this;
   
     uni.request({
     	url:
     	 "" + _this.apiUrl + "Wxxcx/vcreate", //仅为示例，并非真实接口地址。
     	method: 'GET',
     	data: { 
     	  openid:  uni.getStorageSync('userlist').openid,
		//  payid:  uni.getStorageSync('payid'),
		  itemid:  _this.intro.itemid,
		  phone:  _this.intro.theNumber,
		},
     	// header: {
     	//     'custom-header': 'hello' //自定义请求头信息
     	// },
     	success: (res) => {
      console.log(res);
 if(res.data.type==0  && res.data.code==200){
	 // uni.setStorageSync( 'payid', res.data.id );
	   let data = JSON.parse(res.data.data);
		    if(data.code==0 && data.desc=='success' ){
		
		        let pay_param = JSON.parse(data.data.content);
		        console.log(pay_param);
		        _this.juancashpay(pay_param);          
		      }else{ 
		
		      // #ifdef MP-WEIXIN
		      wx.showToast({
		      	title: ''+data.desc+'',
		      	icon: 'success',
		      	duration: 2000,
		      })
		      // #endif
		
		     }
			 return ;			
		 
	 }
	 
	 if(res.data.type==1  && res.data.code==200){
	//	 uni.setStorageSync( 'payid', res.data.id );
		 let paypament = JSON.parse(res.data.data); 
		 	console.log(paypament);
		 if(paypament.errno==0 && paypament.results ){
				this.fxpay(paypament.results);
		} 
	 
	 	  	 return ;	
	 		 
	 }
	 	 this.$emit('fun', false)
	 uni.showToast({
	        title:''+res.data.msg+'',  
	        icon:"none"  
	          });  
	 return ;	
	 
	 
	 
	 
	 // console.log(res);
     					
     			
     	}
     });
      
			
	 // var  data={"code":0,"desc":"success","data":{"outTradeNo":"200826154814CFeqx3kZ","amount":50,"serviceFee":0.50,"transactionId":"200826568974163902","content":"{\"timeStamp\":\"1598428097\",\"package\":\"prepay_id=wx26154817842829c0f88764b2f035b00000\",\"appId\":\"wx697aacdfea834ee8\",\"sign\":\"5BC23309E3DE3A4D9FB4969AE225EB043888B64FD2B3BDF8948CD9EE61366887\",\"signType\":\"HMAC-SHA256\",\"nonceStr\":\"EawvCWPGMn1AVkkR\"}","timestamp":1598428097906,"sign":"ZAuJS7PcPJOb8z6pDHlwQ+JT8o4XS5SH+PLBYp9eJ6yiQftwAzFTNwA/3hPIVSAqCWiCie4IWgImPV+QQtm9XALa+uKMG28YaOx7dfh/1Fv1Emj8Ww/0aVb4lMQ3nnmSZAFxqLPnLG9mVQfcslukeF7wTxxodRtiK31g8bqipQ0="},"success":true};
	 // if(data.code==0 && data.success ){
		//   let paypament = JSON.parse(data.data.content);
		//  	    console.log(paypament)
		// 		_this.juancashpay(paypament);
	 // }
	// var data={"errno":0,"message":"Payment success","results":{"timeStamp":1598431399,"nonceStr":"V7J7p08CWcYJeya4","signType":"MD5","package":"prepay_id=wx26164321020030f54d208d5158af8f0000","paySign":"03D1A8A657BFAF0E75D434078190B6D1","out_trade_no":"200826164316PhCYt35e","total_fee":5000,"prepay_id":"wx26164321020030f54d208d5158af8f0000"}};
	//     if(data.errno==0 && data.results ){
	// 	    console.log(data.results);
	// 	this.fxpay(data.results);
	//           }

			},
			
			juanalipay(orderInfo){
			
		    this.$emit('fun', false)
			
			 uni.requestPayment({ 
			provider: 'alipay',
			 orderStr: ''+orderInfo+'', // ==tradeNO 
			success: function (res) {
			 console.log('success:' + JSON.stringify(res)); 
			 	 if (res.errMsg === 'requestPayment:ok') {
		
			 // console.log(res.resultCode); 
			 if(res.resultCode==6001){ 
				uni.showToast({
				       title:'未支付',  
				       icon:"none"  
				         });  
				return ;		 
			 }
			 
			 if(res.resultCode==9000){
			 	uni.showToast({
			 	       title:'支付成功',  
			 	       icon:"none"  
			 	         }); 
			 }
			 //	 uni.removeStorageSync('payid')
			  uni.redirectTo({
			 				 url:'/pages/index/index'
			 					    });
									
									
									}
			}, fail: function (err) { 
				
			console.log('fail:' + JSON.stringify(err)); 
			} 
			});	
				
				
			},
		
		 juancashpay(item){
		 this.$emit('fun', false)
		      uni.requestPayment({
		          provider: 'wxpay',
		          timeStamp: ''+item.timeStamp+'',//时间戳
		          nonceStr: ''+item.nonceStr+'',//随机字符串
		          package: ''+item.package+'',//统一下单接口返回的 prepay_id 参数值
		          signType: ''+item.signType+'',
		          paySign: ''+item.sign+'',//签名内容
		           success: function (res) {
					 if (res.errMsg === 'requestPayment:ok') {
					 　　　　　　　//　Toast('微信支付成功')
					 　　　　　　　　//that.$router.replace({name:'fullOrder',query:{id:'2'}})
					//uni.removeStorageSync('payid')
			      uni.showToast({
			             title:'支付成功',  
			             icon:"none"  
			               }); 
			      			 uni.redirectTo({
			      				 url:'/pages/index/index'
			      					    });
			      			return; 
					 }
		              console.log('success:' + JSON.stringify(res));
		           },
		           fail: function (err) {
		              console.log('fail:' + JSON.stringify(err));
		           }
		       });
		 
		 },	
		 
		fxpay(item){
		  this.$emit('fun', false)
	uni.requestPayment({
	    provider: 'wxpay',
	    timeStamp: ''+item.timeStamp+'',//时间戳
	    nonceStr: ''+item.nonceStr+'',//随机字符串
	    package: ''+item.package+'',//统一下单接口返回的 prepay_id 参数值
	    signType: ''+item.signType+'',
	    paySign: ''+item.paySign+'',//签名内容
	     success: function (res) {
			// console.log(res)
						 if (res.errMsg === 'requestPayment:ok') {
						 　　　　　　　//　Toast('微信支付成功')
						 　　　　　　　　//that.$router.replace({name:'fullOrder',query:{id:'2'}})
						//uni.removeStorageSync('payid')
			   uni.showToast({  
			          title:'支付成功',  
			          icon:"none"  
			            }); 
					   uni.redirectTo({
					           url:'/pages/index/index'
					                    });
										return;
						 }
	        console.log('success:' + JSON.stringify(res));
	     },
	     fail: function (err) {
	        console.log('fail:' + JSON.stringify(err));
	     }
	 });
		  
		},		
			
			
			// pay() {
			// 	// 将事件发送到页面，在页面进行监听
			// 	this.$emit('fun', {
			// 		"aaaa": 123123123
			// 	})

			// 	// s-loadingmore

			// 	// this.$refs.popupmore.open(

			// 	// )
			// 	var _this = this;
			// 	// setTimeout(function() {

			// 	// 执行父组件的close事件，关闭弹出层
			// 	// 	_this.$refs.popupmore.close(

			// 	// 	)
			// 	// 	_this.popup.close()

			// 	// }, 1000)
			// 	//e-loadingmore
			// },
			/**
			 * 关闭窗口
			 */
			close() {
				this.step=true;
				this.popup.close()
			},
			// 切换TABS前，进行判断，当前运营商（activename）与this.type.id是否一致？？？
			// XXXX需要的是在正确的条状一次后，禁止掉后续的跳转(不可行，因为在)
			checkTab(act, oact) {
				//在跳转之前进行判断，TABS不可以跳转
				// 当输入号码后进入这段判断
				//接房方法找到原有的，判断，或者INIT原有状态。
				if (act == oact || this.activeName == oact) {
					this.i++
				}
				if (!this.tabValue) {

					// 问题出在这里，tabvalue 需要执行一次。
					//i<1时不执行，i>0时执行



					//新的问题：当前activename即输入号码段时，不用PROPS修改，但是用户又手残去点击了一次。
					// 如何解决？817号段，即号码输入号码就是第一个运营商的（方法错误。）即不需要发生修改运营商

					if (this.i < 1) {

						this.i++;
						return true
					};
					console.log(this.i, !this.tabValue);
					// 弹出error框体

					if (this.i > 0) {
						this.$message({
							message: "号段与运营商需匹配",
							type: "warning"
						})


						return false
					}



					// this.tabValue=true;

				}
				if (!this.tabValue && this.i > 0) {
					this.$message({
						message: "号段与运营商不匹配",
						type: "warning"
					})
					// 问题出在这里，tabvalue 需要执行一次。
					this.i++;

					// this.tabValue=true;
					return false
				}


			},
	
			//wxpay 



		}
	}
</script>

<style>
	button{
			line-height: 2.2!important;
	}
	/* #ifdef MP-ALIPAY */
	button.confirm:hover {
		color: hsla(0, 0%, 100%, .6);
		background-color: #0b71ba
	}

	.confirm {
		color: #fff;
		background-color: var(--theme-color);
	}

	/* #endif */
	.button-hover[type=theme] {
		color: hsla(0, 0%, 100%, .6);
		background-color: #942228
	}

	uni-button[type=theme] {
		color: #fff;
		background-color: var(--theme-color);
	
	}

	.drawer {
		height: 100%;
		position: relative;
		background-color: #fff;

	}

	.drawer-container {
		padding: 20px 20px 0px;


	}

	.drawer .btn-area {
		position: relative;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 99;

	}

	.drawer-cell {
		position: relative;
		width: 100%;
		display: flex;
		height: 2em;
		line-height: 2em;
	}

	.drawer-cell.under-line:before {
		content: "";
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		height: 1px;
		color: #e5e5e5;
		border-top: 1px solid #e5e5e5;
		transform: scaleY(.5);
		z-index: 2;
	}

	.drawer-cell_hd,
	.drawer-cell_bd {
		display: inline-block;
	}

	.drawer-cell_hd {
		width: 30%;
		text-align: left;
		color: #333;
	}

	.drawer-cell_bd {
		text-align: right;
		width: 70%;
		color: #666
	}

	.half {
		width: 100%;
	}

	.intro {
		overflow-wrap: break-word;
		height: auto !important;
	}

	.grid-content {
		display: flex;
		
	}

	.loadmore {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}
</style>
