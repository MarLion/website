<template>
  <div class="left-container">
    <ul>
      <li class="pos-re left-li-one">
        <!--<img src="../../assets/logo.png" class="left-icon"/>-->
		<span><i class="iconfont icon-lianxiwomen"></i></span>
        <div class="pos-ab left-content left-content-one">
          <p>请拨打</p>
          <p>027-88886666</p>
        </div>
      </li>
      <li  class="pos-re left-li-two">
        <!--<img src="../../assets/logo.png" class="left-icon"/>-->
		<span><i class="iconfont icon-laoren"></i></span>
        <div class="pos-ab left-content left-content-two">
          <p>请拨打</p>
          <p>027-88886666</p>
        </div>
      </li>
      <li  class="pos-re left-li-three">
        <!--<img src="../../assets/logo.png" class="left-icon"/>-->
		<span><i class="iconfont icon-xinwen"></i></span>
        <div class="pos-ab left-content left-content-three">
          <p>请拨打</p>
          <p>027-88886666</p>
        </div>
      </li>
      <li  class="pos-re left-li-four">
        <!--<img src="../../assets/logo.png" class="left-icon"/>-->
		<span><i class="iconfont icon-yuangongtiandi"></i></span>
        <div class="pos-ab left-content left-content-four">
          <p>请拨打</p>
          <p>027-88886666</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'lefter'
}
</script>

<style lang="scss" scoped>
  ul {
    list-style-type: none;
  }
  .left-container{
    position: fixed;
    top: 600px;
    left: 20px;
    background-color: rgba(255,255,255,0.6);
    z-index: 9999;
	@media screen and (max-width: 1024px) {
		top: 1024px;
		display: none;
	}
  }
  .left-container ul li{
    width: 20px;
    height: 20px;
    padding: 10px;
    border: 1px solid #797979;
    cursor: pointer;
  }
  .left-container ul li:hover {
    background-color: #cccccc;
  }
  .left-li-one:hover .left-content-one{
    opacity: 1;
    right: -162px;
    transition: opacity  0.5s, right 0.5s;
  }
  .left-li-two:hover .left-content-two{
    opacity: 1;
    right: -162px;
    transition: opacity  0.5s, right 0.5s;
  }
  .left-li-three:hover .left-content-three{
    opacity: 1;
    right: -162px;
    transition: opacity  0.5s, right 0.5s;
  }
  .left-li-four:hover .left-content-four{
    opacity: 1;
    right: -162px;
    transition: opacity  0.5s, right 0.5s;
  }
  .left-icon{
    width: 20px;
    height: 20px;
    /*z-index: 999;*/
  }
  .left-content{
    top: -1px;
    right: 0;
    width: 160px;
    border: 1px solid #797979;
    opacity: 0;
    background-color: #ffffff;
  }
  .left-content p{
    height: 30px;
    line-height: 30px;
  }
</style>
