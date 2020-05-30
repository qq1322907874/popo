<template>
	<div class='app-wrapper' id='app'>
		<router-view class="r-box"></router-view>
		<Header></Header>
	</div>
</template>

<script>
	//引入tabbar组件
	// import tabBar from "./assets/component/tableBar.vue"
  //header
	// import Header from "./assets/component/Header.vue"
	//引入全局的工具类函数
	// import util from "./assets/util.js"
export default {
  name:'App',
	data(){
		return {}
	},
	components:{
		// "tab-bar":tabBar,
    "Header":resolve => {
      require(['./assets/component/Header.vue'],resolve)
      },
	},
  methods:{
    //底部导航跳转
  	onTabTo(_result){
  		let _key = _result.data.key || "";//获取子组件点击事件传过来的key
  		this.$router && this.$router.push("/"+_key);//将路由设置为这个key
  	}
  }
}
</script>

<style>
	body,.app-wrapper{
		margin:0;
		padding:0;
    width:100%;
    height:100%;
		background-color: #f4f4f4;
		color:#333;
	}
</style>

<style scoped>
	.r-box{
		position:absolute;
		top:0;
		left:0;
		right:0;
		bottom:0;
	}
</style>
