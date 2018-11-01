/* 滚动动画 */
export default{
	/*select  选择器  num 元素出现比例*/
	getJsm: function(select, num) {
		let jsm = document.getElementsByClassName(select);
		for (let _this of jsm) {
			let sT = document.documentElement.scrollTop,
				oT = _this.offsetTop,
				wH = document.documentElement.clientHeight,
				dH = _this.offsetHeight;
			if (oT > sT + wH || oT < oT - dH) {
				// _this.classList.remove('animate');
			} else if (sT > oT - wH * num) {
				_this.classList.add('animate');
			}
		}
	},
	scrollAni: function () {
		let _this=this;
		_this.getJsm('js-m', 0.7);
		_this.getJsm('js-m2', 0.8);
		window.addEventListener("scroll", function () {
			_this.getJsm('js-m2', 0.8);
		});
	},
	/* 获取窗口高度 */
	getWindowHeight: function () {
		let windowHeight = 0;
		if(document.compatMode == "CSS1Compat"){
			windowHeight = document.documentElement.clientHeight;
		}else{
			windowHeight = document.body.clientHeight;
		}
		return windowHeight;
	},
	/* 获取文档高度 */
	getDocumentHeight: function () {
		let scrollHei = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
		if(document.body){
			bodyScrollHeight = document.body.scrollHeight;
		}
		if(document.documentElement){
			documentScrollHeight = document.documentElement.scrollHeight;
		}
		scrollHei = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
		return scrollHei;
	},
	/* 封装storage操作 便于修改维护 */
	getLocalStorage: function (key, value) {
		localStorage.setItem(key, value)
	},
	removeLoaclStorage: function (key) {
		localStorage.removeItem(key)
	},
	clearStorage: function () {
		sessionStorage.clear()
	}
}
