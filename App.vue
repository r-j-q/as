<script>
	import {
			mapState,
			mapMutations
		} from 'vuex';
	export default { 
		onLaunch: function() {
				uni.setStorageSync('role', "tab1");//存入权限
		 // let role = uni.getStorageSync('user_type');
		 // 			if (role) {
		 // 				this.setRole(role);
		 // 				uni.showLoading({
		 // 					title:"自动登录中",
		 // 				})
		 // 				setTimeout(()=>{
		 // 					uni.hideLoading();
		 // 					wx.switchTab({
		 // 						url:"/pages/index/index"
		 // 					})
		 // 				},2000)
		 				
		 // 			} 
		},
		onShow: function() { 
		},
		onHide: function() {
			console.log('App Hide');
		},
		methods:{
			...mapMutations(['setRole'])
		},
		globalData:{
			userId:0 
		}
	};
</script>
 
<style>
	 @import url("./common/index"); 
</style>
 <style lang="scss">
	@import "uview-ui/index.scss";
	</style>