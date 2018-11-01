<template>
	<div class="main_sw">
		<div class="wrap-position wrap-society">
			<div class="position-content">
				<div class="title" id="search" name="search">热招职位</div>
				<div class="form-box">
					<div class="input-group">
						<div class="keyword-search">
							<img src="/static/img/work/campus-search.png" alt="">
							<input type="text" placeholder="搜索职位关键字" id="keywords" name="keywords">
						</div>
						<div class="input-box select-box">
							<div class="show category" @click="showSelect" v-clickoutside="hideSelect">
								<span class="p fontSize">{{jobText}}</span>
								<span :class="['icon','arrow-down',jobShow?'close':'']"></span>
							</div>
							<transition name="job">
								<ul class="select familys select-category" v-show="jobShow" id="require">
									<li v-for="(item, index) in jobTypeArr" :key="index" :data-value="item.value" @click="check($event)">{{item.title}}</li>
								</ul>
							</transition>
						</div>
						<div class="input-box input-address select-box">
							<div class="show category" @click="isPoiShow"  v-clickoutside="isPoiHide">
								<span class="p fontSize">{{jobPoi}}</span>
								<span class="icon arrow-down"></span>
							</div>
							<transition name="job">
								<ul class="select select-category" v-show="poiShow" id="place">
									<li v-for="(item, index) in jobPositionArr" :key="index" :data-id="item.id" @click="checkPoi($event)">{{item.poi}}</li>
								</ul>
							</transition>
						</div>
					</div>
				</div>
				<div class="table-box" id="search-ajax">
					<table>
						<tr class="tr-items noborder">
							<th class="td1">
								<p>职位名称</p>
							</th>
							<th class="td2">
								<p>类别</p>
							</th>
							<th class="td3">
								<p>地点</p>
							</th>
							<th class="td4">
								<p>发布时间</p>
							</th>
						</tr>
						<tr class="tr-items">
							<td class="td1">
								<router-link :to="{path: '/applydetail', query:{id:1}}">
									<p>冲压技工/主管(J10196)</p>
								</router-link>
							</td>
							<td class="td2">
								<router-link :to="{path: '/applydetail', query:{id:1}}">
									<p>工艺</p>
								</router-link>
							</td>
							<td class="td3">
								<router-link :to="{path: '/applydetail', query:{id:1}}">
									<p>金华市</p>
								</router-link>
							</td>
							<td class="td4">
								<router-link :to="{path: '/applydetail', query:{id:1}}">
									<p>2018年10月26日</p>
								</router-link>
							</td>
						</tr>
					</table>
					<div class="no-message">未搜索到相关职位信息</div>
				</div>
				<div class="mores position-more" id="loadMoreButton">加载更多</div>
				<div class="mores position-more" id="loading">加载中...</div>
				<div class="mores position-more" id="noDataButton">没有更多了</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	name: 'work',
	data(){
		return {
			jobTypeArr: [
				{
					title: '质量',
					value: '1'
				},
				{
					title: '采购',
					value: '2'
				},
				{
					title: '工艺',
					value: '3'
				},
				{
					title: '营销',
					value: '4'
				},
				{
					title: '职能',
					value: '5'
				},
				{
					title: '研发',
					value: '6'
				}
			],
			jobPositionArr: [
				{
					id: '3301',
					poi: '武汉'
				},
				{
					id: '3302',
					poi: '杭州'
				},
				{
					id: '3303',
					poi: '西安'
				}
			],
			jobShow: false,/* 职位类别下拉是否显示 */
			poiShow: false,/* 工作地点下拉是否显示 */
			jobText: '选择职位类别',
			jobPoi: '选择工作地点'
		}
	},
	mounted(){
		document.body.scrollTop = 0
	},
	methods: {
		showSelect(){/* 显示下拉 */
			if(!this.jobShow){
				this.jobShow=true;
			}
		},
		hideSelect:function () {
			this.jobShow = false
		},
		isPoiShow: function () {
			this.poiShow = true
		},
		isPoiHide: function () {
			this.poiShow= false
		},
		check: function (event) {
			let that = this
			let e = event.currentTarget
			that.jobText = e.innerHTML
		},
		checkPoi: function () {
			let that = this
			let e = event.currentTarget
			that.jobPoi = e.innerHTML
		}
	}
}
</script>

<style lang="scss" scoped>
	.wrap-position{
		width: 100%;
    	background-color: #fff;
		.position-content {
			max-width: 1000px;
			width: 88%;
			margin: 0 auto;
			text-align: center;
			z-index: 2;
			position: relative;
			.title{
				font-size: 40px;
				color: #213543;
				line-height: 56px;
				letter-spacing: 3px;
				font-weight: 400;
				padding-top: 10%;
				@media(max-width: 900px){
					font-size: 40px*0.8;
				}
				@media(max-width: 750px){
					font-size: 40px*0.6;
				}
			}
			.form-box {
				padding: 6% 0 10%;
				.input-group{
					display: flex;
					justify-content: space-between;
					.keyword-search {
						width: 40%;
						position: relative;
						border-bottom: 1px solid #213543;
						height: 35px;
						float: left;
						img{
							width: 22px;
							height: 22px;
							position: absolute;
							left: 0;
							top: 7px;
						}
						input{
							width: 400px;
							padding: 0 34px;
							height: 33px;
							line-height: 33px;
							font-size: 16px;
							color: #213543;
							border: none;
						}
					}
					.input-box{
						position: relative;
						width: 25%;
						height: 35px;
						padding: 0;
						line-height: 35px;
						border-bottom: 1px solid #213543;
						font-size: 20px;
						text-align: left;
						background-color: #fff;
						.show{
							height: 35px;
							line-height: 35px;
							cursor: pointer;
							.fontSize{
								color: #213543;
								font-size: 16px;
							}
							.icon{
								position: absolute;
								top: 50%;
								right: 0;
								width: 15px;
								height: 10px;
								margin-top: -5px;
								background: url('/static/img/work/arrow-down2.png') no-repeat center center;
							}
						}
						.select{
							position: absolute;
							top: 100%;
							width: 100%;
							margin-top: 16px;
							z-index: 100;
							box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
							background: #fff;
							overflow: hidden;
							li{
								display: block;
								padding: 7px 20px;
								font-size: 16px;
								color: #333;
								cursor: pointer;
								overflow: hidden;
								transition: background .3s ease;
								&.cur{
									color: #fff;
									background: #213543;
								}
								@media(min-width: 1025px){
									&:hover{
										color: #fff;
										background: #213543;
									}
								}
							}
						}
					}
				}
				@media(max-width: 900px){
					.input-group{
						.keyword-search {
							width: 31%;
						}
						.input-box{
							width: 31%;
						}
					}
				}
				@media(max-width: 750px){
					.input-group{
						.keyword-search {
							width: 31%;
							// img{
							// 	width: 22px;
							// 	height: 22px;
							// 	top: 7px;
							// }
							// input{
							// 	padding: 0 34px;
							// 	font-size: 14px;
							// }
						}
						.input-box{
							width: 31%;
							// height: 35px;
							// line-height: 35px;
							// .show{
							// 	height: 35px;
							// 	line-height: 35px;
							// 	.fontSize{
							// 		font-size: 14px;
							// 	}
							// 	.icon{
							// 		width: 15px;
							// 		height: 10px;
							// 		margin-top: -5px;
							// 	}
							// }
							// .select{
							// 	margin-top: 8px;
							// 	li{
							// 		padding: 7px*0.6 20px*0.6;
							// 		font-size: 14px;
							// 	}
							// }
						}
					}
				}
				@media(max-width: 560px){
					.input-group{
						flex-wrap: wrap;
						.keyword-search {
							width: 100%;
							margin-bottom: 15px;
						}
						.input-box{
							width: 100%;
							margin-bottom: 15px;
						}
					}
				}
			}
			.table-box{
				min-height: 300px;
				table{
					width: 100%;
					font-size: 16px;
					.tr-items{
						border-bottom: 1px solid #D8D8D8;
						&.noborder{
							border: none;
						}
						p{
							font-size: 18px;
							color: #213543;
							height: 35px;
							line-height: 35px;
							white-space: nowrap;
							word-break: break-all;
						}
					}
					th,td{
						padding: 16px 0;
						text-align: left;
						font-weight: normal;
						color: #333;
					}
					.td1{
						width: 50%;
					}
					.td2{
						min-width: 0;
					}
					.td3{
						min-width: 0;
					}
					.td4{
						width: 145px;
					}
					@media(max-width: 750px){
						.tr-items{
							th{
								padding: 6px 0;
								p{
									font-size: 16px;
								}
							}
							td{
								padding: 6px 0;
								p{
									font-size: 16px;
								}
							}
						}
						.td4{
							display: none;
							width: auto;
						}
					}
				}
				.no-message{
					display: none;
					padding: 16px 0;
					border-bottom: 1px solid #D8D8D8;
					font-size: 18px;
					text-align: left;
					@media(max-width: 750px){
						font-size: 16px;
					}
				}
			}
			.mores{
				height: 28px;
				margin: 4% 0 8%;
				font-size: 18px;
				line-height: 28px;
				text-align: center;
				color: #213543;
				cursor: pointer;
				&#loading{
					display: none;
				}
				&#noDataButton{
					display: none
				}
			}
		}
	}
	.job-enter-active{
		transition: all 0.3s linear;
		left: 0;
		opacity: 1;
	}
	.job-leave-active{
		transition: all 0.3s linear;
		left: -10%;
		opacity: 0;
	}
	.job-enter{
		left: -10%;
		opacity: 0;
	}
	.job-leave{
		left: 0;
		opacity: 1;
	}
</style>
