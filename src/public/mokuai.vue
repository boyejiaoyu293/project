<template>
	<div class="mokuai">
		
				<img :src="datae.src" style="width: 100%;" />
				<div class="money">
					<span class="money_num">价值 {{datae.money}}</span>
				</div>
				<div class="name">{{datae.name}}
					<p class="shangxin">{{datae.shang}}</p>
				</div>
		
	</div>
</template>

<script>
	/*	第一个路由加载页面*/
	export default {
		name: 'index',
		props: ['datae'],
		data() {
			return {
                  /*datae:{
                  	src:'https://goods6.juancdn.com/goods/190319/a/a/5c907d32b6f8ea6172541e9d_800x800.jpg?imageMogr2/thumbnail/310x310!',
                  	money:69,
                  	shang:'上新',
                  	name:'女装清仓专场'
                  }*/
			}
		}
	}
</script>

<style>
	.mokuai{
		 width: 100%;
		 margin: 0px;
		 padding: 0px;
	}
	.bg-purple{
		margin-top: 1px;
	}
	.money {
		padding-left: 0.09413333333333333rem;
		padding-right: 0.3413333333333333rem;
		color: #bbb;
		font-size: 0.4693333333333333rem;
		line-height: 0.9386666666666666rem;
		margin-top: 0.256rem;
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		-webkit-align-items: center;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
		position: relative;
	}
	
	.money_num {
		font-size: 0.64rem;
		color: #ff464e;
		margin-right: 0.17066666666666666rem;
	}
	
	.name {
		    position: relative;
    font-size: 0.512rem;
    color: #3b3b3b;
    padding-left: 0.1413333333333333rem;
    padding-right: 1.3453333333333333rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-bottom: 0.512rem;
	}
	
	.shangxin {
		color: #bbb;
		position: absolute;
		top: 50%;
		-webkit-transform: translateY(-50%);
		-ms-transform: translateY(-50%);
		transform: translateY(-50%);
		right: 0.3413333333333333rem;
		font-size: 0.4266666666666667rem;
	}
</style>