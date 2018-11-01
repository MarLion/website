<template>
  <div class="min-height mt70 container">
    <div class="text-left detail-title fw">
      <span class="color-tit chance">
        <router-link to="/work" class="color-tit">工作机会</router-link>
      </span>
      <span class="ml15">职位详情</span>
    </div>
    <div class="detail-container pos-re">
      <h2 class="color-tit fs-tit text-left">Java高级开发工程师</h2>
      <p class="fs16 mt30 text-left">地点：武汉</p>
	  <p class="fs16 mt30 text-left">性质：全职</p>
	  <p class="fs16 mt30 text-left">薪资：面议</p>
	  <p class="fs16 mt30 text-left">人数：若干</p>
	  <p class="fs16 mt30 text-left">时间：2018-09-25</p>
	  <div class="line-detail"></div>
      <div class="detail-del text-left">
        <p class="mt20">职位描述：</p>
        <ul>
          <li>1、6年以上软件研发工作经验，2年以上独立承担软件项目系统分析和架构设计经验，有成功案例、大型系统软件架构设计经验优先；</li>
          <li>2、精通J2EE架构技术，精通B/S系统开发，精通面向对象分析和设计技术，深入理解Spring、MyBatis、redis、 Struts2、 Hibernate、Ajax、Webservice、JBPM、JMS、JMX、AOP、Junit等框架和技术的设计思想和实现方式，熟悉OOA、OOD、UML，能熟练使用Viso、Rose、ERWin等工具 进行软件和数据库建模，良好的模型抽象能力、沟通能力和技术文档撰写能力；</li>
        </ul>
        <p class="mt50">任职要求：</p>
        <ul>
          <li>1、6年以上软件研发工作经验，2年以上独立承担软件项目系统分析和架构设计经验，有成功案例、大型系统软件架构设计经验优先；</li>
          <li>2、精通J2EE架构技术，精通B/S系统开发，精通面向对象分析和设计技术，深入理解Spring、MyBatis、redis、 Struts2、 Hibernate、Ajax、Webservice、JBPM、JMS、JMX、AOP、Junit等框架和技术的设计思想和实现方式，熟悉OOA、OOD、UML，能熟练使用Viso、Rose、ERWin等工具 进行软件和数据库建模，良好的模型抽象能力、沟通能力和技术文档撰写能力；</li>
          <li>3、精通Ajax等前端展现技术，精通主流JS框架最少一种jquery/extjs等；</li>
          <li>4、熟练掌握Oracle、SQL Server、Mysql等数据库的分析和设计；</li>
          <li>5、熟练掌握WEBLOGIC， WEBSPHERE ，Tomcat等应用中间件的安装、部署、配置；</li>
          <li>6、熟悉大型Linux负载均衡及高可用集群、存储、服务器调优、网络安全、数据库高可用设计及性能评估机制；</li>
          <li>7、热爱技术研发工作，勇于创新，善于钻研和克服技术难点。</li>
          <li>8、责任感强及良好的抗压能力和团队合作意识；</li>
        </ul>
        <p class="mt50">福利待遇：</p>
        <ul>
          <li>1、上班时间：08:00-12:00,14：00-18:00 ，单休  国家法定节假日休</li>
          <li>2、定期员工活动，聚餐旅游</li>
          <li>3、扁平化管理，为员工提供公平、公正、公开的晋升渠道</li>
          <li>4、员工旅游，项目分红、年底分红、年假、晋升空间大</li>
        </ul>
      </div>
	  <div class="apply-btn pos-ab" @click="openApplyDia">申请职位</div>
		<dialog-view :is-show-pub="isDialog"  :hei-num=280 @on-close="closePubDialog">
			<div slot="header">请输入您的信息</div>
			<div slot="content" class="content">
				<div>
					<span>姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名：</span>
					<input type="text" v-model="applyName" class="mes-ipt"/>
				</div>
				<div>
					<span>联系方式：</span>
					<input type="text" v-model="applyPhone" class="mes-ipt"/>
				</div>
				<div>
					<span>简历上传：</span>
					<input type="file" class="mes-file" @change="getMesFile"/>
				</div>
			</div>
			<div slot="footer">
				<div class="register mes-com">提交资料</div>
			</div>
		</dialog-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'applydetail',
  data () {
  	return {
		isDialog: false,
		applyName: '',
		applyPhone: '',
		applyVitae: []
	}
  },
  methods: {
	  openApplyDia: function () {
		 this.isDialog = true
	  },
	  closePubDialog: function () {
	  	  let file  = document.getElementsByClassName('mes-file')[0]
		  file.value = ''
		  this.isDialog = false
	  },
	  getMesFile: function () {
		  let that = this
		  if (window.FileReader) {
			  let reader =new FileReader(),
				  file=event.target.files[0];
			  console.log(file)
			  reader.onloadend = function (ev) {
				  that.applyVitae.push(file)
			  }
		  } else {
		  	alert('您的浏览器版本不支持该功能，请升级浏览器或者使用其他浏览器')
		  }
	  }
  },
  mounted () {
	  document.body.scrollTop = 0
  }
}
</script>

<style lang="scss" scoped>
.color-tit{
  	color: #169BD5;
}
.container{
  padding-bottom: 50px;
  @media screen and (max-width: 1024px) {
	  width: 90%;
	  margin: 30px auto 0;
  }
}
.chance{
  padding-right: 15px;
  border-right: 2px solid #169BD5;
}
.detail-container{
	width: 1000px;
	margin: 30px auto 0;
	.fs-tit{
		font-size: 28px;
		@media screen and (max-width: 1024px) {
			font-size: 22px;
		}
	}
	@media screen and (max-width: 1024px) {
		width: 100%;
	}
}
.detail-title{
  padding: 30px 0 0 60px;
  @media screen and (max-width: 1024px) {
	  padding: 30px 0 0;
  }
}
.detail-del{
  padding: 0 0 20px;
  background-color: #ffffff;
  margin: 0 auto;
  p{
	  font-size: 24px;
	  @media screen and (max-width: 1024px) {
		  font-size: 18px;
	  }
  }
  li{
	  margin-top: 30px;
	  line-height: 30px;
	  @media screen and (max-width: 1024px) {
		  font-size: 14px;
	  }
  }
}
.apply-btn{
  width: 150px;
  height: 45px;
  line-height: 45px;
  border: 1px solid #169BD5;
  border-radius: 5px;
  background-color: #ffffff;
  color: #169BD5;
  cursor: pointer;
  text-align: center;
  top: 0;
  right: 0;
  font-size: 16px;
  @media screen and (max-width: 1024px) {
	  width: 30%;
	  height: 30px;
	  line-height: 30px;
	  font-size: 14px;
	  top: 200px;
  }
}
.apply-btn:hover{
  background-color: #169BD5;
  color: #ffffff;
}
.line-detail {
	width: 100%;
	height: 1px;
	background-color: #D8D8D8;
	margin: 50px 0;
}
.mes-ipt{
	width: 70%;
	@media screen and (max-width: 375px) {
		width: 60%;
	}
}
.mes-com{
	margin: 0 auto;
	cursor: pointer;
}
.register{
	display: block;
	width: 200px;
	height: 40px;
	line-height: 40px;
	border: 1px solid  #108DEB;
	border-radius: 5px;
	color: #108DEB;
	@media screen and (max-width: 1024px) {
		margin: 0 auto;
		width: 150px;
	}

}
.content{
	div{
		width: 80%;
		text-align: left;
		margin: 20px auto auto;
		input{
			border: 1px solid #D1CDCD;
		}
	}
	.mes-file{
		border: none!important;
		width: 50%;
	}
}
</style>
