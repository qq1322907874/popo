<template lang="">
	<div class="wrapper">

		<div class='bar-item' @click='tabTo("home")'>
			<span class='bar-ic iconfont' :class='this.isActive("home")'>&#xe605;</span>
			<span class='bar-txt' :class='this.isActive("home")'>首页</span>
		</div>

		<div class='bar-item' @click='tabTo("topic")'>
			<span class='bar-ic iconfont' :class='this.isActive("topic")'>&#xe601;</span>
			<span class='bar-txt' :class='this.isActive("topic")'>专题</span>
			<span class='notice-dot'></span>
		</div>

		<div class='bar-item' @click='tabTo("class")'>
			<span class='bar-ic iconfont fl' :class='this.isActive("class")'>&#xe606;</span>
			<span class='bar-txt' :class='this.isActive("class")'>分类</span>
		</div>

		<div class='bar-item' @click='tabTo("shop")'>
			<span class='bar-ic iconfont' :class='this.isActive("shop")'>&#xe602;</span>
			<span class='bar-txt' :class='this.isActive("shop")'>购物车</span>
		</div>

		<div class='bar-item' @click='tabTo("my")'>
			<span class='bar-ic iconfont' :class='this.isActive("my")'>&#xe604;</span>
			<span class='bar-txt' :class='this.isActive("my")'>我的</span>
			<span class='i-notice'>99</span>
		</div>

	</div>
</template>
<!-- idIpx()在混淆中有定义，是为区分iphone -->
<script>
	export default{
		data(){
			return {
				pIndexkey:'home',

			}
		},
		methods:{
			isActive(_c){
				return this.pIndexkey === _c ? 'bar-active' : '';
			},
			tabTo(_key){
        this.pIndexkey = _key;//点击按钮后让点击传递的值赋给pIndexkey，以便让isActive函数生效。
				this.$emit('tabTo',{
					status:'tabTo',
					data:{
						key:_key
					}
				})
			}
		},
		created(){

		},mounted(){

		}

	}

</script>

<!-- scoped当前作用域 -->
<style scoped>
  .bar-item .fl{
    font-size: 32px;
  }
	.iconfont{
		/* font-family: iconfont; */
	}
	.wrapper{
		position:fixed;
    display:flex;
		bottom:0;
		left:0;
		right:0;
		height:90px;
		flex-wrap:nowrap;
    box-sizing: border-box;
		flex-direction: row;
		justify-content: space-around;
		border-top-width:2px;
		border-top-color:#d9d9d9;
		background-color: #fafafa;
	}
	.w-ipx{
		height:140px;
	}
	.bar-item{
    cursor:pointer;
    height:80px;
    line-height: 80px;
    position: relative;
	}
	.bar-txt,.bar-ic{
		color:#666;
		text-align: center;
	}
	 .bar-item .bar-active{
		color:#ff6600;
	}
	.bar-ic{
		padding-top:10px;
		font-size: 38px;
    color:#ccc;
	}
	.bar-txt{
		font-size:13px;
    position: absolute;
    bottom:0px;
    line-height: 20px;
    width:40px;
    left:0;
    right:0;
    height:20px;
	}
	.notice-dot{
		position:absolute;
		top:18px;
		right:-15px;
		height:15px;
		width:15px;
		border-radius:50%;
		background:red;
	}
	.i-notice{
		position:absolute;
		top:18px;
		right:-15px;
		height:15px;
		width:15px;
		border-radius:50%;
		font-size:5px;
		line-height:15px;
		text-align: center;
		color:#fff;
		background-color: red;
	}
</style>
