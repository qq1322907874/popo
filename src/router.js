import Router from 'vue-router'
import Vue from 'vue'
// import ViewHome from './assets/views/home.vue'
// import ViewTopic from './assets/views/topic.vue'
// import ViewClass from './assets/views/class.vue'
// import ViewMy from './assets/views/my.vue'
// import ViewShop from './assets/views/shop.vue'
// import More from './assets/views/more.vue'

//解决路由跳转成功但是报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

//在Vue中使用路由
Vue.use(Router)

//路由懒加载
const ViewHome = () => import('./assets/views/home.vue')
const ViewShopcar = () => import('./assets/views/shopcar.vue')
const ViewSearch = () => import('./assets/views/search.vue')
const ViewMy = () => import('./assets/views/my.vue')
const ViewShop = () => import('./assets/views/shop.vue')
const More = () => import('./assets/views/more.vue')

export default new Router({//new一个Router
	routes:[
		{ path:'/',redirect:'/home' },
		{ path:'/home',component:ViewHome },
		{ path:'/shopcar',component:ViewShopcar },
		{ path:'/search',component:ViewSearch },
		{ path:'/my',component:ViewMy },
		{ path:'/shop',component:ViewShop },
		{ path:'/more',component:More },
	]
})
