<template>

<view class="popupMore">
	
	<uni-load-more status="loading" >
		
		调起支付
		
	</uni-load-more>
	<!-- center -->
	
</view>
</template>

<script>

	import uniLoadMore from "@/components/uni-load-more/uni-load-more.vue"

	
	// uni-popup-loadmore.vue
	export default {
		name: 'uniPopupMore',
		components: {
			
			uniLoadMore
		
			

		},
		props: {

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

		}
	}
</script>

<style scoped>
	.popupMore{
		width:330px;
		height: 330px ;
		margin:0 auto;
		/* padding: 20px; */
		background-color: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 30rpx;
	}
	
</style>
