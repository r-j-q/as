<template>
	<view class="container">

		22233333   {{tabBarList}} {{midBtn}}
				<u-button type="primary" :plain="true" :hairline="true" text="细边"></u-button>
<u-tabbar :list="tabBarList" :mid-button="midBtn" :active-color="activeColor" :inactive-color="inactiveColor"
			:border-top="borderTop"></u-tabbar>
			
			
			<!-- <u-tabbar
						:list="tabBerList"
						:mid-button="midBtn"
						active-color="#5098FF"
						inactive-color="#909399"
						border-top="false"
						bg-color = "#F8F8F8"
					></u-tabbar> -->
			 
	</view>
</template>

<script>
	var app = getApp().globalData; 
	import {
		mapGetters
	} from 'vuex'
	import UniPopup from "@/components/uni-popup/uni-popup.vue";
	import {
		delUser
	} from "@/api/index.js";

	export default {
		name: "index",
		components: {
 
		},
		 
		data() {
			return { 
				borderTop: true,
				inactiveColor: '#909399',
				activeColor: '#5098FF'
			};
		},
		computed: {
			...mapGetters([
				'tabBarList',
				'midBtn'
			])
		},
		onLoad: function() {
          
         },

		mounted() {
			var _this = this;

		},
		onShow() {
         uni.hideTabBar()
		 console.log("console.log(tabBerList)",this.tabBarList)
		},
		methods: {
			 
		},
		onShareAppMessage(res) {
		
		},
		
	};
</script>
<style scoped>
	/* @import url("./index.css"); */
</style>
