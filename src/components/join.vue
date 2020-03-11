<template>
	<!-- 我要咨询 -->
	<div class="wantConsult join">
		<div class="wrap_mar">
			<div class="zxTitle clear">
				<p class="fl1 p1">我要咨询</p>
				<p class="fr1 p2"><i class="i14 fl1"><img src="../../static/img/join//zxphone.png" alt=""></i><span class="fl1">全国免费电话:13121308884</span><i class="fl1 i15"><img src="../../static/img/join/shuzi.png" alt=""></i></p>
			</div>
			<div class="wantConsult_btm clear">
				<div class="wantConsult_btm_left fl1">
					<p class="sixPage">加盟六步法</p>
					<ul>
						<li class="clear"><i class="fl1 i16"></i><span class="fl1">直营店考察</span>
							<font class="fl1">(具备可经营性)</font>
						</li>
						<li class="clear"><i class="fl1 i17"></i><span class="fl1">加盟店考察</span>
							<font class="fl1">(具备可复制性)</font>
						</li>
						<li class="clear"><i class="fl1 i18"></i><span class="fl1">店面选址方式</span></li>
						<li class="clear"><i class="fl1 i19"></i><span class="fl1">总部培训方式</span></li>
						<li class="clear"><i class="fl1 i20"></i><span class="fl1">运营督导方式</span></li>
						<li class="clear"><i class="fl1 i21"></i><span class="fl1">产品研发能力</span></li>
					</ul>
					<p class="chanQuan">中国加盟网<br> 登记信息
					</p>
				</div>

				<div class="wantConsult_btm_right fr1">
					<form action="" class="form fl1">
						<textarea name="content" id="areaCont" cols="30" rows="10" v-model="user.textp" placeholder="请输入或选择咨询内容"></textarea>
						<p class="input_p clear"> <span class="span1 fl1" style="letter-spacing:10px;">姓名</span>
							<input type="text" maxlength="5" name="sname" value="请输入您的姓名" class="txt" v-model="user.name">
							<font class="fr1">性别 <span class="radio_box">
            <input type="radio" id="radio_1" name="radio" checked="checked">
            <label for="radio_1"></label>
            <em>男</em> </span> <span class="radio_box">
            <input type="radio" id="radio_2" name="radio" >
            <label for="radio_2"></label>
            <em>女</em> </span> </font>
						</p>
						<p class="input_p clear"> <span class="span1 fl1" style="letter-spacing:10px;">手机</span>
							<input type="text" name="mobile" id="mobile" maxlength="11" v-model="user.iphone" value="请输入您的手机" class="txt">
						</p>
						<p class="input_p clear"> <span class="span1 fl1">地址</span>
							<input type="text" id="message_code" v-model="user.address" placeholder="请输入地址" class="txt">
							
						</p>
						<p class="sub_ziXun">
							<input id="tijiaoliuyan" class="btn" type="button" value="提交咨询" @click="submits()"/>
						</p>
					</form>
					<div class="select_yixiang fr1">
						<p class="jiao"></p>
						<p class="ninTitle">您可以根据意向选择下列 <em>[快捷留言]</em></p>
						<ul>
							<li v-for="item in logList">
								<a @click="select(item.lies)" href="javascript:void(0)" :title="logList.lies">{{item.lies}}</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>

</template>

<script>
	/* $(".select_yixiang ul li a").each(function(){
			 	$(this).click(function(){
			 		var text=$(this).text();
			 		$("#areaCont").val(text)
			 	})
			 })*/
	export default {
		name: 'index',
		data() {
			return {
				user:{
					textp:'',
					name:'',
					iphone:'',
					address:''
				},
				logList: [{
						lies:"项目很好，请尽快联系我详谈。"
					},
					{
						lies:"请问我所在的地区有加盟商了吗？"
					},
					{
						lies:"留下邮箱，请将详细资料邮件给我。"
					},
					{
						lies:"想了解的加盟流程，请与我联系！"
					},
					{
						lies:"做为的代理加盟商能得到哪些支持？"
					},
					{
						lies:"请问投资所需要的费用有哪些？"
					},
					{
						lies:"我想加盟，请电话联系我。"
					},
					{
						lies:"加盟，有什么优惠？"
					}

				],
				urlo:"http://localhost/BoyePhp/"
			}
		},
		methods: {
			select: function(thi) {
				console.log(thi);
				this.user.textp=thi;
			},
			submits:function(){
					this.axios.get(this.urlo+'insertjoin.php',{params:this.user}).then(function(res) {
						if(res.data.codes == 2000) {
							console.log(res);
							alert("提交成功，等待老师联系你吧!");
							

						} else {
							alert("提交失败，请重试")
						}

					
					}).catch(function(err) {
						console.log(err);
					})
			}
		}
	}
</script>

<style>
	html,
	body,
	div,
	span,
	applet,
	object,
	iframe,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	blockquote,
	pre,
	a,
	abbr,
	acronym,
	address,
	big,
	cite,
	code,
	del,
	dfn,
	em,
	img,
	ins,
	kbd,
	q,
	s,
	samp,
	small,
	strike,
	strong,
	sub,
	sup,
	tt,
	var,
	u,
	i,
	center,
	dl,
	dt,
	dd,
	ol,
	ul,
	li,
	fieldset,
	form,
	label,
	legend,
	table,
	caption,
	tbody,
	tfoot,
	thead,
	tr,
	th,
	td,
	article,
	aside,
	canvas,
	details,
	embed,
	figure,
	figcaption,
	footer,
	header,
	hgroup,
	menu,
	nav,
	output,
	ruby,
	section,
	summary,
	time,
	mark,
	audio,
	video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
	}
	/* HTML5 display-role reset for older browsers*/
	
	article,
	aside,
	details,
	figcaption,
	figure,
	footer,
	header,
	hgroup,
	menu,
	nav,
	section {
		display: block;
	}
	
	body {
		line-height: 1;
	}
	
	ol,
	ul {
		list-style: none;
	}
	
	blockquote,
	q {
		quotes: none;
	}
	
	blockquote:before,
	blockquote:after,
	q:before,
	q:after {
		content: '';
		content: none;
	}
	
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}
	
	input,
	textarea,
	select {
		font-family: "PingFang SC", Arial, "微软雅黑", "宋体", simsun, sans-serif;
	}
	
	a {
		text-decoration: none;
		font-family: "PingFang SC", Arial, "微软雅黑", "宋体", simsun, sans-serif;
	}
	
	body {
		font-family: "PingFang SC", Arial, "微软雅黑", "宋体", simsun, sans-serif;
	}
	/* 浮动 */
	
	.clear {
		zoom: 1;
		clear: both;
	}
	
	.clear:after {
		content: "";
		clear: both;
		height: 0;
		line-height: 0;
		display: block;
		visibility: hidden;
	}
	
	.fl1 {
		float: left;
		display: inline;
	}
	
	.fr1 {
		float: right;
		display: inline;
	}
	
	article,
	aside,
	details,
	figcaption,
	figure,
	footer,
	header,
	hgroup,
	main,
	menu,
	nav,
	section,
	summary {
		display: block;
	}
	
	@chartset="utf-8";
	.wrap_mar {
		width: 1200px;
		margin: auto;
	}
	/* 我要咨询 */
	
	.wantConsult {
		margin-top: 30px;
		
	}
	
	.wantConsult .zxTitle {
		height: 68px;
		border-top: 2px solid #333333;
	}
	
	.wantConsult .zxTitle .p1 {
		font-size: 22px;
		line-height: 68px;
		color: #333;
	}
	
	.wantConsult .zxTitle .p2 .i14 {
		margin-top: 25px;
	}
	
	.wantConsult .zxTitle .p2 .i15 {
		margin-top: 31px;
	}
	
	.wantConsult .zxTitle .p2 span {
		margin: 30px 6px 0;
		font-size: 19px;
		font-style: italic;
		color: #333333;
	}
	
	.wantConsult_btm {
		height: 450px;
		overflow: hidden;
		margin-bottom: 30px;
	}
	
	.wantConsult_btm_left {
		width: 246px;
		padding-left: 35px;
		height: 450px;
		background: url('../../static/img/join/sixpage1_21.png') no-repeat;
	}
	
	.wantConsult_btm_left .sixPage {
		font-size: 24px;
		font-weight: bold;
		color: #fff;
		margin: 44px 0 25px;
	}
	
	.wantConsult_btm_left ul li {
		height: 42px;
		line-height: 42px;
		font-size: 17px;
		color: #fff;
	}
	
	.wantConsult_btm_left ul li i {
		background: url('../../static/img/join/xuhao.png') no-repeat;
		margin: 10px 7px 0 0;
	}
	
	.wantConsult_btm_left ul li .i16 {
		width: 20px;
		height: 22px;
		background-position: -1px -1px;
	}
	
	.wantConsult_btm_left ul li .i17 {
		width: 21px;
		height: 22px;
		background-position: 0px -43px;
	}
	
	.wantConsult_btm_left ul li .i18 {
		width: 21px;
		height: 22px;
		background-position: 0px -85px;
	}
	
	.wantConsult_btm_left ul li .i19 {
		width: 21px;
		height: 22px;
		background-position: 0px -127px;
	}
	
	.wantConsult_btm_left ul li .i20 {
		width: 21px;
		height: 22px;
		background-position: 0px -169px;
	}
	
	.wantConsult_btm_left ul li .i21 {
		width: 21px;
		height: 22px;
		background-position: 0px -211px;
	}
	
	.wantConsult_btm_left ul li font {
		font-size: 12px;
	}
	
	.wantConsult_btm_left .chanQuan {
		font-size: 12px;
		color: #fff;
		margin-top: 35px;
		line-height: 18px;
	}
	
	.wantConsult_btm_right {
		width: 919px;
		height: 450px;
		background: url('../../static/img/join/sixpage2.png') no-repeat;
	}
	
	.wantConsult_btm_right .form {
		width: 510px;
		margin-left: 40px;
	}
	
	.wantConsult_btm_right .form textarea {
		padding: 15px 20px;
		width: 470px;
		height: 80px;
		line-height: 20px;
		font-size: 14px;
		color: #aeaeae;
		border-radius: 5px;
		margin-top: 40px;
		background: #f3f2f1;
		outline: none;
	}
	
	.wantConsult_btm_right .form .input_p {
		height: 40px;
		background: #f3f2f1;
		width: 490px;
		padding-left: 20px;
		border-radius: 5px;
		margin-top: 20px;
	}
	
	.wantConsult_btm_right .form .input_p .span1 {
		display: inline-block;
		width: 54px;
		height: 16px;
		line-height: 16px;
		border-right: 1px solid #d8d8d8;
		font-size: 16px;
		color: #404040;
		margin-top: 12px;
		text-align: text-justify;
	}
	
	.wantConsult_btm_right .input_p .txt {
		width: 270px;
		padding-left: 10px;
		border: none;
		background: #f3f2f1;
		height: 38px;
		line-height: 38px;
		outline: none;
		font-size: 14px;
		color: #aeaeae;
	}
	
	.wantConsult_btm_right .form textarea:focus {
		color: #666;
	}
	
	.wantConsult_btm_right .input_p .txt:focus {
		color: #666;
	}
	
	.input_p font {
		font-size: 14px;
		color: #666;
		margin-top: 12px;
		margin-right: 18px;
		margin-bottom: 18px
	}
	
	.radio_box {
		display: inline-block;
		position: relative;
		margin-left: 10px;
	}
	
	.radio_box label {
		width: 16px;
		height: 16px;
		position: absolute;
		top: -1px;
		left: 0px;
		border: 1px solid #878787;
		border-radius: 50%;
		background: #fff;
		cursor: pointer;
	}
	
	.radio_box input {
		margin-right: 4px;
		margin-top: 1px;
	}
	
	.radio_box input:checked+label {
		border: 1px solid #ec2020;
	}
	
	.radio_box input:checked+label:after {
		content: '';
		width: 10px;
		height: 10px;
		position: absolute;
		top: 3px;
		left: 3px;
		background: #ec2020;
		border-radius: 50%;
	}
	
	.check_box em {
		margin: 0 0 0 5px;
	}
	
	.input_p .span2 {
		display: block;
		width: 135px;
		height: 40px;
		border: none;
		border-left: 1px solid #d3d3d3;
		background: #ebebeb;
		color: #f22f2f;
		font-size: 15px;
		text-align: center;
		line-height: 40px;
		cursor: pointer;
		outline: none;
	}
	
	.sub_ziXun {
		margin-top: 30px;
		height: 50px;
		text-align: center;
	}
	
	.sub_ziXun input {
		width: 200px;
		height: 50px;
		font-size: 18px;
		color: #fff;
		background: #f43d3d;
		border-radius: 5px;
		border: none;
		outline: none;
	}
	
	.select_yixiang {
		width: 310px;
		height: 330px;
		background: rgba(255, 255, 255, .8);
		margin: 40px 40px 0 0;
		border-radius: 5px;
		position: relative;
	}
	
	.ninTitle {
		height: 45px;
		line-height: 45px;
		font-size: 15px;
		font-weight: bold;
		color: #666;
		padding-left: 18px;
		background: #f7f7f7;
		margin-bottom: 15px;
		border-radius: 5px 5px 0 0;
	}
	
	.ninTitle em {
		color: #f02c2c;
	}
	
	.select_yixiang li {
		height: 32px;
		line-height: 32px;
		font-size: 13px;
		color: #666666;
		background: url('../../static/img/join/dian_81.png') no-repeat left center;
		margin-left: 18px;
		padding-left: 12px;
		cursor: pointer;
		overflow: hidden;
	}
	
	.select_yixiang li:hover {
		text-decoration: underline;
	}
	
	.select_yixiang .jiao {
		position: absolute;
		left: -8px;
		top: 19px;
		width: 8px;
		height: 12px;
		background: url('../../static/img/join/jiao.png') no-repeat;
	}
	
	.select_yixiang li a {
		color: #666666;
	}
	@media screen and (max-width: 800px) {
		.wantConsult_btm_right {
			width: 100%;
			height: 450px;
			background: url('../../static/img/join/sixpage2.png') no-repeat;
		}
		.wantConsult_btm_left{
			display: none;
		}
		.select_yixiang{
			display: none;
		}
		.wantConsult_btm_right .form {
		        width: 80%;
    /* margin-left: 20%; */
    text-align: center;
		}
		.wrap_mar{
   				width: 100%;
			    margin: auto;
			}
			.wantConsult_btm_right .form textarea{
				width:auto;
			}
			.wantConsult_btm_right .input_p .txt{
				width: 230px;
			}
			.wantConsult_btm_right .form .input_p{
				width: auto;
			}
			.input_p font{
				display: none;
			}
	}
</style>