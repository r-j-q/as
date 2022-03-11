<template>

	
<view class="popupMore" >
		
	
		<!-- n<navigator url="../../pages/his"></navigator> -->
		<image src="@/static/images/redpack.png" mode="aspectFit" @click="click"></image>
		<icon type="clear" size="40" class="icon_clear" color="rgba(255,255,255,.5)" @click="close" ></icon>

	<!-- center -->
	
</view>

</template>

<script>

	

	
	// uni-popup-loadmore.vue
	export default {
		name:"uniPopupRedpacket",
		components: {
			
			
		
			

		},
		
		inject: ['popup'],
		props: {

		},
	
		methods: {
         
		 click:function(){
	      uni.navigateTo({
			  
	                    url:"/pages/balance/balance",
	                    // url:"../component/classdetails/classdetails?newsid="+ newsid,
	                    success:res =>{},
	                    fail:() =>{},
	                    complete:() => {}
	                });
			 
		 },
		 

		close:function(){
			this.popup.close()
		}

		}
	}
</script>

<style scoped>
	.popupMore{
		width:240px;
		height: 600px ;
		/* padding: 20px; */
		/* background-color: #fff; */
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 30rpx;
		position: relative;
	}
	.popupMore image{
		width:100%;
		height: 500px;
	}
	.icon_clear{
		position: absolute;
		top:120px;
		right:-20px;
		color:#fff
	}
	
</style>
