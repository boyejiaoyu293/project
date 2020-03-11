<template>
	<div >
		<ul id="List" v-html="oList" ></ul>

		<ol id="btns" class="clearfix">
			<li class="active">1</li>
			<li>2</li>
			<li>3</li>
			<li>4</li>
		</ol>
	</div>
</template>

<script>
	import $ from 'jquery'
	import Vue from 'vue';
	var MyComponent = Vue.extend({
							    template: '<div>Hello World</div>'
							})
	
		export default {
		name: 'index',
		data() {
			return {
			   oList:"",
			   cssd:"",
			}
		},
		methods: {
			motun: function(thi) {
				var oList = document.getElementById("List");
				var oCSS = document.getElementById("css");
				var oBtn = document.getElementById("btns").children;
				var iW = 40;
				var shtml = "";
				var scss = "";
				var Lilength = oList.clientWidth / iW;
				var iZindex = 0;
				var iNow = 0;
				var aLi;
				var aLi = oList.children;
				for(var i = 0; i < Lilength; i++) {
					i > Lilength / 2 ? iZindex-- : iZindex++;
					shtml += '<li><a href="javascript:;"></a><a href="javascript:;"></a><a href="javascript:;"></a><a href="javascript:;"></a></li>';
					scss += "#List li:nth-child(" + (i + 1) + ") a{background-position:-" + (iW * i) + "px 0}";
					scss += "#List li:nth-child(" + (i + 1) + "){z-index:" + iZindex + "}";
				}
				this.oList= shtml;
				var body = document.getElementsByTagName("body");
				var styles=document.createElement("style");
				styles.innerHTML=scss;
				console.log(styles);
				$(body).append(styles);
				for(var i = 0; i < oBtn.length; i++) {
					oBtn[i].index = i;
					oBtn[i].onclick = function() {
						oBtn[iNow].className = "";
						for(var i = 0; i < aLi.length; i++) {
							aLi[i].style.transition = "0.8s " + i * 50 + "ms";
							aLi[i].style.WebkitTransform = "rotateX(-" + (this.index) * 90 + "deg)";
						}

						iNow = this.index;
						oBtn[iNow].className = "active";
					}
				}
			}

		},
		mounted:function(){
			this.motun()
		}
		}
</script>

<style type="text/css" id="styke">
    /*List*/

	/*
第四季魔鬼训练班CSS Reset
理念：1. reset 的目的不是清除浏览器的默认样式，这仅是部分工作。清除和重置是紧密不可分的。
      2. reset 的目的不是让默认样式在所有浏览器下一致，而是减少默认样式有可能带来的问题。
      3. reset 提供一套适用于99%的网站的基础样式。
*/
	/** 清除内外边距 **/
	
	body,
	div,
	p,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	blockquote,
	/* structural elements 结构元素 */
	
	dl,
	dt,
	dd,
	ul,
	ol,
	li,
	/* list elements 列表元素 */
	
	pre,
	/* text formatting elements 文本格式元素 */
	
	form,
	fieldset,
	legend,
	button,
	input,
	textarea,
	/* form elements 表单元素 */
	
	table,
	th,
	td
	/* table elements 表格元素 */
	
	{
		margin: 0;
		padding: 0;
	}
	
	body,
	button,
	input,
	select,
	textarea
	/* for ie */
	
	{
		font: 12px/24px Arial, 'Microsoft Yahei', "宋体", sans-serif;
	}
	/*h1, h2, h3, h4, h5, h6 { font-size: 100%; }*/
	
	address,
	cite,
	em,
	i {
		font-style: normal;
	}
	/* 将斜体扶正 */
	
	small {
		font-size: 12px;
	}
	/* 小于 12px 的中文很难阅读，让 small 正常化 */
	/** 重置列表元素 **/
	
	li {
		list-style: none;
	}
	/** 重置文本格式元素 **/
	
	a {
		text-decoration: none;
	}
	
	a:hover {
		text-decoration: none;
	}
	/** 重置表单元素 **/
	
	legend {
		color: #000;
	}
	/* for ie6 */
	
	fieldset,
	img {
		border: 0;
	}
	/* img 搭车：让a链接里的 img 无边框 */
	
	button,
	input,
	select,
	textarea {
		font-size: 100%;
		line-height: normal;
	}
	/* 使得表单元素在 ie 下能继承字体大小 */
	/** 重置表格元素 **/
	
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}
	
	input[type="button"],
	input[type="submit"],
	input[type="reset"] {
		cursor: pointer;
	}
	/* ie6 7 8(q) bug  */
	
	iframe {
		display: block;
	}
	/* 清浮动 */
	
	.clearfix:after {
		visibility: hidden;
		display: block;
		font-size: 0;
		content: " ";
		clear: both;
		height: 0;
	}
	
	.clearfix {
		zoom: 1;
		/* for IE6 IE7 */
	}
	
	body {
		background: black;
	}
	
	#List {
		width: 800px;
		height: 360px;
		box-shadow: 0 0 10px white;
		margin: 150px auto 0;
		perspective: 1500px;
		/* 站 在1000px之处看li	 */
	}
	
	#List li {
		width: 40px;
		height: 360px;
		float: left;
		position: relative;
		opacity: 1;
		transform-style: preserve-3D;
		/* 	3D空间 */
		transform-origin: center center -180px;
	}
	
	#List li a,
	#List li span {
		position: absolute;
		width: 100%;
		height: 100%;
	}
	
	#List li span {
		width: 360px;
		position: absolute;
		height: 100%;
	}
	
	#List li a:nth-child(1) {
		left: 0;
		top: 0;
		background: url("../../static/img/outsourcing/outsourcing1.jpg");
	}
	
	#List li a:nth-child(2) {
		left: 0;
		top: -100%;
		background: url("../../static/img/outsourcing/outsourcing2.jpg");
		transform-origin: bottom;
		transform: rotateX(90deg);
	}
	
	#List li a:nth-child(3) {
		left: 0;
		top: 0;
		background: url("../../static/img/outsourcing/outsourcing3.jpg");
		transform: translateZ(-360px) rotateX(180deg);
	}
	
	#List li a:nth-child(4) {
		left: 0;
		top: 100%;
		background: url("../../static/img/outsourcing/outsourcing4.jpg");
		transform-origin: top;
		transform: rotateX(-90deg);
	}
	
	#List:hover li {
		transform: rotateX(360deg);
	}
	
	#btns {
		width: 200px;
		margin: 80px auto;
	}
	
	#btns li {
		width: 40px;
		height: 40px;
		background: red;
		color: white;
		float: left;
		text-align: center;
		line-height: 40px;
		font-style: italic;
		border-radius: 50%;
		margin: 0 5px;
		font-weight: bold;
		cursor: pointer;
	}
	
	#btns li.active {
		background: purple;
		color: black;
	}
	  
	@media screen and (min-width:200px) and (max-width:700px){
       #List li a:nth-child(1) {
		left: 0;
		top: 0;
		background: url("../../static/img/outsourcing/outsourcing1.jpg");
		
	}
	
	#List li a:nth-child(2) {
		left: 0;
		top: -100%;
		background: url("../../static/img/outsourcing/outsourcing2.jpg");
		transform-origin: bottom;
		transform: rotateX(90deg);
	}
	
	#List li a:nth-child(3) {
		left: 0;
		top: 0;
		background: url("../../static/img/outsourcing/outsourcing3.jpg");
		transform: translateZ(-360px) rotateX(180deg);
	}
	
	#List li a:nth-child(4) {
		left: 0;
		top: 100%;
		background: url("../../static/img/outsourcing/outsourcing4.jpg");
		transform-origin: top;
		transform: rotateX(-90deg);
	}
	/*#List li a{
		width: 400px;
		background-size:400px 100px;
	}
	#List li {
       width: 20px;
    }*/
}
</style>