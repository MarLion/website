// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import ElementUi from 'element-ui'
import awesomeSwiper from 'vue-awesome-swiper'
import '../node_modules/element-ui/lib/theme-chalk/index.css'
import '../node_modules/swiper/dist/css/swiper.css'
import headTop from './components/public/header'
import footBottom from './components/public/footer'
import lefter from './components/public/lefter'
import dialoger from './components/public/dialoger'

import scrollAni from './assets/public/main.js'/* songwei 页面动画处理公共js引入 */
Vue.prototype.$scrollAni=scrollAni;

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(ElementUi)
Vue.use(awesomeSwiper)
Vue.component('head-view', headTop)
Vue.component('foot-view', footBottom)
Vue.component('left-view', lefter)
Vue.component('dialog-view', dialoger)
/**
 * 使vuex状态管理保存登录状态
 * */
const ADD_COUNT = 'ADD_COUNT'
const REMOVE_COUNT = 'REMOVE_COUNT'
var store = new Vuex.Store({
	state:{
		token:'',
		userID:'',
		rememberAcc:''
	},
	mutations:{
		//组件想要对于vuex 中的数据进行的处理
		//组件中采用this.$store.commit('方法名') 的方式调用，实现充分解耦
		//内部操作必须在此刻完成(同步)
		[ADD_COUNT] (state, token) {
			sessionStorage.setItem('token',token)
			state.token = token
		},
		[REMOVE_COUNT] (state) {
			sessionStorage.removeItem('token')
			state.token = ''
		}
	}
})
/**
 * 注册全局自定义指令 点击空白隐藏
 * */
const ctx = 'clickoutside'
const nodeList = []
const isServer = Vue.prototype.$isServer
let seed = 0
let startClick
// 用来绑定事件的方法，它是一个自执行的函数，会根据是否运行于服务器和是否支持addEventListener来返回一个function
const on = (function () {
	if (!isServer && document.addEventListener) {
		return function (element, event, handler) {
			if (element && event && handler) {
				element.addEventListener(event, handler, false)
			}
		}
	} else {
		return function (element, event, handler) {
			if (element && event && handler) {
				element.attachEvent('on' + event, handler)
			}
		}
	}
})()
// 返回一个方法用来在点击的时候触发函数（触发之前会判断该元素是不是el，是不是focusElment以及他们的后代元素，如果是则不会执行函数）
function createDocumentHandler(el, binding, vnode) {
	return function (mouseup = {}, mousedown = {}) {
		if (
			!vnode ||
			!vnode.context ||
			!mouseup.target ||
			!mousedown.target ||
			el.contains(mouseup.target) ||
			el.contains(mousedown.target) ||
			el === mouseup.target || (vnode.context.focusElment &&
				(vnode.context.focusElment.contains(mouseup.target) ||
					vnode.context.focusElment.contains(mousedown.target)))
		) {
			return
		}
		if (binding.expression &&
			el[ctx].methodName &&
			vnode.context[el[ctx].methodName]) {
			vnode.context[el[ctx].methodName]()
		} else {
			el[ctx].bindingFn && el[ctx].bindingFn()
		}
	}
}

if (!isServer) {
	on(document, 'mousedown', e => (startClick = e))
	on(document, 'mouseup', e => {
		// 循环所有的绑定节点，把它们的documentHandler属性所绑定的函数执行一次（这个时候得到的刚好是上面的那个判断执行的函数）
		nodeList.forEach(node => node[ctx].documentHandler(e, startClick))
	})
}

Vue.directive('clickoutside', {
	// 当被绑定的元素插入到dom时……
	inserted(el) {},
	// 只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置
	// 把绑定的元素扔到nodeList里面，并给绑定元素设置属性
	// documentHandler属性在nodeList.forEach的时候执行并得到一个function
	// bindingFn 是绑定的那个值，用来执行的
	bind(el, binding, vnode) {
		nodeList.push(el)
		const id = seed++
		el[ctx] = {
			id,
			documentHandler: createDocumentHandler(el, binding, vnode),
			methodName: binding.expression,
			bindingFn: binding.value
		}
	},
	// 所在组件的 VNode 更新时调用
	update(el, binding, vnode) {
		el[ctx].documentHandler = createDocumentHandler(el, binding, vnode)
		el[ctx].methodName = binding.expression
		el[ctx].bindingFn = binding.value
	},
	// 只调用一次，指令与元素解绑时调用
	unbind(el, binding, vnode) {
		const len = nodeList.length
		for (let i = 0; i < len; i++) {
			if (nodeList[i][ctx].id === el[ctx].id) {
				nodeList.splice(i, 1)
				break
			}
		}
		delete el[ctx]
	}
})
/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	components: {
		App
	},
	template: '<App/>'
})
