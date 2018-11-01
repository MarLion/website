<template>
  <div class="text-left container pos-re">
	<swiper id="swiperBox" :options="swiperOption" ref="mySwiper">
		<swiper-slide v-for="(item, index) in dataimg" :key="index">
			<div class="img-container">
				<img :src="item.imgSrc"/>
			</div>
		</swiper-slide>
	</swiper>
	  <div class="swiper-pagination"></div>
	  <div class="swiper-button-prev"></div>
	  <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import { swiper, swiperSlide} from 'vue-awesome-swiper'
export default {
  name: 'service',
  data () {
    return {
      dataimg: [
        {
          	imgSrc: '../../static/image/u816.png'
        },
        {
        	imgSrc: '../../static/image/u820.png'
        },
        {
			imgSrc: '../../static/image/u824.png'
        },
        {
			imgSrc: '../../static/image/u828.png'
        }
      ],
		swiperOption: {
			notNextTick: true,//notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
			loop: true,
			direction: 'vertical',//移动方向
			grabCursor: false,//鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状
			setWrapperSize: true,//Swiper使用flexbox布局(display: flex)，开启这个设定会在Wrapper上添加等于slides相加的宽或高，在对flexbox布局的支持不是很好的浏览器中可能需要用到。
			autoHeight: true,//自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化
			slidesPerView: 1,//设置slider容器能够同时显示的slides数量(carousel模式)。可以设置为数字（可为小数，小数不可loop），或者 'auto'则自动根据slides的宽度来设定数量。loop模式下如果设置为'auto'还需要设置另外一个参数loopedSlides。
			mousewheel: false,//开启鼠标滚轮控制Swiper切换。可设置鼠标选项，默认值false
			mousewheelControl: false,//同上
			height: window.innerHeight, // 高度设置，占满设备高度
			resistanceRatio: 0,//抵抗率。边缘抵抗力的大小比例。值越小抵抗越大越难将slide拖离边缘，0时完全无法拖离。本业务需要
			observeParents: true,
			autoplay: {
				disableOnInteraction: false
			},
			//左右点击
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			//分页器设置
			pagination: {
				el: '.swiper-pagination',
				clickable :true
			}
	  }
    }
  },
	components: {
		swiper,
		swiperSlide
  },
	mounted () {
		document.body.scrollTop = 0
		let col = 'rgba(0,0,0,0.2)'
		let font = '#ffffff'
		let da = {
			dataColor: col,
			dataFont: font
		}
		this.$emit('getChangeColor', da)
	},
	destroyed () {
		/* 销毁时传入白色 */
		let col = '#ffffff'
		let font = '#000000'
		let da = {
			dataColor: col,
			dataFont: font
		}
		this.$emit('getChangeColor', da)
	}
}
</script>

<style lang="scss" scoped>
.container{
	@media screen and (max-width: 1024px) {
		margin-top: 0;
	}
}
.img-container{
	width: 100%;
	height: 100%;
	img{
		width: 100%;
		height: 100%;
	}
}
.swiper-pagination{
	top: 0;
	bottom: 0;
	right: 30px;
	margin: auto;
	height: 100px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
.swiper-button-prev{
	background-image: url("../assets/img/up.png");
	right: 20px;
	left: auto;
	top: 35%;
	@media screen and (max-width: 450px) {
		top: 40%;
	}
}
.swiper-button-next{
	background-image: url("../assets/img/down.png");
	right: 20px;
	top: 65%;
	@media screen and (max-width: 450px) {
		top: 60%;
	}
}
</style>
