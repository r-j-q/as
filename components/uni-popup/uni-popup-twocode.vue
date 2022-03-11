<template>

<view class="popupMore">
	
	<qrcode :val="val" >
	</qrcode>
	<!-- center -->
	
</view>
</template>

<script>

	import qrcode from "@/components/qrcode/qrcode.vue"

	
	// uni-popup-loadmore.vue
	export default {
		name: 'uniPopupTwocode',
		components: {
			
			qrcode
		
			

		},
		props: {
			val:String

		},
		// 直接把下面这一行代码，放到自己的组件内
		inject: ['arrobj', 'closeDrawer'],
		// ...
		methods: {

			/**
			 * 定义的选择事件，选择内容后触发
			 */
			select() {
				// 将事件发送到页面，在页面进行监听
				this.$emit('fun', {
					"aaaa": 123123123
				})
			},
			/**
			 * 关闭窗口
			 */

		},

	}
</script>

<style scoped>
	.popupMore{
		width:330px;
		height:330px ;
		/* padding: 20px; */
		background-color: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 30rpx;
	}
	
</style>
