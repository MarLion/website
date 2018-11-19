<template>
	<div class="game-container">
		<ul class="list-ul">
			<li v-for="(item, index) in gameList" :key="index">
				<img :src="item.src"/>
				<p>{{item.title}}</p>
				<p>{{item.describe}}</p>
			</li>
		</ul>
	</div>
</template>

<script>
  export default {
    name: 'game',
	data () {
    	return {
			show:true,
    		gameList: [
				{src: require('../../static/image/gameLogo.png'),title: '红中赖子杠', describe: '杠上开花节节高，武汉麻将不一般杠上开花节节高，武汉麻将不一般'},
				{src: require('../../static/image/u816.png'),title: '红中赖子杠', describe: '杠上开花节节高，武汉麻将不一般'},
				{src: require('../../static/image/u820.png'),title: '红中赖子杠', describe: '杠上开花节节高，武汉麻将不一般'},
				{src: require('../../static/image/u105.png'),title: '红中赖子杠', describe: '杠上开花节节高，武汉麻将不一般'},
				{src: require('../../static/image/u106.png'),title: '红中赖子杠', describe: '杠上开花节节高，武汉麻将不一般'},
				{src: require('../../static/image/u824.png'),title: '红中赖子杠', describe: '杠上开花节节高，武汉麻将不一般'},
				{src: require('../../static/image/u828.png'),title: '红中赖子杠', describe: '杠上开花节节高，武汉麻将不一般'},
				{src: require('../../static/image/gameLogo.png'),title: '红中赖子杠', describe: '杠上开花节节高，武汉麻将不一般'},
				{src: require('../../static/image/u107.png'),title: '红中赖子杠', describe: '杠上开花节节高，武汉麻将不一般'},
				{src: require('../../static/image/u108.png'),title: '红中赖子杠', describe: '杠上开花节节高，武汉麻将不一般'},
				{src: require('../../static/image/gameLogo.png'),title: '红中赖子杠', describe: '杠上开花节节高，武汉麻将不一般'}
			]
		}
	},
	mounted () {
    	this.$nextTick(function () {
			this.$scrollAni.scrollAni()
		})
	}
  }
</script>

<style lang="scss" scoped>
.game-container{
	min-height: 800px;
	padding: 70px 160px;
	margin-top: 70px;
	@media screen and (max-width: 1024px) {
		min-height: 1000px;
		padding: 30px 6%;
		margin-top: 50px;
	}
	@media screen and (max-width: 768px) {
		min-height: 800px;
	}
	@media screen and (max-width: 540px) {
		min-height: 500px;
	}
	@media screen and (max-width: 320px) {
		min-height: 400px;
	}
	.list-ul{
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		flex-wrap: wrap;
		li{
			width: 200px;
			padding: 30px;
			animation: showGame 2s ease-in forwards;
			-moz-animation: showGame 2s ease-in forwards;
			-webkit-animation: showGame 2s ease-in forwards;
			-o-animation: showGame 2s ease-in forwards;
			@media screen and (max-width: 1024px) {
				width: 120px;
				padding: 22px;
			}
			@media screen and (max-width: 768px) {
				width: 100px;
				padding: 15px;
				animation: none;
				-moz-animation: none;
				-webkit-animation: none;
				-o-animation: none;
			}
			@media screen and (max-width: 540px) {
				width: 100%;
				min-height: 100px;
				padding: 0;
				position: relative;
				border-bottom: 1px dashed #777070;
				&:first-child{
					border-top: 1px dashed #777070;
				}
			}
			img{
				width: 200px;
				height: 200px;
				border-radius: 10px;
				transition: transform 1s;
				-moz-transition: transform 1s;
				-webkit-transition: transform 1s;
				-o-transition: transform 1s;
				@media screen and (max-width: 1024px) {
					width: 120px;
					height: 120px;
				}
				@media screen and (max-width: 768px) {
					width: 100px;
					height: 100px;
				}
				@media screen and (max-width: 540px) {
					position: absolute;
					width: 80px;
					height: 80px;
					top: 0;
					bottom: 0;
					left: 5px;
					margin: auto;
				}
			}
			img:hover{
				transform: scale(1.1) rotate(5deg);
				-ms-transform: scale(1.1) rotate(5deg);
				-moz-transform: scale(1.1) rotate(5deg);
				-webkit-transform: scale(1.1) rotate(5deg);
				-o-transform: scale(1.1) rotate(5deg);
			}
			p{
				text-align: left;
				margin-top: 5px;
				font-size: 14px;
				@media screen and (max-width: 540px) {
					margin-top: 10px;
					padding-left: 100px;
				}
			}
			:nth-child(2){
				color: #EA8002;
			}
		}
	}
}
@keyframes showGame {
	0%   {opacity: 0;transform: scale(1);}
	50%  {opacity: 1;transform: scale(1.1);}
	100% {opacity: 1;transform: scale(1);}
}
</style>
