<template>
  <div class="mt70 mt-phone">
    <div class="xuanle-container pos-re">
      <div class="left-container">
        <h1 class="pro-tit" :class="{titleAni: aniOne, titleAniDefault: aniDefalt}">
          玄乐APP
        </h1>
        <h3 class="pro-tit mt20">我们持续关注老人的生活、情感和健康</h3>
        <div class="mt50 down-container">
          <span v-on:click="say(['IOS版下载','兼容IOS 8.0以上版本手机'])" class="download">下载ios版</span>
          <span v-on:click="say(['Android版下载','兼容Android 5.0以上版本手机'])" class="download">下载Android版</span>
        </div>
        <p class="pro-tit mt50">{{msg}}</p>
        <div class="mt10 clearfloat">
          <img src="../assets/logo.png" class="down-code fl mt10"/>
          <div class="text-left  fl detail-area">
            <p>最新版 V6.5，各大应用店均可下载</p>
            <p class="mt10">{{msgDetail}}</p>
          </div>
        </div>
        <p class="pro-tit mt10">扫描二维码</p>
      </div>
		<img src="../../static/image/u105.png" class="pos-ab pro-img right1"/>
		<img src="../../static/image/u106.png" class="pos-ab pro-img right2"/>
		<img src="../../static/image/u107.png" class="pos-ab pro-img right3"/>
		<img src="../../static/image/u108.png" class="pos-ab pro-img right4"/>
    </div>
    <div class="product-two">
      <div class="left-container">
        <h1 class="pro-tit" :class="{titleAni: aniTwo}">营养指导师平台</h1>
        <h3 class="pro-tit mt20">关注您的健康，我们在身体力行</h3>
        <div class="mt50 reg-btn">
		  <router-link class="register" :to="{path: '/register', query:{page_id:3}}">注册平台营养师</router-link>
        </div>
        <ul class="mt50">
          <li class="clearfloat">
            <!--<img src="../assets/logo.png" class="icon fl"/>-->
			<span class="fl"> <i class="iconfont icon-ziyingtubiao" :style="{fontSize: '20px'}"></i></span>
            <div class="fl func">
              <p class="text-left color-u">商品自营</p>
              <p class="text-left">打破代理机制，取消中间环节，让商品直达用户。</p>
            </div>
          </li>
          <li class="clearfloat mt20">
            <!--<img src="../assets/logo.png" class="icon fl"/>-->
			<span class="fl"> <i class="iconfont icon-shangpin" :style="{fontSize: '20px'}"></i></span>
            <div class="fl func">
              <p class="text-left color-u">精选优质商品</p>
              <p class="text-left">对入驻品牌进行筛选和管理，保障用户权益。</p>
            </div>
          </li>
          <li class="clearfloat mt20">
            <!--<img src="../assets/logo.png" class="icon fl"/>-->
			<span class="fl"> <i class="iconfont icon-jiebantubiao-" :style="{fontSize: '20px'}"></i></span>
            <div class="fl func">
              <p class="text-left color-u">专业指导</p>
              <p class="text-left">建立资质考核体系，建立营养指导师评选标准，为厂家和用户提供专业的指导服务。</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="right-container">
      </div>
    </div>
    <div class="product-three">
      <h1 :class="{titleAniFri: aniThree}">相亲交友平台</h1>
      <h3 class="mt20">让老人能够以更幸福的方式度过自己的人生晚年是我们的宗旨和目标</h3>
      <div class="mt50 register-btn">
		<router-link class="register" :to="{path: '/register', query:{page_id:2}}">注册红娘</router-link>
		<router-link class="register ml30" :to="{path: '/register', query:{page_id:1}}">注册用户</router-link>
      </div>
      <ul class="mt50 pro-func">
        <li>
          <img src="../assets/logo.png" class="icon-img"/>
          <h2 class="mt30">专属红娘</h2>
          <p class="mt30 pad-r">建立资质考核体系，建立营养指导师评选标准，为厂家和用户提供专业的指导服务。</p>
        </li>
        <li>
          <img src="../assets/logo.png" class="icon-img"/>
          <h2 class="mt30">老人交友</h2>
          <p class="mt30 pad-r">建立资质考核体系，建立营养指导师评选标准，为厂家和用户提供专业的指导服务。</p>
        </li>
        <li>
          <img src="../assets/logo.png" class="icon-img"/>
          <h2 class="mt30">子女相亲</h2>
          <p class="mt30 pad-r">建立资质考核体系，建立营养指导师评选标准，为厂家和用户提供专业的指导服务。</p>
        </li>
      </ul>
    </div>
    <div class="product-four">
      <div class="left-container">
        <h1 class="pro-tit" :class="{titleAni: aniFour}">高电位治疗仪</h1>
        <h3 class="pro-tit mt20">我们为您的健康保驾护航</h3>
        <div class="mt50 reg-btn">
          <a href="###" class="register" @click="openDialog">免费预约体检</a>
        </div>
        <ul class="mt50">
          <li class="clearfloat">
            <!--<img src="../assets/logo.png" class="icon fl"/>-->
			<span class="fl"> <i class="iconfont icon-wicon-zhuan-li-shen-qing" :style="{fontSize: '20px'}"></i></span>
            <div class="fl func lint-pro">
              <p class="text-left">国家专利技术，多年临床验证</p>
            </div>
          </li>
          <li class="clearfloat mt20">
            <!--<img src="../assets/logo.png" class="icon fl"/>-->
			<span class="fl"> <i class="iconfont icon-fuwu" :style="{fontSize: '20px'}"></i></span>
            <div class="fl func lint-pro">
              <p class="text-left">服务于数十万老年用户</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="right-container">
      </div>
    </div>
	  <dialog-view :is-show-pub="isDialogShow"  :hei-num=300 @on-close="closePubDialog">
		  <div slot="header">请输入您的信息</div>
		  <div slot="content" class="content">
			  <div>
				  <span>姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：</span>
				  <input type="text" v-model="uName" class="mes-ipt"/>
			  </div>
			  <div class="mt20">
				  <span>联系方式：</span>
				  <input type="text" v-model="uPhone" class="mes-ipt"/>
			  </div>
			  <div class="mt20">
				  <span>家庭住址：</span>
				  <input type="text" v-model="uAddress" class="mes-ipt"/>
			  </div>
		  </div>
		  <div slot="footer">
			  <div class="register mes-com">提交资料</div>
		  </div>
	  </dialog-view>
  </div>
</template>

<script>
export default {
  name: 'product',
  data () {
    return {
      msg: 'IOS版下载',
      msgDetail: '兼容IOS 8.0以上版本手机',
      aniOne: false, /* 是否加载动画 */
      aniTwo: false,
      aniThree: false,
      aniFour: false,
      aniDefalt: true,
	  isDialogShow: false, /* 是否显示弹窗 */
	  uName: '',
	  uPhone: '',
	  uAddress: ''
    }
  },
  methods: {
    say: function (mes) {
      this.msg = mes[0]
      this.msgDetail = mes[1]
    },
    handleScroll: function () {
      /* 根据滚动距离动态添加动画 */
	  /* 获取各个板块的高度 */
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
	  let offsetHeiOne = document.getElementsByClassName('xuanle-container')[0].offsetHeight;
      let offsetHeiTwo = document.getElementsByClassName('product-two')[0].offsetHeight;
      let offsetHeiThree = document.getElementsByClassName('product-three')[0].offsetHeight;
      let offsetHeiFour = document.getElementsByClassName('product-four')[0].offsetHeight;
      /* 判断是否滚动到底部 */
	  let winHei = this.$scrollAni.getWindowHeight()
	  let docuHei = this.$scrollAni.getDocumentHeight()
	  let isBottom = false
	  if (docuHei === winHei + scrollTop) {
		  isBottom = true
	  } else {
	  		isBottom = false
	  }
      if(scrollTop > 0) {
        this.aniDefalt = false
      }
      if (scrollTop === 0) {
        this.aniOne = true
      } else {
        this.aniOne = false
      }
      if (scrollTop >= offsetHeiOne) {
        this.aniTwo = true
      } else {
        this.aniTwo = false
      }
      if (scrollTop >= offsetHeiTwo + offsetHeiOne) {
        this.aniThree = true
      } else {
        this.aniThree = false
      }
      if (scrollTop >= offsetHeiThree + offsetHeiTwo + offsetHeiTwo || isBottom) {
        this.aniFour = true
      } else {
        this.aniFour = false
      }
      /* 根据滚动的高度将背景色传递给父组件 */
		let col = ""
	  if (scrollTop <= offsetHeiOne) {
	  	col = "#99CC66"
	  }
	  if (scrollTop > offsetHeiOne && scrollTop < offsetHeiOne + offsetHeiTwo){
		  col = "#ffffff"
	  }
	  if(scrollTop > offsetHeiOne + offsetHeiTwo && scrollTop < offsetHeiOne + offsetHeiTwo + offsetHeiThree){
		  col = "#99CCFF"
	  }
	  if(scrollTop > offsetHeiOne + offsetHeiTwo + offsetHeiThree){
		  col = "#ffffff"
	  }
		let da = {
			dataColor: col
		}
		this.$emit('getChangeColor', da)
    },
	openDialog: function () {
    	this.isDialogShow = true
	},
	closePubDialog: function () {
		this.isDialogShow = false
	}
  },
  /* 在mounted钩子函数中添加监听滚动事件 */
  mounted () {
  	document.body.scrollTop = 0
  	/* 挂载时传入一个默认颜色 */
  	let defaultColor = '#99CC66'
	let da = {
  		dataColor: defaultColor
	}
	this.$emit('getChangeColor', da)
    window.addEventListener('scroll', this.handleScroll)
  },
  /* 组件销毁时删除滚动事件 */
  destroyed () {
  	/* 销毁时传入白色 */
	  let defaultColor = '#ffffff'
	  let da = {
		  dataColor: defaultColor
	  }
	  this.$emit('getChangeColor', da)
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="scss" scoped>
.mt-phone{
  @media screen and (max-width: 1024px) {
	margin-top: 50px;
	width: 100%;
  }
}
.xuanle-container{
  background-color: #99CC66;
  padding: 140px 160px;
	@media screen and (max-width: 1024px) {
		padding: 80px 6%;
	}
	@media screen and (max-width: 450px) {
		padding: 30px 6%;
	}
	.pro-img{
		width: 280px;
		top: 0;
		bottom: 0;
		margin: auto;
		@media screen and (max-width: 1024px) {
			display: none;
		}
	}
	.right1{
		right: 790px;
		animation: pro-one-ani1 20s ease-in infinite;
		-moz-animation: pro-one-ani1 20s ease-in infinite;
		-webkit-animation: pro-one-ani1 20s ease-in infinite;
		-o-animation: pro-one-ani1 20s ease-in infinite;
	}
	.right2{
		right: 590px;
		animation: pro-one-ani2 20s ease-in infinite;
		-moz-animation: pro-one-ani2 20s ease-in infinite;
		-webkit-animation: pro-one-ani2 20s ease-in infinite;
		-o-animation: pro-one-ani2 20s ease-in infinite;
	}
	.right3{
		right: 390px;
		animation: pro-one-ani3 20s ease-in infinite;
		-moz-animation: pro-one-ani3 20s ease-in infinite;
		-webkit-animation: pro-one-ani3 20s ease-in infinite;
		-o-animation: pro-one-ani3 20s ease-in infinite;
	}
	.right4{
		right: 160px;
		animation: pro-one-ani4 20s ease-in infinite;
		-moz-animation: pro-one-ani4 20s ease-in infinite;
		-webkit-animation: pro-one-ani4 20s ease-in infinite;
		-o-animation: pro-one-ani4 20s ease-in infinite;
	}
	@keyframes pro-one-ani1 {
		0% {transform: scale(1);z-index: 1;}
		3.25% {transform: scale(1.2);z-index: 100;}
		15.5% {transform: scale(1.2);z-index: 100;}
		18.75% {transform: scale(1);z-index: 1;}
		100% {transform: scale(1);z-index: 1;}
	 }
	@keyframes pro-one-ani2 {
		0% {transform: scale(1);z-index: 1;}
		25% {transform: scale(1);z-index: 1;}
		28.25% {transform: scale(1.2);z-index: 100;}
		40.5% {transform: scale(1.2);z-index: 100;}
		43.75% {transform: scale(1);z-index: 1;}
		100% {transform: scale(1);z-index: 1;}
	}
	@keyframes pro-one-ani3 {
		0% {transform: scale(1);z-index: 1;}
		50% {transform: scale(1);z-index: 1;}
		53.25% {transform: scale(1.2);z-index: 100;}
		65.5% {transform: scale(1.2);z-index: 100;}
		68.75% {transform: scale(1);z-index: 1;}
		100% {transform: scale(1);z-index: 1;}
	}
	@keyframes pro-one-ani4 {
		0% {transform: scale(1);z-index: 1;}
		75% {transform: scale(1);z-index: 1;}
		78.25% {transform: scale(1.2);z-index: 100;}
		90.5% {transform: scale(1.2);z-index: 100;}
		93.75% {transform: scale(1);z-index: 1}
		100% {transform: scale(1);z-index: 1;}
	}
}
.left-container{
  	width: 500px;
	@media screen and (max-width: 450px) {
		width: 100%;
	}
	h1{
		@media screen and (max-width: 450px) {
			font-size: 22px;
		}
	}
	h3{
		@media screen and (max-width: 450px) {
			 font-size: 16px;
		}
	}
}
.pro-tit{
	text-align: left;
	@media screen and (max-width: 450px) {
		text-align: center;
	}
}
.down-container {
  width: 326px;
  display: flex;
  flex-direction:row;
  justify-content:space-between;
	@media screen and (max-width: 450px) {
		width: 100%;
		margin-top: 30px;
		justify-content: space-around;
	}
}
.download{
  width: 140px;
  height: 50px;
  border-radius: 5px;
  background-color: #ffffff;
  border:none;
  color: #108DEB;
  cursor: pointer;
  font-size: 12px;
  line-height: 50px;
	@media screen and (max-width: 450px) {
		width: 40%;
	}
}
.download:hover{
  color: #ffffff;
  background-color: #108DEB;
}
.down-code{
  width: 100px;
  height: 100px;
	@media screen and (max-width: 320px) {
		width: 80px;
		height: 80px;
	}
}
.detail-area{
  height: 100px;
  margin-left: 50px;
  display: flex;
  flex-direction:column;
  justify-content: center;
	@media screen and (max-width: 450px) {
		margin-left: 10px;
	}
	p{
		@media screen and (max-width: 450px) {
			font-size: 12px;
		}
	}
}
.product-two{
  background-color: #ffffff;
  padding: 140px 160px;
	@media screen and (max-width: 1024px) {
		padding: 80px 6%;
	}
	@media screen and (max-width: 450px) {
		padding: 30px 6%;
	}
}
.reg-btn{
	@media screen and (max-width: 450px) {
		margin-top: 30px;
	}
}
.register{
  display: block;
  width: 200px;
  height: 40px;
  line-height: 40px;
  border: 1px solid  #108DEB;
  border-radius: 5px;
  color: #108DEB;
	@media screen and (max-width: 450px) {
		margin: 0 auto;
		width: 150px;
	}
	@media screen and (max-width: 320px) {
		margin: 0 auto;
		width: 120px;
		font-size: 12px;
	}
}
.icon{
  width: 50px;
  height: 50px;
	@media screen and (max-width: 450px) {
		width: 30px;
		height: 30px;
	}
	@media screen and (max-width: 320px) {
		width: 25px;
		height: 25px;
	}
}
.product-two ul li{
  display: block;
}
.func{
  width: 400px;
  height: 50px;
  display: flex;
  flex-direction:column;
  justify-content: space-between;
  margin-left: 20px;
  font-size: 14px;
	@media screen and (max-width: 450px) {
		width: 80%;
	}
}
.color-u{
  color: #108DEB;
}
.product-three{
  background-color: #99CCFF;
  padding: 140px 160px;
	@media screen and (max-width: 450px) {
		padding: 30px 6%;
	}
	h1{
		@media screen and (max-width: 450px) {
			font-size: 22px;
		}
	}
	h3{
		@media screen and (max-width: 450px) {
			font-size: 16px;
		}
	}
}
.register-btn{
  display: flex;
  flex-direction:row;
  justify-content: center;
}
.register-btn a{
  background-color: #ffffff;
  color: #108DEB;
  border: 1px solid #108DEB;
}
.register-btn a:hover{
  background-color: #108DEB;
  color: #ffffff;
}
.icon-img{
  width: 30px;
  height: 30px;
  margin-top: 100px;
	@media screen and (max-width: 1024px) {
		margin-top: 30px;
	}
}
.pro-func{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  @media screen and (max-width: 1024px) {
	  flex-direction: column;
	  justify-content: center;
  }
}
.pro-func li{
  background-color: #ffffff;
  width: 360px;
  height: 380px;
  border: 1px solid #108DE9;
  @media screen and (max-width: 1024px) {
	  height: 300px;
	  margin-top: 5px;
	  width: 100%;
  }
  @media screen and (max-width: 450px) {
	  height: 300px;
	  margin-top: 5px;
	  width: 100%;
  }
}
.pad-r{
  padding: 0 50px;
  text-align: left;
	@media screen and (max-width: 1024px) {
		padding: 0 10px;
		text-align: center;
	}
}
.product-four{
  background-color: #ffffff;
  padding: 140px 160px;
	@media screen and (max-width: 1024px) {
		padding: 80px 6%;
	}
	@media screen and (max-width: 450px) {
		padding: 30px 6%;
	}
}
.product-four ul li{
  display: block;
}
.lint-pro{
  /*line-height: 80px;*/
	@media screen and (max-width: 450px) {
		/*line-height: 50px;*/
	}
}
.content{
	div{
		input{
				border: 1px solid #D1CDCD;
		}
	}
}
.mes-ipt{
	width: 70%;
	@media screen and (max-width: 450px) {
		width: 60%;
		margin-left: 5px;
	}
}
.mes-com{
	margin: 0 auto;
	cursor: pointer;
}
.titleAniDefault{
  animation: titleScale 2s ease;
  -moz-animation: titleScale 2s ease;
  -webkit-animation: titleScale 2s ease;
  -o-animation: titleScale 2s ease;
	@media screen and (max-width: 450px) {
		animation: none;
		-moz-animation: none;
		-webkit-animation: none;
		-o-animation: none;
	}
}
.titleAni{
  animation: titleScale 2s ease;
  -moz-animation: titleScale 2s ease;
  -webkit-animation: titleScale 2s ease;
  -o-animation: titleScale 2s ease;
	@media screen and (max-width: 450px) {
		animation: none;
		-moz-animation: none;
		-webkit-animation: none;
		-o-animation: none;
	}
}
.titleAniFri{
  animation: titleFri 2s ease;
  -moz-animation: titleFri 2s ease;
  -webkit-animation: titleFri 2s ease;
  -o-animation: titleFri 2s ease;
	@media screen and (max-width: 450px) {
		animation: none;
		-moz-animation: none;
		-webkit-animation: none;
		-o-animation: none;
	}
}
@keyframes titleScale {
  0% {transform: scale(1);margin-left: 0;}
  10% {transform: scale(1);margin-left: 100px;}
  30% {transform: scale(1.5);margin-left: 100px;}
  70% {transform: scale(1.5);margin-left: 100px;}
  90% {transform: scale(1);margin-left: 100px;}
  100% {transform: scale(1);margin-left: 0;}
}
@keyframes titleFri {
  0% {transform: scale(1);}
  30% {transform: scale(1.5);}
  70% {transform: scale(1.5);}
  100% {transform: scale(1);}
}
</style>
