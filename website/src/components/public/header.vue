<template>
  <div class="hello" :style="{backgroundColor: backColor, color: fontColor}">
    <div class="logo-contain">
      <img src="../../assets/logo.png" class="logo"/>
    </div>
    <div class="rout-contain">
      <ul class="rout">
        <li>
          <router-link  to="/product" active-class="selectedli" :style="{color: fontColor}">
            产品
          </router-link>
        </li>
        <li>
          <router-link to="/service" active-class="selectedli" :style="{color: fontColor}">
           解决方案&服务
          </router-link>
        </li>
        <li>
          <router-link to="/business" active-class="selectedli" :style="{color: fontColor}">
            商务合作
          </router-link>
        </li>
        <li>
          <router-link to="/work" active-class="selectedli" :style="{color: fontColor}">
            工作机会
          </router-link>
        </li>
      </ul>
      <ul class="rout other">
        <li>
			<div class="search-div pos-re" :class="{searchBorder: isShowBorder}" v-clickoutside="pcSearchHidden">
				<input type="text" v-model="searchEntry" :style="{backgroundColor: backColor, color: fontColor}" v-show="isShowBorder" class="pos-ab"/>
				<span class="cur-poi pos-ab" @click="pcSearch"> <i class="iconfont icon-sousuo"></i></span>
			</div>
        </li>
        <li class="other-s" v-on:click="isShowLogin">
		  <span> <i class="iconfont icon-iconfontgerenzhongxin"></i></span>
		  <span class="ml5 cur-poi">个人中心</span>
        </li>
        <li class="other-s">
		  <span><i class="iconfont icon-zhongwenyuyan"></i></span>
          <span class="ml5">中文</span>
        </li>
        <li class="other-s">
		  <span><i class="iconfont icon-guanyuwomen"></i></span>
		  <router-link to="/aboutus" class="cur-poi ml5" :style="{color: fontColor}">关于我们</router-link>
        </li>
        <li class="login-choose" v-show="isShow" v-clickoutside="isLoginHidden">
          <router-link to="/loginView">登录</router-link>
          <router-link :to="{path: '/register', query:{page_id:1}}">注册</router-link>
        </li>
      </ul>
    </div>
	<div class="rout-contain-phone">
		<span class="ml15"><i class="iconfont icon-gengduo" @click="showPhoneNavi"></i></span>
	</div>
	<div class="rout-contain-phone-s">
		<span><i class="iconfont icon-sousuo" :style="{fontSize: '20px'}" @click="showSearch"></i></span>
		<span class="ml15"><i class="iconfont icon-iconfontgerenzhongxin" :style="{fontSize: '20px'}" @click="showPerson"></i></span>
	</div>
	<transition name="expand">
		<div class="rout-phone" v-show="isPhoneNavi">
			<ul>
				<li v-for="(item, index) in naviDataing" :key="index" :class="{aniNavi: isPhoneNavi, aniLeave: isNaviLeave}">
					<router-link  :to="item.srcPath" @click.native="showPhoneNavi">
						{{item.title}}
					</router-link>
				</li>
			</ul>
		</div>
	</transition>
	<transition name="expand">
		<div class="search-phone" v-show="isPhoneSearch">
			<div class="search-ipt" :class="{seaIn: isPhoneSearch, seaOut: isSeaOut}">
				<input type="text" v-model="searchEntry" @input="searcFunc" @keyup.enter="searcFunc"/>
				<span @click="searcFunc">搜索</span>
			</div>
			<div class="search-result" :class="{seaIn: isPhoneSearch, seaOut: isSeaOut}">
				<ul >
					<li>{{searchEntry}}</li>
				</ul><span :style="{width:'50px',opacity:0}"></span>
			</div>
		</div>
	</transition>
	<transition name="person">
		<div class="person-center" v-show="isPersonCenter">
			<ul>
				<li :class="{aniNavi: isPersonCenter, aniLeave: isPerLeave}">
					<router-link  to="/loginView" @click.native="showPerson">
						登录
					</router-link>
				</li>
				<li :class="{aniNavi: isPersonCenter, aniLeave: isPerLeave}">
					<router-link  :to="{path: '/register', query:{page_id:1}}" @click.native="showPerson">
						注册
					</router-link>
				</li>
			</ul>
		</div>
	</transition>
  </div>
</template>

<script>
export default {
  name: "headView",
  data() {
    return {
      isShow: false,
	  isPhoneNavi: false,
	  isNaviLeave: true,
	  isPhoneSearch	: false,
	  isSeaOut: true,
	  isPersonCenter: false,
	  isPerLeave: true,
	  isShowBorder: false,
	  naviDataing: [
	  	{
	  		title: '产  品',
			srcPath: '/product'
		},
		{
			title: '解决方案&服务',
			srcPath: '/service'
		 },
		 {
			title: '商务合作',
			srcPath: '/business'
		 },
		  {
			  title: '工作机会',
			  srcPath: '/work'
		  },
		  {
			  title: '关于我们',
			  srcPath: '/aboutus'
		  }
	  	],
		searchEntry: ''
    };
  },
  methods: {
    isShowLogin: function() {
      this.isShow = true;
    },
    isLoginHidden: function () {
      this.isShow = false
    },
	showPhoneNavi: function () {
	  this.isPhoneNavi = !this.isPhoneNavi
	  this.isNaviLeave = !this.isNaviLeave
	},
	showSearch: function () {
	  this.isPhoneSearch = !this.isPhoneSearch
	  this.isSeaOut = !this.isSeaOut
	},
	showPerson: function () {
      this.isPersonCenter = !this.isPersonCenter
	  this.isPerLeave = !this.isPerLeave
	},
	searcFunc: function () {
		console.log(this.searchEntry)
	},
	pcSearch: function () {
		this.isShowBorder = true
	},
	pcSearchHidden: function () {
		this.isShowBorder = false
	}
  },
  props:{
  	backColor:{
  		type: String,
		default: '#ffffff'
	},
	  fontColor: {
  		type: String,
		default: '#000000'
	  }
  }
};
</script>

<style lang="scss" scoped>
li {
  display: inline-block;
}
.ml5{
	margin-left: 5px;
}
.pt20 {
  padding-top: 20px;
}
.hello {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  padding-left: 60px;
  z-index: 999;
  @media screen and (max-width: 1024px) {
	height: 50px;
	padding: 0;
  }
}
.logo-contain {
  width: 50px;
  height: 50px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 60px;
  margin: auto;
	@media screen and (max-width: 1024px) {
		height: 30px;
		width: 30px;
		left: 0;
		right: 0;
	}
}
.logo {
  width: 50px;
  height: 50px;
	@media screen and (max-width: 1024px) {
		height: 30px;
		width: 30px;
	}
}
.rout-contain {
  width: 80%;
  padding-left: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
	@media screen and (max-width: 1024px) {
		display: none;
	}
}
.rout {
  width: 400px;
  height: 70px;
  line-height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

}
.rout a {
  height: 70px;
  display: block;
	@media screen and (max-width: 1024px) {
		height: 30px;
	}
}
.selectedli {
  border-bottom: 2px solid #108de9;
  color: #108de9;
}
.selectedli p {
  height: 70px;
}

.login-img {
  display: block;
  width: 30px;
  height: 30px;
}
.other-s {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 20px;
}
.other {
  width: 700px;
  position: relative;
  input{
	  border: none;
  }
	@media screen and (max-width: 1024px) {
		display: none;
	}
}
.other-s span,.other-s a {
  height: 30px;
  line-height: 30px;
  font-size: 12px;
}
.rout-contain-phone{
	display: none;
	height: 50px;
	line-height: 50px;
	position: absolute;
	top: 0;
	left: 3%;
	@media screen and (max-width: 1024px) {
		display: block;
	}
}
.rout-contain-phone-s{
	display: none;
	height: 50px;
	line-height: 50px;
	position: absolute;
	top: 0;
	right: 3%;
	@media screen and (max-width: 1024px) {
		display: block;
	}
}
.rout-phone{
	font-size: 18px;
	position: absolute;
	top: 50px;
	left: 0;
	width: 100%;
	height: 250px;
	text-align: left;
	padding: 0 0 0 30px;
	border-bottom: 1px solid #cccccc;
	background: url("../../../static/image/modal-bg.jpg") no-repeat center ;
	background-size: 100% 100%;
	ul li{
		margin-top: 20px;
	}
	@media screen and (max-width: 1024px) {
		ul li{
			display: block;
		}
	}
}
.person-center{
	font-size: 18px;
	position: absolute;
	top: 50px;
	right: 0;
	width: 50px;
	height: 106px;
	text-align: left;
	padding: 0 10px;
	border: 1px solid #cccccc;
	background: url("../../../static/image/modal-bg.jpg") no-repeat center ;
	background-size: 100% 100%;
	ul li{
		margin-top: 20px;
		text-align: center;
	}
	@media screen and (max-width: 1024px) {
		ul li{
			display: block;
		}
	}
}
.search-phone{
	position: absolute;
	top: 70px;
	left: 0;
	width: 100%;
	height: 250px;
	padding: 0 300px;
	text-align: left;
	border-bottom: 1px solid #cccccc;
	background: url("../../../static/image/modal-bg.jpg") no-repeat center ;
	background-size: 100% 100%;
	@media screen and (max-width: 1024px) {
		top: 50px;
		padding: 0;
	}
}
.cur-poi {
  cursor: pointer;
}
.login-choose {
  width: 75px;
  position: absolute;
  top: 70px;
  left: 410px;
  font-size: 14px;
  border: 1px solid #169bd5;
}
.login-choose p,.login-choose a {
  height: 30px;
  line-height: 30px;
  color: #ffffff;
  background-color: #169bd5;
  cursor: pointer;
}
.login-choose p:hover,.login-choose a:hover {
  background-color: #ffffff;
  color: #169bd5;
}
.login-choose a {
  color: #fff;
}
.search-ipt{
	display: flex;
	flex-direction: row;
	justify-content: center;
	input{
		width: 48%;
		height: 30px;
		margin-top: 50px;
		float: left;
		padding-left: 5px;
		@media screen and (max-width: 1024px) {
			margin-top: 20px;
			width: 58%;
			border: 1px solid #A9A9A9;
		}
	}
	span{
		background-color: #169BD5;
		color: #ffffff;
		display: inline-block;
		height: 34px;
		line-height: 34px;
		width: 50px;
		text-align: center;
		font-size: 14px;
		float: left;
		margin-top: 50px;
		cursor: pointer;
		@media screen and (max-width: 1024px) {
			margin-top: 20px;
		}
	}
}
.search-result{
	color: #655858;
	display: flex;
	flex-direction: row;
	justify-content: center;
	ul{
		width: 48%;
		border: 1px solid #A9A9A9;
		border-top: none;
		padding: 5px 0 5px 7px;
		@media screen and (max-width: 1024px) {
			width: 58%;
		}
	}
}
.expand-enter-active {
	transition: all 1s ease;
	height: 250px;
	overflow: hidden;
}
.expand-leave-active{
	transition: all 1s ease;
	height: 0;
	overflow: hidden;
}
.expand-enter, .expand-leave {
	height: 0;
}
.person-enter-active {
	transition: all 0.5s ease;
	height: 106px;
	overflow: hidden;
}
.person-leave-active{
	transition: all 0.5s ease;
	height: 0;
	overflow: hidden;
}
.person-enter, .person-leave {
	height: 0;
}
.aniNavi{
	animation: ani-navi 1.5s ease-out;
	-moz-animation: ani-navi 1.5s ease-out;
	-webkit-animation: ani-navi 1.5s ease-out;
	-o-animation: ani-navi 1.5s ease-out;
}
.aniLeave{
	animation: ani-leave 1.5s ease-out;
	-moz-animation: ani-leave 1.5s ease-out;
	-webkit-animation: ani-leave 1.5s ease-out;
	-o-animation: ani-leave 1.5s ease-out;
}
.seaIn{
	animation: sea-in 1s linear;
	-moz-animation: sea-in 1s linear;
	-webkit-animation: sea-in 1s linear;
	-o-animation: sea-in 1s linear;
}
.seaOut{
	animation: sea-out 1s linear;
	-moz-animation: sea-out 1s linear;
	-webkit-animation: sea-out 1s linear;
	-o-animation: sea-out 1s linear;
}
@keyframes ani-navi {
	0% {margin-left: -30px;opacity: 0}
	100% {margin-left: 0;opacity: 1}
}
@keyframes ani-leave {
	0% {margin-left: 0;opacity: 1}
	100% {margin-left: -30px;opacity: 0}
}
@keyframes sea-in {
	0% {opacity: 0}
	100% {opacity: 1}
}
@keyframes sea-out {
	0% {opacity: 1}
	100% {opacity: 0}
}
.search-div{
	width:350px;
	border-radius: 10px;
	padding: 0 5px;
	height: 30px;
	margin-top: 20px;
	input{
		width: 300px;
		top: 0;
		bottom: 0;
		left: 10px;
		margin: auto;
		outline: none;
	}
	span{
		top: 0;
		right:10px;
		bottom: 0;
		margin: auto;
		display: block;
		width: 20px;
		line-height: 30px;
		vertical-align: center;
	}
}
.searchBorder{
	border: 1px solid #108DE9;
}
</style>
