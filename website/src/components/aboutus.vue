<template>
	<div class="main_sw">
		<div class="box1">
			<div class="wrap">
				<div class="title js-m">
					<h4>众为信息</h4>
					<p>我们持续关注老人的生活、情感和健康</p>
				</div>
				<div class="list-box f-cb js-m">
					<div class="line">
						<img src="/static/img/about/u858.png" alt="实线">
						<img src="/static/img/about/u940.png" alt="虚线">
					</div>
					<div class="list fl">
						<div class="icon"><img src="/static/img/about/motorcycle_u385.png" alt="图标"><div class="time">Since 2015</div></div>
						<div class="text">创建众为信息，专注于软件平台解决方案</div>
					</div>
					<div class="list fl">
						<div class="icon"><img src="/static/img/about/u852.png" alt="图标"><div class="time">2016</div></div>
						<div class="text">上线玄乐App</div>
					</div>
					<div class="list fl">
						<div class="icon"><img src="/static/img/about/u852.png" alt="图标"><div class="time">2017</div></div>
						<div class="text">上线游戏40+</div>
					</div>
					<div class="list fl">
						<div class="icon"><img src="/static/img/about/u852.png" alt="图标"><div class="time">2018</div></div>
						<div class="text">用户过百万</div>
					</div>
					<div class="list fl">
						<div class="icon"><img src="/static/img/about/u852.png" alt="图标"><div class="time">2019</div></div>
						<div class="text">获得A轮融资</div>
					</div>
					<div class="list fl">
						<div class="icon"><img src="/static/img/about/u852.png" alt="图标"><div class="time">202x</div></div>
						<div class="text">上市</div>
					</div>
				</div>
			</div>
		</div>
		<div class="box2">
			<div class="wrap">
				<div class="list-box f-cb js-m2">
					<div class="list fl">
						<h4>楚河汉街</h4>
						<p>总部行政营销中心</p>
						<div class="img">
							<img src="../assets/img/u369.png" alt="楚河汉街"/>
						</div>
					</div>
					<div class="list fl">
						<h4>金能创客基地</h4>
						<p>智能硬件研发中心</p>
						<div class="img">
							<img src="../assets/img/u373.png" alt="金能创客基地"/>
						</div>
					</div>
					<div class="list fl">
						<h4>东湖高新技术开发区</h4>
						<p>软件、游戏研发中心</p>
						<div class="img">
							<img src="../assets/img/u377.png" alt="东湖高新技术开发区"/>
						</div>
					</div>
					<div class="list fl">
						<h4>东湖高新技术开发区</h4>
						<p>智能设备制造中心</p>
						<div class="img">
							<img src="../assets/img/u381.png" alt="东湖高新技术开发区"/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
    name: "aboutus",
    data(){
		return {

		}
	},
	mounted: function(){
		document.body.scrollTop = 0
		let da = {
			dataColor: '#99cc66'
		}
		this.$emit('getChangeColor', da)
		this.$nextTick(function(){
			this.$scrollAni.scrollAni();//页面滚动动画
		});
	}
};
</script>

<style lang="scss" scoped>
	.main_sw{
		.box1{
			background: #99cc66;
			.wrap{
				width: 88%;
				max-width: 1250px;
				padding: 6.7% 0 14%;
				margin: 0 auto;
				.title{
					padding-bottom: 4.8%;
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
						h4{
							padding-bottom: 4%;
							font-size: 32px*0.8;
						}
						P{
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
				.list-box{
					position: relative;
					padding: 110px 0;
					.line{
						font-size: 0;
						img{
							&:nth-child(1){
								width: 69.36%;
							}
							&:nth-child(2){
								width: 30.64%;
							}
						}
					}
					.list{
						position: relative;
						width: 19%;
						margin-top: -13px;
						.icon{
							display: inline-block;
							img{
								display: block;
								margin: 0 auto 10px;
							}
						}
						.time{
							font-family: 'Arial Negreta', 'Arial Normal', 'Arial';
							font-weight: 700;
							font-style: normal;
							font-size: 18px;
							color: #108DE9;
						}
						.text{
							position: absolute;
							left: 0;
							box-sizing: border-box;
							min-width: 80px;
							padding: 15px 12px 12px;
							margin: 12px 0;
							border: 1px solid #797979;
							font-size: 14px;
							line-height: 1.6;
							text-align: justify;
							color: #333;
							background: #fff;
						}
						&:nth-child(2){
							.icon{
								img{
									position: absolute;
									top: -32px;
								}
								.time{
									padding-top: 25px;
								}
							}
						}
						&:nth-child(2n){
							.text{
								top: 100%;
							}
						}
						&:nth-child(2n+1){
							.text{
								bottom: 100%;
							}
						}
						&:last-child{
							width: 5%;
						}
					}
					@media(min-width: 1250px){
						.line{
							clip-path: inset(0% 100% 0% 0%);
							transition: clip-path 1.5s 0.6s ;
						}
						.list{
							opacity: 0;
							transform: translateX(-10px);
							transition: transform 0.8s, opacity 0.8s;
							.text{
								opacity: 0;
								transition: transform 0.6s ease-in-out,opacity 0.4s;
							}
							&:nth-child(2n){
								.text{
									transform: translateY(20px);
								}
							}
							&:nth-child(2n+1){
								.text{
									transform: translateY(-20px);
								}
							}
						}
						&.animate{
							.line{
								clip-path: inset(0% 0% 0% 0%);
							}
							.list{
								opacity: 1;
								transform: translateX(0px);
								&:nth-child(2n){
									.text{
										transform: translateY(0);
										opacity: 1;
									}
								}
								&:nth-child(2n+1){
									.text{
										transform: translateY(0);
										opacity: 1;
									}
								}
								&:nth-child(2){
									transition-delay: 0.7s;
									.text{
										transition-delay: 0.9s;
									}
								}
								&:nth-child(3){
									transition-delay: 0.7s + 0.3s;
									.text{
										transition-delay: 0.8s + 0.3s;
									}
								}
								&:nth-child(4){
									transition-delay: 0.7s + 0.3s*2;
									.text{
										transition-delay: 0.8s + 0.3s*2;
									}
								}
								&:nth-child(5){
									transition-delay: 0.7s + 0.3s*3;
									.text{
										transition-delay: 0.8s + 0.3s*3;
									}
								}
								&:nth-child(6){
									transition-delay: 0.7s + 0.3s*4;
									.text{
										transition-delay: 0.8s + 0.3s*4;
									}
								}
								&:nth-child(7){
									transition-delay: 0.7s + 0.3s*5;
									.text{
										transition-delay: 0.8s + 0.3s*5;
									}
								}
							}
						}
					}
					@media(max-width: 1200px){
						.line{
							img{
								min-height: 5px;
							}
						}
					}
					@media(max-width: 900px){
						.list{
							margin-top: -11px;
							&:nth-child(2){
								.icon{
									img{
										top: -32px*0.8;
										width: 64px*0.8;
									}
								}
							}
							&:last-child{
								.text{
									left: auto;
									right: 0;
								}
							}
							.icon{
								.time{
									font-size: 16px;
								}
							}
							.text{
								padding: 3px 6px 2px;
								margin: 5px 0 8px;
							}
						}
					}
				}
			}
		}
		.box2{
			.wrap{
				width: 88%;
				max-width: 1475px;
				margin: 0 auto;
				overflow: hidden;
				.list-box{
					width: 103.06%;
					padding: 4.5% 0 3.1%;
					.list{
						width: 25%;
						padding-right: 2.96%;
						box-sizing: border-box;
						h4{
							padding-bottom: 10px;
							font-size: 18px;
							color: #333;
						}
						p{
							padding-bottom: 15px;
							font-size: 14px;
							line-height: 1.6;
							color: #333;
						}
						.img{
							position: relative;
							width: 100%;
							padding: 65.67% 0 0;
							overflow: hidden;
							img{
								position: absolute;
								top: 0;
								left: 0;
								right: 0;
								bottom: 0;
								display: block;
								margin: auto;
								width: 100%;
								height: 100%;
							}
						}
					}

					@media(max-width: 900px){
						padding: 10% 0 6%;
						.list{
							width: 50%;
							padding-bottom: 5%;
							h4{
								padding-bottom: 0;
							}
							p{
								padding-bottom: 8px;
							}
						}
					}
					@media(max-width: 450px){
						.list{
							h4{
								font-size: 16px;
							}
						}
					}
				}
			}
		}
	}
	.img{
		img{
			transition: transform 0.5s;
			-moz-transition: transform 0.5s;
			-webkit-transition: transform 0.5s;
			-o-transition: transform 0.5s;
		}
		img:hover{
			transform:scale(1.2);
			-moz-transform:scale(1.2);
			-webkit-transform:scale(1.2);
			-o-transform:scale(1.2);
		}
	}
</style>
