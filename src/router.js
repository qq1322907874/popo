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

//把路由模块加入到vue中

Vue.use(Router)

//路由懒加载
const ViewHome = () => import('./assets/views/home.vue')
const ViewTopic = () => import('./assets/views/topic.vue')
const ViewClass = () => import('./assets/views/class.vue')
const ViewMy = () => import('./assets/views/my.vue')
const ViewShop = () => import('./assets/views/shop.vue')
const More = () => import('./assets/views/more.vue')

export default new Router({//new一个Router
	routes:[
		{ path:'/',redirect:'/home' },
		{ path:'/home',component:ViewHome },
		{ path:'/topic',component:ViewTopic },
		{ path:'/class',component:ViewClass },
		{ path:'/my',component:ViewMy },
		{ path:'/shop',component:ViewShop },
		{ path:'/more',component:More },
	]
})
