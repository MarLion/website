<template>
  <div class="mt70 mt-phone">
    <div class="container back-module-one" :style="{height: moduleHeight+'px'}">
      <h1 :class='{businessTitleAni: isAniOne}'>游戏联营</h1>
      <h3 class="mt30" :class="{businessSubTitAni: isAniOne}">资源共享合作共赢，只要产品足够优秀，您需要的我们全程服务</h3>
      <div class="mt50" :class="{businessBtnAni:isAniOne}">
        <span class="join-btn">加入联营</span>
      </div>
    </div>
    <div class="container back-module-two" :style="{height: moduleHeight+'px'}">
      <h1 class="" :class='{businessTitleAni: isAniTwo, defaultHid: isHidO}'>广告接入</h1>
      <h3 class="mt30" :class="{businessSubTitAni: isAniTwo, defaultHid: isHidO}">依靠优秀的解决方案，我们能够更精确的把优质产品送到用户手中</h3>
      <div class="mt50" :class="{businessBtnAni:isAniTwo, defaultHid: isHidO}">
        <span class="join-btn">广告接入</span>
      </div>
    </div>
    <div class="container back-module-three" :style="{height: moduleHeight+'px'}">
      <h1 class="" :class='{businessTitleAni: isAniThree, defaultHid: isHidS}'>平台加盟</h1>
      <h3 class="mt30" :class="{businessSubTitAni: isAniThree, defaultHid: isHidS}">开放、合作和共赢是我们一贯坚持的方向，欢迎加入玄乐平台、营养师平台、红娘平台</h3>
      <div class="mt50" :class="{businessBtnAni:isAniThree, defaultHid: isHidS}">
        <span class="join-btn">平台加盟</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'business',
  data () {
  	return {
  		moduleHeight: 400,
		isAniOne: true,
		isAniTwo: false,
		isAniThree: false,
		isHidO: true,
		isHidS: true
	}
  },
  mounted () {
	  document.body.scrollTop = 0
	  let defaultCol = "#CCCCFF"
	  let da = {
		  dataColor: defaultCol
	  }
	  this.$emit('getChangeColor', da)
	  window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
	  let defaultLast = "#ffffff"
	  let da = {
		  dataColor: defaultLast
	  }
	  this.$emit('getChangeColor', da)
	  window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
	  handleScroll: function () {
		  let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
		  let offsetHeiOne = document.getElementsByClassName('back-module-one')[0].offsetHeight
		  let offsetHeiTwo = document.getElementsByClassName('back-module-two')[0].offsetHeight
		  let offsetHeiThree = document.getElementsByClassName('back-module-three')[0].offsetHeight
		  let winHei = this.$scrollAni.getWindowHeight()
		  let docuHei = this.$scrollAni.getDocumentHeight()
		  let isBot = false;
		  isBot = docuHei === winHei + scrollTop;
		  if (scrollTop >= offsetHeiOne*0.75){
		  	this.isAniTwo = true
			this.isHidO = false
		  }
		  if (scrollTop >= offsetHeiOne + offsetHeiTwo*0.75 || isBot) {
		  	this.isAniThree = true
			this.isHidS =false
		  }
		  let col = ""
		  if (scrollTop < offsetHeiOne) {
			  col = "#CCCCFF"
		  }
		  if (scrollTop > offsetHeiOne && scrollTop < offsetHeiOne + offsetHeiTwo){
			  col = "#ffffff"
		  }
		  if(scrollTop > offsetHeiOne + offsetHeiTwo){
			  col = "#CCCCFF"
		  }
		  let da = {
			  dataColor: col
		  }
		  this.$emit('getChangeColor', da)
	  }
  }
}
</script>

<style lang="scss" scoped>
  .mt-phone{
	  @media screen and (max-width: 1024px) {
		  margin-top: 50px;
	  }
  }
  .container{
    padding: 140px 160px;
	@media screen and (max-width: 450px) {
		padding: 50px 6%;
	}
  }
  .back-module-one{
	  background: -webkit-linear-gradient(#CCCCFF, #ffffff);
	  background: -o-linear-gradient(#CCCCFF, #ffffff);
	  background: -moz-linear-gradient(#CCCCFF, #ffffff);
	  background: linear-gradient(#CCCCFF, #ffffff);
	  border-bottom: 1px solid #CCCCFF;
	  h1{
		  @media screen and (max-width: 450px) {
			  font-size: 20px;
		  }
	  }
	  h3, div{
		  @media screen and (max-width: 450px) {
			  font-size: 12px;
		  }
	  }
  }
  .back-module-two{
	  background: -webkit-linear-gradient(#ffffff, #CCCCFF);
	  background: -o-linear-gradient(#ffffff, #CCCCFF);
	  background: -moz-linear-gradient(#ffffff, #CCCCFF);
	  background: linear-gradient(#ffffff, #CCCCFF);
	  border-bottom: 1px solid #AFAFFB;
	  h1{
		  @media screen and (max-width: 450px) {
			  font-size: 20px;
		  }
	  }
	  h3, div{
		  @media screen and (max-width: 450px) {
			  font-size: 12px;
		  }
	  }
  }
  .back-module-three{
	  background: -webkit-linear-gradient(#CCCCFF, #ffffff);
	  background: -o-linear-gradient(#CCCCFF, #ffffff);
	  background: -moz-linear-gradient(#CCCCFF, #ffffff);
	  background: linear-gradient(#CCCCFF, #ffffff);
	  h1{
		  @media screen and (max-width: 450px) {
			  font-size: 20px;
		  }
	  }
	  h3, div{
		  @media screen and (max-width: 450px) {
			  font-size: 12px;
		  }
	  }
  }
  .join-btn{
    display: inline-block;
    width: 100px;
    height: 30px;
    line-height: 30px;
    border-radius: 5px;
    border: 1px solid #000000;
    cursor: pointer;
  }
  .join-btn:hover{
    color: #ffffff;
    background-color: #108DEB;
    border: 1px solid #108DEB;
  }
  .defaultHid{
	  opacity: 0;
  }
  .businessTitleAni{
	  animation: tit-ani 2s ease-out;
	  -moz-animation: tit-ani 2s ease-out;
	  -webkit-animation: tit-ani 2s ease-out;
	  -o-animation: tit-ani 2s ease-out;
  }
  .businessSubTitAni {
	  animation: sub-ani 3s ease-out;
	  -moz-animation: sub-ani 3s ease-out;
	  -webkit-animation: sub-ani 3s ease-out;
	  -o-animation: sub-ani 3s ease-out;
  }
  .businessBtnAni{
	  animation: btn-ani 3s ease-out;
	  -moz-animation: btn-ani 3s ease-out;
	  -webkit-animation: btn-ani 3s ease-out;
	  -o-animation: btn-ani 3s ease-out;
  }
  @keyframes tit-ani {
	0% {opacity: 0;width:  0}
	100% {opacity: 1;width: 100%}
  }
  @keyframes sub-ani {
	  0% {opacity: 0;margin-top: 0}
	  10% {opacity: 0;margin-top:  0}
	  100% {opacity: 1;margin-top: 30px}
  }
  @keyframes btn-ani {
	  0% {opacity: 0;margin-top: 0}
	  10% {opacity: 0;margin-top:  0}
	  100% {opacity: 1;margin-top: 50px}
  }
</style>
