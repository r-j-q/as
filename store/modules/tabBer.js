import tabBers from '@/utils/tabBer'
 
   
// let role = uni.getStorageSync('role')//把登录后的
let role =  "tab1"//把登录后的
console.log(tabBers[role],"------>")
const tabBer = {
	state: {
		role:'tab1',
		tabBarList: [],
	},
	mutations: {
		setRole(state,role){
			state.role = role;
			//先得到权限，再根据权限设置tabbarList
			state.tabBarList = tabBers[role];
		}
	},
}

export default tabBer 