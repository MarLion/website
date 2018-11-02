<template>
	<div class="main_sw main-back">
		<div class="container">
			<div class="tag">
				<router-link to="/product">产品</router-link>
				<i>|</i>
				<span>{{tit}} </span>
			</div>
			<div class="form-box js-m">
				<div class="container-mes">
					<div class="per-mes-tit">个人信息</div>
					<div class="per-mes-detail">
						<div class="input-group">
							<span class="title">姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：</span>
							<div class="input-box">
								<input class="text" type="text" v-model="name"/>
							</div>
						</div>
						<div class="input-group">
							<span class="title">性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别：</span>
							<div class="input-box">
								<select class="text" name="" id="" @change="select" v-model="sex">
									<option :value="0">男</option>
									<option :value="1">女</option>
								</select>
							</div>
						</div>
						<div class="input-group">
							<span class="title">年&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;龄：</span>
							<div class="input-box">
								<input class="text" type="text" v-model="age"/>
							</div>
						</div>
						<div class="input-group">
							<span class="title">家庭住址：</span>
							<div class="input-box">
								<input class="text" type="text" v-model="adds"/>
							</div>
						</div>
						<div class="input-group">
							<span class="title">联系电话：</span>
							<div class="input-box">
								<input class="text" type="text" v-model="tel"/>
							</div>
						</div>
						<div class="input-group">
							<span class="title">邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱：</span>
							<div class="input-box">
								<input class="text" type="text" v-model="email"/>
							</div>
						</div>
						<div class="input-group">
							<span class="title">个人介绍：</span>
							<div class="input-box">
								<textarea name="" id="" v-model="infoText"></textarea>
							</div>
						</div>
					</div>
				</div>
				<div class="container-photo">
					<div class="per-photo-tit">上传照片</div>
					<div class="per-photo-detail">
						<div class="input-group" v-show="isNeedIdcard"><!-- 注册用户  无需身份证 -->
							<span class="title">上传证件：</span>
							<div class="input-box">
								<div class="btn w150">
									<img :src="idCardBaseArrF[0]||'/static/img/register/id_front.png'" alt="上传身份证正面">
									<template v-if="idCardBaseArrF.length<=0">
										<span class="tips">身份证正面</span>
										<input type="file" accept="image" @change="getImgBase($event,1)">
									</template>
									<span v-if="idCardBaseArrF.length>0" class="del" title="删除" @click="delImg(0,1)">x</span>
								</div>
								<div class="btn w150">
									<img :src="idCardBaseArrB[0]||'/static/img/register/id_back.png'" alt="上传身份证背面">
									<p class="tips">身份证背面</p>
									<template v-if="idCardBaseArrB.length<=0">
										<input type="file" accept="image" @change="getImgBase($event,2)">
									</template>
									<span v-if="idCardBaseArrB.length>0" class="del" title="删除" @click="delImg(0,2)">x</span>
								</div>
							</div>
						</div>
						<div class="input-group">
							<span class="title">个人照片：</span>
							<div class="input-box">
								<div class="img" v-for="(src,index) in photoBaseArr">
									<img :src="src">
									<span class="del" title="删除" @click="delImg(index,0)">x</span>
								</div>
								<div class="btn w150">
									<img src="/static/img/register/by_bank.png" alt="添加图片">
									<p class="icon">更多图片</p>
									<input type="file" accept="image" @change="getImgBase($event,0)">
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="sub-btn">
					<button type="button" @click="submit">提交资料</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'register',
	data(){
		return {
			/* 根据page_id展示不同的表单内容 */
			tit: '',
			isNeedIdcard: false,
			photoBaseArr:[],/* 上传的照片*/
			idCardBaseArrF:[],/* 上传的身份证图片 正 */
			idCardBaseArrB:[],/* 上传的身份证图片 反*/
			infoText:'',/* 个人介绍 */
			name:'',
			sex: 0,/* 默认  男 */
			age:'',
			adds:'',
			tel:'',
			email:''
		}
	},
	mounted: function(){
		document.body.scrollTop = 0
		let da = {
			dataColor: '#F4FAFD'
		}
		this.$emit('getChangeColor', da)
		let last_id = this.$route.query.page_id
		if (last_id === 1) {
			this.tit = '平台用户注册'
			this.isNeedIdcard = false
		} else if (last_id === 2) {
			this.tit = '专职红娘注册'
			this.isNeedIdcard = false
		} else if (last_id === 3) {
			this.tit = '营养指导师注册'
			this.isNeedIdcard = true
		}
		this.$nextTick(function(){
			this.$scrollAni.scrollAni();//页面滚动动画
		});
	},
	destroyed () {
		/* 销毁时传入白色 */
		let defaultColor = '#ffffff'
		let da = {
			dataColor: defaultColor
		}
		this.$emit('getChangeColor', da)
	},
	methods:{
		getImgBase: function(event,imgArrFlag){//获取上传的照片并预览
			let _this = this;
			if(window.FileReader) {
                let reader =new FileReader(),
                	file=event.target.files[0];
                reader.readAsDataURL(file);
                reader.onloadend=function(){
					if(imgArrFlag==0){
						_this.photoBaseArr.push(reader.result);
					}else if(imgArrFlag==1){
						_this.idCardBaseArrF.push(reader.result);
					}else if(imgArrFlag==2){
						_this.idCardBaseArrB.push(reader.result);
					}
                }
			}else{
				alert('您的浏览器版本不支持该功能，请升级浏览器或者使用其他浏览器');
			}
		},
		delImg: function(index,imgArrFlag){/* 删除预览图片 */
			let _this=this;
			if(imgArrFlag==0){
				_this.photoBaseArr.splice(index,1);
			}else if(imgArrFlag==1){
				_this.idCardBaseArrF.splice(index,1);
			}else if(imgArrFlag==2){
				_this.idCardBaseArrB.splice(index,1);
			}
		},
		select: function(e){/* 下拉选择性别 */
			// console.log(e.target.value);
			console.log(this.sex);
		},
		submit: function(){
			let _this=this;
			if(!_this.name){
				alert('请填写姓名');
				return false;
			}
			let numReg=/^[0-9]*$/;
			if(!_this.age){
				alert('请填写年龄');
				return false;
			}
			if(!numReg.test(_this.age)){
				alert('请正确填写年龄');
				return false;
			}
			if(!_this.adds){
				alert('请填写家庭住址');
				return false;
			}
			let telReg=/^[1][0-9]{10}$/;
			if(!_this.tel){
				alert('请填写联系电话');
				return false;
			}
			if(!telReg.test(_this.tel)){
				alert('联系电话格式有误');
				return false;
			}
			let emailReg=/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
			if(!_this.email){
				alert('请填写邮箱');
				return false;
			}
			if(!emailReg.test(_this.email)){
				alert('邮箱格式有误');
				return false;
			}
			if(!_this.infoText){
				alert('请填写个人介绍');
				return false;
			}
		}
	}
}

</script>

<style lang="scss" scoped>
	input,textarea,select{
		border-radius: 5px;
		border: 1px solid #E0E0E0!important;
	}
	.main_sw{
		.container{
			width: 88%;
			max-width: 1400px;
			padding: 24px 0 5.8%;
			margin: 0 auto;
			.tag{
				font-weight: 700;
				font-style: normal;
				font-size: 14px;
				a{
					color: #169BD5;
				}
				i{
					position: relative;
					top: -1.5px;
					padding: 0 5px;
				}
				span{
					color: #333;
				}
			}
			.form-box{
				width: 100%;
				max-width: 1200px;
				padding-top: 4.9%;
				margin: 0 auto;
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
				.input-group{
					display: flex;
					align-items: center;
					margin-bottom: 25px;
					.title{
						flex-shrink: 0;
						width: 140px;
						font-size: 14px;
						color: #333;
					}
					.input-box{
						display: flex;
                        flex-wrap: wrap;
						.img{
							flex-shrink: 0;
							position: relative;
							width: 155px;
							height: 150px;
							margin-right: 32px;
							img{
								position: absolute;
								top: 0;
								left: 0;
								right: 0;
								bottom: 0;
								margin: auto;
								max-width: 100%;
								max-height: 100%;
							}
						}
						.btn{
							flex-shrink: 0;
							position: relative;
							height: 150px;
							margin-right: 32px;
							&:last-child{
								margin-right: 0;
							}
							&.w150{
								width: 155px;
							}
							&.w300{
								width: 300px;
							}
							img{
								position: absolute;
								top: 0;
								left: 0;
								right: 0;
								bottom: 0;
								margin: auto;
								max-width: 100%;
								max-height: 100%;
							}
							.icon,.tips{
								width: 100%;
								text-align: center;
								position: absolute;
								bottom: -10px;
								left: 50%;
								color: #333;
								transform: translate(-50%,-50%);
							}
							.icon{
								font-size: 13px;
							}
							.tips{
								font-size: 13px;
							}
							input{
								position: absolute;
								top: 0;
								left: 0;
								width: 100%;
								height: 100%;
								opacity: 0;
								filter:alpha(opacity=0);
							}
						}
						.del{
							position: absolute;
							top: 0;
							right: 0;
							width: 22px;
							height: 22px;
							font-size: 16px;
							line-height: 21px;
							text-align: center;
							color: #fff;
							background: rgba(0,0,0,0.8);
							cursor: pointer;
						}
						textarea{
							width: 621px;
							height: 170px;
							padding: 2px 5px;
							font-size: 14px;
							line-height: 1.8;
							resize: vertical;
						}
						.text{
							width: 300px;
							height: 36px;
							padding: 2px 5px;
							font-size: 14px;
							line-height: 36px;
							box-sizing: border-box;
							border: 1px solid #a9a9a9;
						}
					}
				}
				.sub-btn{
					padding: 20px 0 0 140px;
					button{
						width: 140px;
						height: 40px;
						border: 1px solid #797979;
						border-radius: 5px;
						font-size: 14px;
						color: #333;
						cursor: pointer;
					}
					button:hover{
						background-color: #108DEB;
						color: #ffffff;
					}
				}
				@media(max-width: 900px){
					.input-group{
						display: block;
						.title{
							display: block;
							padding-bottom: 15px;
						}
					}
					.sub-btn{
						padding: 20px 0 0 0;
					}
				}
				@media(max-width: 768px){
					.input-group{
						margin-bottom: 20px;
						.title{
							padding-bottom: 10px;
						}
						.input-box{
							.img{
								width: 155px*0.8;
								height: 150px*0.8;
								margin-right: 32px*0.8;
							}
							.btn{
								height: 150px*0.8;
								margin-right: 32px*0.8;
								&.w150{
									width: 155px*0.8;
								}
								&.w300{
									width: 48%;
									margin-right: 4%;
									&:last-child{
										margin-right: 0;
									}
									img{
										width: 100%;
										height: 100%;
									}
								}
								.icon,tips{
									font-size: 13px*0.8;
								}
							}
							.text{
								max-width: 100%;
								width: 450px;
								height: 32px;
							}
							textarea{
								width: 100%;
								height: 150px;
							}
						}
					}
				}
			}
		}
	}
	.container-mes{
		border: 1px solid #E0E0E0;
		background-color: #ffffff;
		.per-mes-tit{
			height: 50px;
			line-height: 50px;
			border-bottom: 1px solid #E0E0E0;
			padding: 0 20px;
			font-size: 18px;
		}
		.per-mes-detail{
			padding: 20px;
		}
	}
	.container-photo{
		background-color: #ffffff;
		border:  1px solid #E0E0E0;
		border-top: none;
		.per-photo-tit{
			height: 50px;
			line-height: 50px;
			border-bottom: 1px solid #E0E0E0;
			padding: 0 20px;
			font-size: 18px;
		}
		.per-photo-detail{
			padding: 20px;
		}
	}
	.main-back{
		background-color: #F4FAFD;
	}
</style>
