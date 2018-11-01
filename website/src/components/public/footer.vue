<template>
  <div class="foot-container">
    <div class="left-con">
      <ul>
        <li>
		  <span><i class="iconfont icon-lianxiwomen"></i></span>
          <span class="fun">联系我们</span>
        </li>
        <li class="ml20">
		  <span><i class="iconfont icon-laoren"></i></span>
          <span class="fun">老人关怀</span>
        </li>
        <li class="ml20">
		  <span><i class="iconfont icon-xinwen"></i></span>
          <span class="fun">公司新闻</span>
        </li>
        <li class="ml20">
		  <span><i class="iconfont icon-yuangongtiandi"></i></span>
          <span class="fun">员工天地</span>
        </li>
      </ul>
      <p class="fs12 text-right">Copyright: 2009-2018 众为信息所有 备案字：K242129923423-9</p>
    </div>
    <div class="right-con ml30">
      <img src="../../assets/logo.png" class="code-img"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footView'
}
</script>

<style lang="scss" scoped>
.foot-container{
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-top: 1px solid #CCCCCC;
  padding-top: 30px;
	@media screen and (max-width: 450px) {
		padding: 10px 5px 0;
	}
}
.left-con{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media screen and (max-width: 450px) {
	  width: 50%;
  }
}
.left-con ul{
  width: 500px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
	@media screen and (max-width: 450px) {
		width: 100%;
		justify-content: space-around;
		flex-direction: column;
	}
}
.left-con ul li{
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 20px;
  line-height: 20px;
  span{
	  height: 20px;
	  line-height: 20px;
	  @media screen and (max-width: 450px) {
		  width: 40%;
	  }
  }
  @media screen and (max-width: 450px) {
	  margin-top: 5px;
  }
}
.img-icon{
  display: block;
  width: 30px;
  height: 30px;
	@media screen and (max-width: 450px) {
		width: 20px;
		height: 20px;
	}
}
.fun{
  height: 30px;
  line-height: 30px;
  font-size: 12px;
  margin-left: 10px;
	@media screen and (max-width: 450px) {
		margin-left: 1px;
		height: 20px;
		line-height: 20px;
	}
}
.code-img{
  width: 100px;
  height: 100px;
	@media screen and (max-width: 450px) {
		width: 50px;
		height: 50px;
		margin-top: 20px;
	}
}
.left-con p{
	@media screen and (max-width: 450px) {
		display: none;
	}
}
</style>
