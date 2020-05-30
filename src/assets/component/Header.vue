<template lang=''>
   <div class="wrapper">

	   <input class="search" placeholder="搜索商品，共计8888个好物">
     <div class="scan">
       <!-- <span class="ic iconfont"></span> -->
       <span class='txt iconfont' title='用户'>&#xe638;</span>
     </div>
	   <div class='notice'>
		   <!-- <span class="ic iconfont"></span> -->
		   <span class='txt iconfont' title="购物车">&#xe602;</span>
	   </div>
   </div>
</template>

<script>
</script>

<style scoped>
  .wrapper{
  	position:fixed;
    display: flex;
  	top:0;
  	left:0;
  	right:0;
  	height:60px;
  	flex-wrap:nowrap;
  	flex-direction: row;
  	justify-content: center;
    align-items: center;
    box-sizing: border-box;
  	border-top-width:2px;
  	/* border-top-color:#d9d9d9; */
  	background-color: #fafafa;
  }
  .scan,.notice{
	  height:24px;
    margin-right: 20px;
  }
  .scan{
    margin-left:40%;
  }
  .txt,.search{
	  color: #666;
  }
  .ic{
	  font-size: 32px;
  }
  .txt{
	  font-size: 28px;
    font-weight: 700;
    color: #ccc;
    cursor:pointer;
  }
  .search{
    margin-left:20%;
    padding:0 15px 0 15px;
    margin-top:8px;
	  height:30px;
    border:1px solid #ddd;
	  font-size: 16px;
	  background-color: #fff;
	  border-radius:6px;
  }
  .search:focus{
    outline: none;
  }
  .search::placeholder{
    color:#ccc;
  }
</style>
