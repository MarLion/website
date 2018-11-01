<template>
	<div class="dialog-cover"  v-show="isShowPub">
		<!-- 内容层  -->
		<transition>
			<div class="pos-ab dialog-content" :style="{height: heiNum+'px'}">
				<!-- 弹窗头部信息 -->
				<div class="dialog-header">
					<slot name="header"></slot>
				</div>
				<!-- 弹窗内容 -->
				<div class="dialog-body mt20">
					<slot name="content"></slot>
				</div>
				<!-- 提交按钮 -->
				<div class="dialog-footer mt30">
					<slot name="footer"></slot>
				</div>
				<!-- 关闭X -->
				<p class="pos-ab close" @click="closeMyself">
					<i class="iconfont icon-guanbi"></i>
				</p>
			</div>
		</transition>
	</div>
</template>

<script>
 export default {
  	name: 'dialoger',
	props: {
		isShowPub: {
			type: Boolean,
			defaultL: false,
			required: true
		},
    	heiNum: {
    		type: Number,
			default: 300
		}
	},
	methods: {
		closeMyself: function () {
			this.$emit('on-close')
		}
	}
  }
</script>

<style lang="scss" scoped>
.dialog-cover{
	width: 100%;
	height: 100%;
	position: fixed;
	z-index: 10000;
	top: 0;
	left: 0;
	background-color: rgba(0,0,0,0.6);
}
.dialog-content{
	width: 50%;
	z-index: 300;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	margin: auto;
	background-color: #ffffff;
	border-radius: 10px;
	padding-top: 20px;
	@media screen and (max-width: 768px) {
		width: 90%;
	}
}
.close{
	width: 30px;
	height: 30px;
	top: 5px;
	right: 5px;
	border-radius: 10px;
	cursor: pointer;
}
</style>
