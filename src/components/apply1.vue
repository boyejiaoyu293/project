<template>
	<div class="apply">
		<div class="wrapper" style="display: none;">

			<div class="container">
				<h1>Welcome To BoYe</h1>
				<form class="form">
					<input type="text" v-model="name" placeholder="姓名">
					<input type="text" v-model="iphong" onkeyup="value=value.replace(/[\u4E00-\u9FA5]/g,'')" placeholder="电话">
					<input ty王pe="text" v-model="address" placeholder="地址">
					<input type="text" v-model="email" placeholder="邮箱">
					<input type="text" v-model="parentsName" placeholder="家长姓名">
					<input type="text" v-model="parentsIphone" onkeyup="value=value.replace(/[\u4E00-\u9FA5]/g,'')" placeholder="家长电话">
					<button id="login-button" @click="submits">提交</button>
				</form>
			</div>

			<ul class="bg-bubbles">
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>

		</div>
		<!--报名div-->
		<div>
			<!--<div class="braaner" id="shouye">
				<img src="../../static/img/banner4.jpg" style="width: 100%;" />
			</div>-->
			<!--<div >
				<img style="width: 100%;" src="../../static/img/baoming/47977492cfcbd999500d24fd28106e6.jpg" />
			</div>-->
			<!--<div >
				<img style="width: 100%;" src="../../static/img/baoming/eec18ee6e362a779a77144f03a69707.jpg" />
			</div>-->
			<!--<div >
				<img style="width: 100%;" src="../../static/img/baoming/d9367d19b0d281761f9d413e8e7fb53.jpg" />
			</div>-->
			<div>
				<img style="width: 100%;" src="../../static/img/shaoer/shaoerbanner.png" />
			</div>
			<div class="divbox">
				<h1 class="hone">从小学编程 ,让孩子拥有改变未来的能力</h1>
			</div>
			<div class="diva">
				<div class="divyi">
					<img src="../../static/img/shaoer/5-1542546350.gif" />
				</div>
				<div class="diver">
					<div><img src="../../static/img/shaoer/tuone.png" /></div>
					<h1>为学习加分，为升学助力</h1>
					<h2>拥有编程特长的孩子，不仅可以在各项编程比赛中脱颖而出，为升学助力，还可以为留学国外铺路。</h2>
				</div>
				<div class="diver">
					<div><img src="../../static/img/shaoer/tutwo.png" /></div>
					<h1>提高综合素质，孩子全面成长</h1>
					<h2>
							在学习编程课程中，不断锻炼孩子的创造力，观察力，记忆力，空间想象，数据运算，动手实践，坚毅性格。
						</h2>
				</div>
			</div>

			<h3 class="special-heading-1" style="font-size:24px;text-align:center;margin-bottom:15px;margin-top:15px;margin-right:auto;margin-left:auto;max-width:600px;">
				报名热线
			</h3>
			<template>
				<el-table :data="tableData" style="width: 100%;padding: 0px 15px;">
					<el-table-column label="地区" style="text-align: center;">
						<template slot-scope="scope">
							<i class="el-icon-s-promotion"></i>
							<span style="margin-left: 10px">{{ scope.row.date }}</span>
						</template>
					</el-table-column>
					<el-table-column label="姓名">
						<!--width="180"-->
						<template slot-scope="scope">
							<el-popover trigger="hover" placement="top">
								<p>姓名: {{ scope.row.name }}</p>
								<p>电话: {{ scope.row.iphone }}</p>
								<div slot="reference" class="name-wrapper">
									<el-tag size="medium" style="width: 60px;text-align: center;height: 25px;line-height: 25px;">{{ scope.row.name }}</el-tag>
								</div>
							</el-popover>
						</template>
					</el-table-column>
					<el-table-column label="操作">
						<template slot-scope="scope">
							<!--<el-button size="mini" @click="handleEdit(scope.$index, scope.row)"></el-button>-->

							<a :href="'tel:' + scope.row.iphone" style="color: white;text-decoration: none;">
								<el-button type="primary" style="padding: 6px;"> 拨打电话</el-button>
							</a>
						</template>
					</el-table-column>
				</el-table>
			</template>
		</div>
<div class="popOutBg"></div>
<div class="popOut">
	<span title="关闭"  @click="Kpo()"> x </span>
	<table>
		<caption>请留下您宝贵的联系方式</caption>
		<tr>
			
			<td width="120">姓名：</td>
			<td><input v-model="student.name" type="text" class="inp" placeholder="请输入真实姓名" /></td>
		</tr>
		<tr>
			<td>电话：</td>
			<td><input v-model="student.iphone" onkeyup="value=value.replace(/[\u4E00-\u9FA5]/g,'')"  type="text" class="inp" placeholder="请输入真实电话" /></td>
		</tr>
		<tr>
			<td>地址：</td>
			<td><input v-model="student.address" type="text" class="inp" placeholder="请输入地址" /></td>
		</tr>
		<tr>
			<td>现在的学校：</td>
			<td><input v-model="student.school" type="text" class="inp" placeholder="请输入真实学校" /></td>
		</tr>
		<tr>
			<td colspan="2"><input type="button" class="login" value="提交" @click="submitStudent()"/></td>
			
		</tr>
	</table>
</div>
	</div>

</template>

<script>
	/*	第一个路由加载页面*/
	export default {
		name: 'apply',
		data() {
			return {
				name: '',
				iphong: '',
				address: '',
				email: '',
				parentsName: '',
				parentsIphone: '',
				student:{
					name:'',
					address:'',
					iphone:'',
					school:''
				},
				tableData: [{
					date: '牡丹江',
					name: '韩亮',
					iphone: '18600809678'
				}, {
					date: '沈阳',
					name: '郭宣奇',
					iphone: '15940657507'
				}, {
					date: '黑龙江',
					name: '李鑫',
					iphone: '15214534347'
				}, {
					date: '八面通',
					name: '陈颖',
					iphone: '15545313000'
				}, {
					date: '上海',
					name: '王哲',
					iphone: '15631646611'
				}, {
					date: '北京',
					name: '徐业辉',
					iphone: '13121308884'
				}, {
					date: '山西',
					name: '徐春丽',
					iphone: '18501133776'
				}, {
					date: '邢台',
					name: '龚小莉',
					iphone: '13001059512'
				}, {
					date: '内蒙古',
					name: '龚小莉',
					iphone: '13001059512'
				}, {
					date: '苏州',
					name: '王东',
					iphone: '17853732265'
				}, {
					date: '邯郸',
					name: '郝海燕',
					iphone: '18101070520'
				}],
				
				urlo:"http://www.boyeit.com/BoyePhp/"
			}

		},
		methods: {
			submits: function() {
				console.log(this.name)
				if(this.name == "") {
					alert("姓名不能为空");
					return
				}
				if(this.iphong == "") {
					alert("电话不能为空");
					return
				}
				this.axios.get(`education/insert.php?name=${this.name}&iphong=${this.iphong}&address=${this.address}&email=${this.email}&parentsName=${this.parentsName}&parentsIphone=${this.parentsIphone}`).then(function(response) {
						if(response.data.codes == 2000) {
							console.log(response);
							alert("提交成功，等待老师联系你吧");

						} else {
							alert("提交失败，请重试")
						}

					})
					.catch(function(error) {})
			},
			handleEdit(index, row) {
				console.log(index, row);
			},
			handleDelete(index, row) {
				console.log(index, row);
			},
			loginh(){
				$(".popOut").style.display = "block";
				this.ani();
				$(".popOutBg").style.display = "block";
			},
			Kpo(){
					$(".popOut").style.display = "none";
					$(".popOutBg").style.display = "none";
				}
			,
			ani(){
				$(".popOut").className = "popOut ani";
			},
			submitStudent(){
				if(this.student.name == "") {
					alert("姓名不能为空");
					return
				}
				if(this.student.iphong == "") {
					alert("电话不能为空");
					return
				}
				this.axios.get(this.urlo+'insert.php',{params:this.student}).then(function(res) {
						if(res.data.codes == 2000) {
							console.log(res);
							alert("提交成功，等待老师联系你吧!");
							$(".popOut").style.display = "none";
					        $(".popOutBg").style.display = "none";

						} else {
							alert("提交失败，请重试")
						}

					
					}).catch(function(err) {
						console.log(err);
					})
			}
		},
		created: function() {
			
			/*this.axios.get(this.urlo+'insert.php', this.po).then(function(res) {
				console.log(res)
			}).catch(function(err) {
				console.log(err);
			})*/
		},
		mounted:function(){
			   this.loginh();
		}	}
	function $(param){
		if(arguments[1] == true){
			return document.querySelectorAll(param);
		}else{
			return document.querySelector(param);
		}
	}

</script>

<style scoped="scoped" lang="scss">

    *{ margin:0; padding:0;}
	.loginh, input{ outline:none;}
	.loginh, .login{ width:120px; height:42px; background:#f40; color:#fff; border:none; border-radius:6px; display: block; margin:20px auto; cursor: pointer;}
	.popOutBg{ width:100%; height:100%; position: fixed; left:0; top:0; background:rgba(0,0,0,.6); display: none;}
	.popOut{ position:fixed; width:600px; height:370px; top:50%; left:50%; margin-top:-180px; margin-left:-300px; background:#fff; border-radius:8px; overflow: hidden; display: none;}
	.popOut > span{ position: absolute; right:10px; top:0; height:42px; line-height:42px; color:#000; font-size:30px; cursor: pointer;}
	.popOut table{ display: block; margin:42px auto 0; width:520px;}
	.popOut caption{ width:520px; text-align: center; color:#f40; font-size:18px; line-height:42px;}
	.popOut table tr td{ color:#666; padding:6px; font-size:14px;}
	.popOut table tr td:first-child{ text-align: right;}
	.inp{ width:280px; height:30px; line-height:30px; border:1px solid #999; padding:5px 10px; color:#000; font-size:14px; border-radius:6px;}
	.inp:focus{ border-color:#f40;}
	@keyframes ani{
		from{
			transform:translateX(-100%) rotate(-60deg) scale(.5);
		}
		50%{
			transform:translateX(0) rotate(0) scale(1);
		}
		90%{
			transform:translateX(20px) rotate(0) scale(.8);
		}
		to{
			transform:translateX(0) rotate(0) scale(1);
		}
	}
	.ani{ animation:ani .5s ease-in-out;}
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		font-weight: 300;
	}
	
	body {
		font-family: 'Source Sans Pro', sans-serif;
		color: white;
		font-weight: 300;
	}
	
	body ::-webkit-input-placeholder {
		/* WebKit browsers */
		font-family: 'Source Sans Pro', sans-serif;
		color: white;
		font-weight: 300;
	}
	
	body :-moz-placeholder {
		/* Mozilla Firefox 4 to 18 */
		font-family: 'Source Sans Pro', sans-serif;
		color: white;
		opacity: 1;
		font-weight: 300;
	}
	
	body ::-moz-placeholder {
		/* Mozilla Firefox 19+ */
		font-family: 'Source Sans Pro', sans-serif;
		color: white;
		opacity: 1;
		font-weight: 300;
	}
	
	body :-ms-input-placeholder {
		/* Internet Explorer 10+ */
		font-family: 'Source Sans Pro', sans-serif;
		color: white;
		font-weight: 300;
	}
	
	.wrapper {
		background: #50a3a2;
		background: -webkit-linear-gradient(top left, #50a3a2 0%, #53e3a6 100%);
		background: linear-gradient(to bottom right, #50a3a2 0%, #53e3a6 100%);
		opacity: 0.8;
		position: absolute;
		left: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	
	.wrapper.form-success .container h1 {
		-webkit-transform: translateY(85px);
		-ms-transform: translateY(85px);
		transform: translateY(85px);
	}
	
	.container {
		max-width: 600px;
		margin: 0 auto;
		padding: 80px 0;
		height: 400px;
		text-align: center;
	}
	
	.container h1 {
		font-size: 40px;
		-webkit-transition-duration: 1s;
		transition-duration: 1s;
		-webkit-transition-timing-function: ease-in-put;
		transition-timing-function: ease-in-put;
		font-weight: 200;
	}
	
	form {
		padding: 20px 0;
		position: relative;
		z-index: 2;
	}
	
	form input {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		outline: 0;
		border: 1px solid rgba(255, 255, 255, 0.4);
		background-color: rgba(255, 255, 255, 0.2);
		width: 250px;
		border-radius: 3px;
		padding: 10px 15px;
		margin: 0 auto 10px auto;
		display: block;
		text-align: center;
		font-size: 18px;
		color: white;
		-webkit-transition-duration: 0.25s;
		transition-duration: 0.25s;
		font-weight: 300;
	}
	
	form input:hover {
		background-color: rgba(255, 255, 255, 0.4);
	}
	
	form input:focus {
		background-color: white;
		width: 300px;
		color: #53e3a6;
	}
	
	form button {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		outline: 0;
		background-color: white;
		border: 0;
		padding: 10px 15px;
		color: #53e3a6;
		border-radius: 3px;
		width: 250px;
		cursor: pointer;
		font-size: 18px;
		-webkit-transition-duration: 0.25s;
		transition-duration: 0.25s;
	}
	
	form button:hover {
		background-color: #f5f7f9;
	}
	
	.bg-bubbles {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 1;
	}
	
	.bg-bubbles li {
		position: absolute;
		list-style: none;
		display: block;
		width: 40px;
		height: 40px;
		background-color: rgba(255, 255, 255, 0.15);
		bottom: -160px;
		-webkit-animation: square 25s infinite;
		animation: square 25s infinite;
		-webkit-transition-timing-function: linear;
		transition-timing-function: linear;
	}
	
	.bg-bubbles li:nth-child(1) {
		left: 10%;
	}
	
	.bg-bubbles li:nth-child(2) {
		left: 20%;
		width: 80px;
		height: 80px;
		-webkit-animation-delay: 2s;
		animation-delay: 2s;
		-webkit-animation-duration: 17s;
		animation-duration: 17s;
	}
	
	.bg-bubbles li:nth-child(3) {
		left: 25%;
		-webkit-animation-delay: 4s;
		animation-delay: 4s;
	}
	
	.bg-bubbles li:nth-child(4) {
		left: 40%;
		width: 60px;
		height: 60px;
		-webkit-animation-duration: 22s;
		animation-duration: 22s;
		background-color: rgba(255, 255, 255, 0.25);
	}
	
	.bg-bubbles li:nth-child(5) {
		left: 70%;
	}
	
	.bg-bubbles li:nth-child(6) {
		left: 80%;
		width: 120px;
		height: 120px;
		-webkit-animation-delay: 3s;
		animation-delay: 3s;
		background-color: rgba(255, 255, 255, 0.2);
	}
	
	.bg-bubbles li:nth-child(7) {
		left: 32%;
		width: 160px;
		height: 160px;
		-webkit-animation-delay: 7s;
		animation-delay: 7s;
	}
	
	.bg-bubbles li:nth-child(8) {
		left: 55%;
		width: 20px;
		height: 20px;
		-webkit-animation-delay: 15s;
		animation-delay: 15s;
		-webkit-animation-duration: 40s;
		animation-duration: 40s;
	}
	
	.bg-bubbles li:nth-child(9) {
		left: 25%;
		width: 10px;
		height: 10px;
		-webkit-animation-delay: 2s;
		animation-delay: 2s;
		-webkit-animation-duration: 40s;
		animation-duration: 40s;
		background-color: rgba(255, 255, 255, 0.3);
	}
	
	.bg-bubbles li:nth-child(10) {
		left: 90%;
		width: 160px;
		height: 160px;
		-webkit-animation-delay: 11s;
		animation-delay: 11s;
	}
	
	@-webkit-keyframes square {
		0% {
			-webkit-transform: translateY(0);
			transform: translateY(0);
		}
		100% {
			-webkit-transform: translateY(-700px) rotate(600deg);
			transform: translateY(-700px) rotate(600deg);
		}
	}
	
	@keyframes square {
		0% {
			-webkit-transform: translateY(0);
			transform: translateY(0);
		}
		100% {
			-webkit-transform: translateY(-700px) rotate(600deg);
			transform: translateY(-700px) rotate(600deg);
		}
	}
	
	.divbox {
		background-color: white;
		text-align: center;
	}
	
	.hone {
		font-size: 60px;
		font-family: "微软雅黑";
		color: darkmagenta;
		padding-top: 30px;
		padding-bottom: 30px;
	}
	
	.diva {
		width: 100%;
		height: 500px;
		background-color: white;
	}
	
	.divyi {
		margin-left: 100px;
		float: left;
	}
	
	.diver {
		width: 26%;
		float: left;
		margin-top: 70px;
		padding-left: 50px;
	}
	
	.diver h1 {
		color: darkmagenta;
		padding-top: 10px;
	}
	
	.diver h2 {
		padding-top: 10px;
	}
	
	@media screen and (min-width:200px) and (max-width:700px) {
		.hone {
			font-size: 20px;
		}
		.divyi {
			margin-left: 100px;
			float: left;
		}
		.divyi img {
			width: 100%;
		}
		.diver {
			width: 100%;
			background-color: white;
			margin-left: -20px;
			text-align: center;
		}
		.diver h1 {}
		.diver h2 {}
		
	}
</style>