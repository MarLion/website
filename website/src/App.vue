<template>
  <div id="app">
    <head-view :back-color="changeColor" :font-color="changeFonrtColor"></head-view>
    <router-view @getChangeColor="changeBack"></router-view>
    <left-view></left-view>
    <foot-view></foot-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
  	return{
		changeColor: '#ffffff',
		changeFonrtColor: '#000000'
	}
  },
  methods: {
	  changeBack: function (data) {
	  	/* 获取到改变的背景色后 传递给head-view组件 */
		  this.changeColor = data.dataColor
		  this.changeFonrtColor = data.dataFont
	  }
  }
}
</script>

<style lang="scss">
  @import "assets/public/public.css";
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
