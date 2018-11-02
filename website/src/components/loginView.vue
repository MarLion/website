<template>
  	<div class="main_sw">
		<div class="container f-cb">
			<div class="title fl js-m">
				<h4>众为信息</h4>
				<p>我们持续关注老人的生活、情感和健康</p>
			</div>
			<div class="form-box fr js-m">
				<h4>登录</h4>
				<label class="input-box">
					<span class="img"><img src="/static/img/login/u481.png" alt="用户名"></span>
					<input type="text" placeholder="用户名" v-model="name">
				</label>
				<label class="input-box">
					<span class="img"><img src="/static/img/login/u482.png" alt="密码"></span>
					<input type="password" placeholder="密码" v-model="pwd">
				</label>
				<div class="fgt-box">
					<label><input type="checkbox" name="" id="" @change="rememberAccount" v-model="checked" :true-value=0 :false-value=1><span>记住账号</span></label>
					<router-link to="/loginView">忘记密码？</router-link>
				</div>
				<button class="btn" @click="login">登 录</button>
				<div class="link-box">
					<router-link :to="{path: '/register', query:{page_id:1}}">立即注册</router-link>
					<span class="line"></span>
					<router-link to="/loginView">常见问题？</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "loginView",
	data(){
		return{
			checked:'',/* 是否记住账号 */
			name:'',
			pwd:''/* 密码 */
		}
	},
	mounted: function(){
		this.$nextTick(function(){
			this.$scrollAni.scrollAni();//页面滚动动画
		});
		let acc = localStorage.getItem('acc')
		if (!acc){
			this.name = ''
			this.checked = '1'
		} else {
			this.name = acc
			this.checked = '0'
		}
	},
	methods: {
		rememberAccount: function(){//记住账号 一个简单的记住账号功能 不必使用vuex 自己封装storage 方便修改维护 代码解耦
			if (this.checked === 0) {
				this.$scrollAni.getLocalStorage('acc',this.name)
			} else if (this.checked === 1) {
				this.$scrollAni.removeLoaclStorage('acc')
			}
		},
		login: function(){
			let _this=this;
			if(!_this.name){
				alert('请输入用户名');
				return false;
			}
			if(!_this.pwd){
				alert('请输入密码');
				return false;
			}
			// 用户可能出现先勾选记住账号 再填写账号的操作顺序 在点击登录时也要做判断
			if (this.checked === 0) {
				this.$scrollAni.getLocalStorage('acc',this.name)
			} else if (this.checked === 1) {
				this.$scrollAni.removeLoaclStorage('acc')
			}
			// 调用store管理登录状态
			this.$store.commit('ADD_COUNT',this.name)
			console.log(this.$store.state.token)
		}
	}
};
</script>
<style lang="scss" scoped>
	.main_sw{
		width: 88%;
		min-height: 800px;
		max-width: 1200px;
		margin: 0 auto;
		@media screen and (max-width: 1024px) {
			min-height: 1100px;
		}
		@media screen and (max-width: 768px) {
			min-height: 800px;
		}
		@media screen and (max-width: 450px) {
			min-height: 600px;
		}
		@media screen and (max-width: 375px) {
			min-height: 530px;
		}
		.container{
			padding: 13% 0 9%;
			.title{
				padding-right: 40px;
				h4{
					padding-bottom: 30px;
					font-size: 32px;
					font-weight: 700;
					font-style: normal;
					color: #000;
				}
				p{
					font-size: 18px;
					font-weight: 700;
					font-style: normal;
					color: #333;
				}
				@media(min-width: 1025px){
					h4{
						transform: translateY(30px);
						transition: transform 0.8s ,opacity 0.4s;
						transition-delay: 0.3s;
						opacity: 0;
					}
					p{
						transform: translateY(30px);
						opacity: 0;
						transition: transform 0.8s ,opacity 0.4s;
						transition-delay: 0.4s;
					}
					&.animate{
						h4,p{
							transform: translateY(0px);
							opacity: 1;
						}
					}
				}
				@media(max-width: 900px){
					float: none;
					padding: 0 0 6% 0;
					text-align: center;
					h4{
						padding-bottom: 3%;
						font-size: 32px*0.8;
					}
					p{
						font-size: 16px;
					}
				}
				@media(max-width: 450px){
					h4{
						font-size: 32px*0.6;
					}
					p{
						font-weight: normal;
					}
				}
			}
			.form-box{
				width: 390px;
				padding: 3.8% 4.4%;
				border: 1px solid #199ed8;
				border-radius: 10px;
				box-sizing: border-box;
				@media(min-width: 1025px){
					transform: translateY(30px);
					transition: transform 0.8s ,opacity 0.4s;
					transition-delay: 0.4s;
					opacity: 0;
					&.animate{
						transform: translateY(0px);
						opacity: 1;
					}
				}
				h4{
					padding-bottom: 22%;
					font-size: 26px;
					text-align: center;
					font-weight: 400;
					font-style: normal;
					color: #333;
				}
				.input-box{
					display: flex;
					padding: 2px 0;
					margin-bottom: 11%;
					border-bottom: 1px solid #199ed8;
					.img{
						position: relative;
						width: 25px;
						height: 25px;
						margin-right: 10px;
						flex-shrink: 0;
						img{
							position: absolute;
							top: 0;
							left: 0;
							right: 0;
							bottom: 0;
							margin: auto;
							display: block;
							max-width: 100%;
							max-height: 100%;
						}
					}
					input{
						flex: 1;
						height: 22px;
						border: 0;
						padding: 0;
						margin: 0;
						font-size: 18px;
						color: #333;
					}
				}
				.fgt-box{
					display: flex;
					justify-content: space-between;
					padding: 10px 0 32px;
					label,a{
						font-size: 14px;
						color: #333;
					}
					input{
						position: relative;
						top: 1.5px;
						margin-right: 6px;
					}
					@media(min-width: 1025px){
						a:hover{
							color: #1388BA;
						}
					}
				}
				.btn{
					width: 100%;
					height: 43px;
					margin-bottom: 20px;
					border: 1px solid #169bd5;
					border-radius: 5px;
					font-size: 16px;
					color: #1388BA;
					@media(min-width: 1025px){
						&:hover{
							color: #fff;
							background: #169bd5;
						}
					}
				}
				.link-box{
					display: flex;
					align-items: center;
					justify-content: center;
					span{
						display: inline-block;
						width: 1px;
						height: 17px;
						margin: 0 8px;
						background: #797979;
					}
					a{
						font-size: 14px;
						color: #333;
					}
					@media(min-width: 1025px){
						a:hover{
							color: #1388BA;
						}
					}
				}
				@media(max-width: 900px){
					float: none;
					max-width: 100%;
					margin: 0 auto;
					padding: 8% 4.4% 3.8%;
					h4{
						padding-bottom: 8%;
						font-size: 26px*0.8;
					}
					.input-box{
						.img{
							width: 22px;
							height: 22px;
						}
						input{
							font-size: 16px;
						}
					}
				}
			}
		}
	}
</style>
