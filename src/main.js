// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import "./assets/iconfont/iconfont.css";//iconfont.css


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue(Vue.util.extend({el: '#app', router}, App))
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })



//npm install swiper swiper@3.4.2 --save-dev
