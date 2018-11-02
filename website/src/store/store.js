/**
 * 使vuex状态管理保存登录状态
 * */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state:{
		token:'',
		userID:'',
		rememberAcc:''
	},
	mutations:{
		//组件想要对于vuex 中的数据进行的处理
		//组件中采用this.$store.commit('方法名') 的方式调用，实现充分解耦
		//内部操作必须在此刻完成(同步)
		ADD_COUNT: function (state, token) {
			sessionStorage.setItem('token',token)
			state.token = token
		},
		REMOVE_COUNT: function (state) {
			sessionStorage.removeItem('token')
			state.token = ''
		}
	}
})


