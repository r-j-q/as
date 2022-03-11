<template>

	<view class="container">
		<!-- 如果使用swiper -->
		<view class="">
			<carousel :swpieItems="swpieItems"></carousel>
		</view>
		<!-- swiper -->
		<!-- s-grid -->
		<navigator url="../lifepay/lifepay">

			<grid></grid>
		</navigator>

		<!-- e-grid -->
		<!-- s-inputbox -->

		<!-- 转UNI逻辑开始的地方 -->
		<view class="header">

			<inputBox@func="getMsg(arguments)">
		</inputBox>

	</view>
	<!--e-inputbox -->
	<!-- s-tabs -->
	<view class="main">
		<tab :globe="globe" :theType="theType" :smart="smart" :tm="tm" :sun="sun"></tab>
		<view class="link-content">
				<navigator class="link-wrap  historycard " url="../rehistory/rehistory">
					<button class=" confirm-light " type="theme-light">分享给好友</button>
				</navigator>
				<navigator class="link-wrap  historycard" url="../rehistory/rehistory">
					<button class=" confirm " type="theme">历史订单</button>
				</navigator>


			</view>
		<notice></notice>
	</view>
	<!-- e-tabs -->

	<!-- <view class="footer">Developed by 龍科技</view> -->

	<!-- 红包 -->
	<uni-popup ref="popupred" type="redpacket">

		<uni-popup-redpacket title="popupred"></uni-popup-redpacket>

	</uni-popup>
	<uni-popup ref="popupdialog" type="dialog" >

		<uni-popup-dialog title="公告" message="成功消息" type='info' :content='mes' @confirm="confirm" ></uni-popup-dialog>

	</uni-popup>







</view>

</template>

<script>
	// import myswiper from '@/components/mySwiper/mySwiper'
	import notice from '@/components/notice/notice'
	import UniPopup from '@/components/uni-popup/uni-popup.vue'
		import uniPopupDialog from '@/components/uni-popup/uni-popup-dialog.vue'
	import uniPopupRedpacket from '@/components/uni-popup/uni-popup-redpacket.vue'


	export default {
		name: 'index',
		components: {
			notice,
			UniPopup,
			uniPopupRedpacket,
				uniPopupDialog

		},
		provide() {
			return {
				popup: this,
			}
		},

		data() {
			return {

				href: 'https://uniapp.dcloud.io/component/README?id=uniui',
				swpieItems: [
					// 未上传前暂用本地数据
					{
						"pic": "/uploads/image/20200729/4a8c9c1fa3158d5426676981a6512356.png",
						"url": "../../pages/lifepay/lifepay",
						"id":""

					},
					{
						"pic": "/uploads/image/20200727/eaa8deeadbcc140ba4fbd44daf4778fa.png",
						"url": "https://www.163.com",
						"id":"123123"
					},
					{
						"pic": 'https://ccc.wangwanglive.com/uploads/image/20200704/53a4019feb323f6b32822f40573c0f75.jpg',
						"url": "https://www.douban.com",
						"id":"123123"
					}
					],

					theType: {},
					radio1: 1,
					globe: {},
					smart: {},
					sun: {},
					tm: {},
					apiUrl: 'https://ccc.wangwanglive.com/index.php/api/V1/',
					wechatpay_type: '',
					radio: true,
					val: "hello"
				}

			},
			onLoad: function() {

				let _this = this;
		  console.log('sea');	 
				
			/* 	if (sessionStorage.getItem("globe")) {
					_this.globe = JSON.parse(sessionStorage.getItem("globe"));
					_this.smart = JSON.parse(sessionStorage.getItem("smart"));
					_this.sun = JSON.parse(sessionStorage.getItem("sun"));
					_this.tm = JSON.parse(sessionStorage.getItem("tm"));
					_this.swpieItems = JSON.parse(sessionStorage.getItem("bander"));
					console.log(_this.swpieItems);
					return; */
			// },
			uni.request({
				url:
					// "@/static/data/data2.json",
					"" + _this.apiUrl + "api_getrecharge", //仅为示例，并非真实接口地址。
					method: 'GET',
					data: { 
						position: 3
					},
				// header: {
				//     'custom-header': 'hello' //自定义请求头信息
				// },
				success: (res) => {
					// console.log(res.data.data.bander[0].pic,"yes");
					// console.log(res.data.data.globe.liul);
					// 问题:Cannot read property 'huaf' of undefined?
					_this.globe = res.data.data.globe;
					_this.smart = res.data.data.smart;
					_this.sun = res.data.data.sun;
					_this.tm = res.data.data.tm;
					console.log(_this.globe)

					// _this.swpieItems = res.data.data.bander;//暂用本地数据
					//  sessionStorage.setItem("globe", JSON.stringify(res.data.data.globe));
					//  sessionStorage.setItem("smart", JSON.stringify(res.data.data.smart));
					//  sessionStorage.setItem("sun", JSON.stringify(res.data.data.sun));
					//  sessionStorage.setItem("tm", JSON.stringify(res.data.data.tm));
					//  sessionStorage.setItem("bander", JSON.stringify(res.data.data.bander))
				}
			});





		},
		// onShow:function(){

		// },
		mounted() {
			var _this = this
			this.$refs.popupred.open()

			// 2020/09/07 新添DIALOG

			this.$refs.popupdialog.open()
			// this.$refs.popupred.open()
			// setTimeout(()=>{
			// 		_this.$refs.popupred.open()
			// },2000)

		},


		methods: {

			getMsg: function() {

				// 子组件传值，给父组件，修改父组件DATA


				this.theType = {
					id: arguments[0][1],
					number: arguments[0][0],
					value: arguments[0][2]
				}

				// switch(this.theType){
				// 	case 1:
				// 	this.theType="first";

				// 	break;
				// 	case 2:
				// 	this.theType="second";

				// 	break;
				// 	case 3:
				// 	this.theType="third";

				// 	break;

				// }

				console.log("fromSon:" + this.theType.number + ";type:" + this.theType.id)

				// console.log($event)


			}

		}
	}
	</script>

<style>
	.container {
		font-size: 14px;
		line-height: 24px;
	}

	button {
		line-height: 39.2px !important;
		height: 39.2px !important;
	}

	/* #ifdef H5 */
	@media screen and (min-width: 750px) {
		.header {
			height: 120px !important;
			line-height: 120px !important;
		}
	}

	/* #endif */

	/* #ifdef MP-ALIPAY */
	.link-wrap {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.link-wrap button {
		border-radius: 5px;
	}

	/* #endif */
	.header {
		height: 120rpx;
		line-height: 120rpx;

		padding: 0 20px;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		-ms-flex-negative: 0;
		flex-shrink: 0;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;


	}

	.main {
		display: block;
		-webkit-box-flex: 1;
		-ms-flex: 1;
		flex: 1;
		-ms-flex-preferred-size: auto;
		flex-basis: auto;
		overflow: auto;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		padding: 15px;
		text-align: center;

	}

	.footer {
		display: flex;
		align-items: center;
		justify-content: center;
		color: #999;
	}

	/* button */
	.button-hover[type=theme],
	.button-hover[type=theme-light] {
		color: hsla(0, 0%, 100%, .6);
		background-color: #942228
	}

	uni-button[type=theme] {
		color: #fff;
		background-color: var(--theme-color);
	}

	uni-button[type=theme-light] {
		color: #fff;
		/* #ifndef MP-ALIPAY */

		background-color: var(--theme-color);
		/* #endif */




		/* #ifdef MP-ALIPAY */
		background-color: var(--theme-light) !important;
		/* #endif */
	}


	.link-wrap {
		margin-top: 20px;
		margin-left: 5px;
		margin-right: 5px;
	}

	.link-wrap button {

		width: 100%;
	}

	.historycard {
		width: 50%;
	}

	.link-content {
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
