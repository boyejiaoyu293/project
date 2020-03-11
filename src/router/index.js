import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({

	routes: [{
		path: '/',
		name: 'index',
		component: resolve => require(['@/components/index'], resolve),
		children: [{
			path: '/',
			name: 'home',
			component: (resolve) => {require(['@/components/home'], resolve)}
		},
		{
			path:'/jiuye',
		    name:'jiuye',
			component:resolve=>require(['@/components/jiuye'],resolve)
		},
		{
			path:'/apply',
			name:'apply',
			component:resolve=>require(['@/components/apply'],resolve)
		},
		{
			path:'/shizi',
			name:'shizi',
			component:resolve=>require(['@/components/shizi'],resolve)
		},
		{
			path:'/xuesheng',
			name:'xuesheng',
			component:resolve=>require(['@/components/xuesheng'],resolve)
		},
		{
			path:'/join',
			name:'join',
			component:resolve=>require(['@/components/join'],resolve)
		},
		{
			path:'/outsourcing',
			name:'outsourcing',
			component:resolve=>require(['@/components/outsourcing'],resolve)
		},
		{
			path:'/senior',
			name:'senior',
			component:resolve=>require(['@/components/senior'],resolve)
		}]
	}]
})