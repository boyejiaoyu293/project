<template>
	<div class="index">
        <div class="xuan"></div>
		<div class="naimisd">
			<a href="tel:13121308884" style="color: white;text-decoration: none;">报名咨询电话</a>
		</div>

		<div class="top">
			<div class="zhixingli">
				<img src="../../static/img/zhixingli.png" />
			</div>
			<div class="b-item">
				<ul class="tUl">
					<router-link :to="{ path: '/' }">
						<li class="tll">首页<span class="shu"> | </span> </li>
					</router-link>
					<!--<router-link :to="{ path: '/apply' }">
						<li class="tll"><span class="shu"> | </span> </li>
					</router-link>-->
					<li class="tll">
						<el-dropdown>
							<span class="el-dropdown-link">
				                                              报名<i class="el-icon-arrow-down el-icon--right"><span class="shu"> | </span></i>
							</span>
							<el-dropdown-menu slot="dropdown">
								<router-link :to="{ path: '/apply' }">
									<el-dropdown-item>小学生</el-dropdown-item>
								</router-link>
								<router-link :to="{ path: '/senior' }">
									<el-dropdown-item>高中生</el-dropdown-item>
								</router-link>

								<router-link :to="{ path: '/undergraduate' }">
									<el-dropdown-item>大学生</el-dropdown-item>
								</router-link>
							</el-dropdown-menu>
						</el-dropdown>
					</li>
					<li class="tll">
						<el-dropdown>
							<span class="el-dropdown-link">
				                                         学生保障<i class="el-icon-arrow-down el-icon--right"><span class="shu"> | </span></i>
							</span>
							<el-dropdown-menu slot="dropdown">
								<router-link :to="{ path: '/shizi' }">
									<el-dropdown-item>师资队伍</el-dropdown-item>
								</router-link>
								<router-link :to="{ path: '/jiuye' }">
									<el-dropdown-item>就业保障</el-dropdown-item>
								</router-link>

								<router-link :to="{ path: '/xuesheng' }">
									<el-dropdown-item>学生作品</el-dropdown-item>
								</router-link>
							</el-dropdown-menu>
						</el-dropdown>
					</li>
					<router-link :to="{ path: '/join' }">
						<li class="tll">加盟<span class="shu"> | </span> </li>
					</router-link>
					<router-link :to="{ path: '/outsourcing' }">
						<li class="tll">外包</li>
					</router-link>
					<!--<router-link :to="{ path: '/shizi' }">
						<li class="tll">师资队伍<span class="shu">  | </span> </li>
					</router-link>
					<router-link :to="{ path: '/jiuye' }">
						<li class="tll">就业保障<span class="shu">  | </span></li>
					</router-link>
					<router-link :to="{ path: '/xuesheng' }">
						<li class="tll">学生作品</li>
					</router-link>-->

					<!--&nbsp;&nbsp;&nbsp;<a href="tencent://message/?uin=1690316170&Site=sc.chinaz.com&Menu=yes">tencent咨询</a>-->

				</ul>
			</div>
		</div>

		<router-view></router-view>
		<!--<footer>
			<div class="footer_box" style="    width: 100%;    padding: 40px 0px 30px;    background: #165DB6;">
				<div class="campany_box">
					<div class="campany_content">
						<p class="campany_title">联系方式</p>
						<span class="campany_details">邮箱：1007381814.com</span>
						<span class="campany_details">京ip备案：19016256</span>
						<span class="campany_details">网址：www.boyeit.com</span>
						<span class="campany_details">电话：13121308884</span>
						<span class="campany_details">公司地址：北京市昌平区沙河</span>
					</div>
					<div class="campany_content">
						<p class="campany_title">工作时间</p>
						<span class="campany_details">周一至周五:9:00-18:00</span>
						<span class="campany_details">周五至周六:9:00-19:00</span>
						<span class="campany_details">周日:休息</span>
					</div>

				</div>
			</div>
		</footer>-->
		<div class="footer">
				<div class="container">
					<div class="social">
						<h3>Follow Us</h3>
						<ul>
							<li>
								<a href=""><i class="facebok"> </i></a>
							</li>
							<li>
								<a href=""><i class="twiter"> </i></a>
							</li>
							<li>
								<a href=""><i class="inst"> </i></a>
							</li>
							<li>
								<a href=""><i class="goog"> </i></a>
							</li>
						</ul>
					</div>
					<p>京ip备案：19016256
						<a href="http://www.boyeit.com/" target="_blank" title="公司官网">公司官网</a> - 邮箱：1007381814.com
						<!--<a  title="公司地址" target="_blank">公司地址</a>-->
					</p>
				</div>
			</div>

	</div>
</template>
<script>
	import $ from 'jquery'
	/*	第一个路由加载页面*/
	export default {
		name: 'index',
		data() {
			return {

			}
		}
	}
	
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.xuan{
	  margin: 0;
	  overflow: hidden;
	  background: #151a28;
}
canvas {
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
	.footer_box {
		margin-top: 20px;
	}
	
	.campany_box {
		width: 100%;
		height: 280px;
		display: inline-block;
		vertical-align: top;
		display: -webkit-box;
		display: -ms-flexbox;
		display: -webkit-box;
		padding: 0px 24px;
		box-sizing: border-box;
	}
	
	.campany_content {
		flex: 1;
		color: #fff;
	}
	
	.campany_title {
		padding-bottom: 44px;
	}
	
	.campany_details {
		display: block;
		padding: 10.5px 0px;
		font-size: 14px;
	}
	
	.tll {
		float: left;
		font-weight: 400;
		color: #606266;
		cursor: text;
		text-decoration: none;
		font-size: 14px;
	}
	
	.shu {
		display: inline-block;
		margin: 0px 20px;
	}
	
	.tll:hover {
		color: #409eff;
		cursor: pointer;
	}
	
	.index {
		font-family: '微软雅黑';
		width: 100%;
		/*  min-width: 1098px;
				    max-width: 1920px;*/
		background: #f0f0f0;
		overflow-x: hidden;
	}
	
	.three {
		width: 30%;
		padding: 0px 1.5%;
	}
	
	.threee {
		width: 30%;
		display: inline-block;
		margin: 0px 3%;
	}
	
	.ThreeDiv {
		display: flex;
	}
	
	.tirl {
		font-family: 'Roboto', sans-serif;
		font-weight: 400;
		/* letter-spacing: -0.01em; */
		margin-top: 0;
		color: #404040;
	}
	
	.tirlLpo {
		color: #868686;
		font-family: 'Roboto', sans-serif;
		font-size: 13px;
		line-height: 1.53486;
		font-weight: 300;
		margin-top: 15px;
	}
	
	.h4,
	h4 {
		font-size: 18px;
	}
	
	.top {
		height: 83px;
		width: 100%;
		display: flex;
		justify-content: space-between;
		background-color: white;
		line-height: 83px;
	}
	
	.zhixingli {
		float: left;
		img {
			width: 83px;
			height: 83px;
			margin-left: 100px;
		}
	}
	
	.b-item {
		line-height: 83px;
		margin-right: 20px;
		margin-right: 100px;
	}
	
	.el-breadcrumb__inner a,
	.el-breadcrumb__inner.is-link {
		color: red !important;
	}
	
	.braaner {
		width: 100%;
	}
	
	.el-carousel__item h3 {
		color: #475669;
		font-size: 14px;
		opacity: 0.75;
		/*line-height: 200px;*/
		margin: 0;
	}
	
	.naimisd {
		z-index: 2147483647;
		top: 250px;
		position: fixed !important;
		right: 3px;
		color: #fff;
		border-radius: 20px;
		text-align: center;
		background: -webkit-gradient(linear, left top, left bottom, from(rgba(254, 84, 0, 0.8)), to(rgba(255, 118, 50, 0.8)));
		background: linear-gradient(rgba(254, 84, 0, 0.8), rgba(255, 118, 50, 0.8));
		font-size: 15px;
		padding: 4px;
	}
	
	.naimisdd {
		z-index: 2147483647;
		top: 320px;
		position: fixed !important;
		right: 3px;
		color: #fff;
		border-radius: 20px;
		text-align: center;
		background: -webkit-gradient(linear, left top, left bottom, from(rgba(254, 84, 0, 0.8)), to(rgba(255, 118, 50, 0.8)));
		background: linear-gradient(rgba(254, 84, 0, 0.8), rgba(255, 118, 50, 0.8));
		font-size: 15px;
		padding: 4px;
	}
	
	.el-carousel__item:nth-child(2n) {
		background-color: #99a9bf;
	}
	
	.el-carousel__item:nth-child(2n+1) {
		background-color: #d3dce6;
	}
	
	.el-collapse-item__header {
		padding: 0px 20px !important;
	}
	
	.el-collapse-item {
		padding: 0px 20px !important;
	}
	/*--footer--*/
	
	.social {
		margin-bottom: 2em;
	}
	
	.footer {
		margin-top: 0em;
		background: rgba(0, 0, 0, 0.88);
		padding: 2em 0 1em;
		text-align: center;
	}
	
	.footer h3 {
		color: rgb(254, 165, 0);    margin: 30px;
	}
	
	.footer p {
		color: rgba(255, 255, 255, 0.61);
		font-size: 1em;
		text-align: center;
	}
	
	.footer p a {
		color: rgb(254, 165, 0);
		transition: 0.5s all;
		-webkit-transition: 0.5s all;
		-moz-transition: 0.5s all;
		-o-transition: 0.5s all;
	}
	
	.footer p a:hover {
		text-decoration: underline;
	}
	
	.social li {
		display: inline-block;
		margin: 0 0.5em;
	}
	
	i.facebok {
		width: 40px;
		height: 40px;
		background: url(../../static/img/senior/img-sprite.png)no-repeat -6px -6px;
		float: left;
		vertical-align: middle;
		transition: 0.5s all;
		-webkit-transition: 0.5s all;
		-moz-transition: 0.5s all;
		-o-transition: 0.5s all;
	}
	
	i.facebok:hover {
		background: url(../../static/img/senior/img-sprite.png)no-repeat -6px -48px;
	}
	
	i.twiter {
		width: 40px;
		height: 40px;
		background: url(../../static/img/senior/img-sprite.png)no-repeat -48px -6px;
		float: left;
		vertical-align: middle;
		transition: 0.5s all;
		-webkit-transition: 0.5s all;
		-moz-transition: 0.5s all;
		-o-transition: 0.5s all;
	}
	
	i.twiter:hover {
		background: url(../../static/img/senior/img-sprite.png)no-repeat -48px -48px;
	}
	
	i.inst {
		width: 40px;
		height: 40px;
		background: url(../../static/img/senior/img-sprite.png)no-repeat -92px -6px;
		float: left;
		vertical-align: middle;
		transition: 0.5s all;
		-webkit-transition: 0.5s all;
		-moz-transition: 0.5s all;
		-o-transition: 0.5s all;
	}
	
	i.inst:hover {
		background: url(../../static/img/senior/img-sprite.png)no-repeat -92px -48px;
	}
	
	i.goog {
		width: 40px;
		height: 40px;
		background: url(../../static/img/senior/img-sprite.png)no-repeat -134px -6px;
		float: left;
		vertical-align: middle;
		transition: 0.5s all;
		-webkit-transition: 0.5s all;
		-moz-transition: 0.5s all;
		-o-transition: 0.5s all;
	}
	
	i.goog:hover {
		background: url(../../static/img/senior/img-sprite.png)no-repeat -134px -48px;
	}
	
	#toTop {
		display: none;
		text-decoration: none;
		position: fixed;
		bottom: 10px;
		right: 10px;
		overflow: hidden;
		width: 48px;
		height: 48px;
		border: none;
		text-indent: 100%;
		background: url(../../static/img/senior/arrow.1.png) no-repeat 0px 0px;
	}
	
	#toTop:hover {
		outline: none;
	}
	/*--//footer--*/
	@media screen and (max-width: 700px) {
		.row{
			margin-right: 5px; 
           margin-left: 5px; 
		}
		.shu {
			display: inline-block;
			margin: 0px 3px;
		}
		.el-breadcrumb__inner a,
		.el-breadcrumb__inner.is-link {
			font-size: 12px;
		}
		.zhixingli img {
			margin-left: 3px;
		}
		.ikj {
			margin-top: 20px;
		}
		.el-breadcrumb__separator {
			margin: 0px 1px !important;
		}
		.b-item {
			margin-right: 20px;
		}
		.default-heading {
			padding: 0px 40px;
		}
		.three {
			width: 94%;
		}
		.threee {
			width: 30%;
			display: inline-block;
			margin: 35px 3%;
		}
		.ThreeDiv {
			display: block;
		}
		.el-collapse-item {
			padding: 0px 13px !important;
		}
	}
</style>