<template>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex';
	export default {
		data() {
			return {
				form:{},
				show: false,
			};
		},
		methods: {
			//登录
			login() {
				let form = this.form;
				uni.setStorageSync('role', form.type);//存入权限
				this.setRole(form.type);//设置tabbar
				uni.switchTab({
					url: '../index/index' //然后跳转到登录后的首页
				})
			}
		}

	}
</script>


<style>
</style>
