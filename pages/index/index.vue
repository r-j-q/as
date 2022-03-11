<template>
	<view>
		<button type="default" @click="dddddd">222</button>
		---->{{tabBarList}}
		<u-tabbar :list="tabBarList" :active-color="activeColor" :inactive-color="inactiveColor"
			:border-top="borderTop"></u-tabbar>
	</view>
</template>

<script>
	import {
		mapGetters
	} from 'vuex'
	export default {
		data() {
			return {
				borderTop: false,
				inactiveColor: '#909399',
				activeColor: '#FF5370'
			}
		},
		computed: {
			...mapGetters([
				'tabBarList',
				'role'
			])
		},
		onLoad() {
			 
		}
		,
		methods:{
			dddddd(){
				console.log("tabBarList",this.tabBarList)
			}
		}
	}
</script>
<style lang="scss">
</style>
