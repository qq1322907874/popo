<template lang=''>
   <div class="wrapper">
     <div class="backhome">
       <span class='txt iconfont' title="首页" @click="jumpWeb('home')">&#xe605;</span>
     </div>
	   <input class="search"
     v-model="keyWord"
     @keyup.enter="sendKeyWord()"

     placeholder="搜索商品，共计8888个好物">
     <div class="scan">
       <span class='txt who iconfont' v-if="showName()">&#xe638;
          <div class="hover-box">
            <div class="headimg" @click="jumpWeb('my')">暂无</div>
            <div class="my-info">
              <div class="sm">
                <div class="lv">LV0</div>
                <div class="name">未登录</div>
              </div>
              <span class="tel">此用户很懒，没有写个性标签</span>
            </div>
            <div class="other">
              其他一些东西
            </div>
          </div>
       </span>
       <span class='who iconfont' v-else>&#xe638;
           <div class="hover-box">
             <div class="headimg" @click="jumpWeb('my')">&#xe638;</div>
             <div class="my-info">
               <div class="sm">
                 <div class="lv">LV5</div>
                 <div class="name">{{loging}}</div>
                 <div class="exitUser" @click="exitCurrent">退出</div>
               </div>
               <span class="tel">此用户很懒，没有写个性标签</span>
             </div>
             <div class="other">
               其他一些东西
             </div>
           </div>
       </span>
     </div>
	   <div class='notice'>
		   <span class='txt iconfont ic-gwc' title="购物车" @click="jumpWeb('shopcar')">&#xe602;
          <span class="tip" v-if="times">{{times}}</span>
       </span>
	   </div>
   </div>
</template>

<script>
  import bus from '../tool/bus.js'
  import {setCookie,getCookie} from '../tool/util.js';
  export default{
    data(){
      return {
        times:0,
        loging:'',
        keyWord:''
      }
    },
    methods:{
      exitCurrent(){
        sessionStorage.removeItem("loging");
        this.loging = sessionStorage["loging"];
      },
      showName(){
        if(sessionStorage["loging"]){
          return false;
        }else{
          return true;
        }
      },
      sendKeyWord(){
        let kw = this.keyWord.trim().toString().toLowerCase();
        if(kw === ''){
          return;
        }
        bus.$emit("kw",kw);
        this.$router.push('/search?keyword='+kw);
      },
      jumpWeb(w){

        switch(w){
          case "home":
            this.$router.push("/");
            break;
          case "shopcar":
            this.$router.push("/shopcar");
            break;
        }
        if(w === "my"){
          if(sessionStorage["my"]){
            var userId = sessionStorage["my"];
            this.$router.push("/my/"+userId);
          }else{
            this.$router.push("/my?login="+ Math.random()*666);
          }
        }
      }
    },
    computed:{
    },
    beforeCreate(){
    },
    created(){
      // if(navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)){
      //    //移动端CSS
      //    require('../css/mb-header.css');
      // }else{
      //    //PC端CSS
      //    require('../css/pc-header.css');
      // }
    },
    mounted(){
      this.loging = sessionStorage["loging"];
      this.times = parseInt(getCookie('count'));
      bus.$on("toGwc",(val)=>{//监听事件toGwc，回调函数要使用箭头函数;
        this.times = parseInt(getCookie('count'));
      });
       bus.$on("isLogin",(val)=>{
         this.loging = val;
       })
    },
    updated(){

    }
  }
</script>

<style scoped>
  .exitUser{
      color:#00aadd;
      font-size: 13px;
      cursor: pointer;
    }

    .lv,.name{
      margin-right: 30px;
    }
    .lv{
      font-size: 13px;
    }
    .headimg{
      width:50px;
      height:50px;
      border-radius: 50%;
      border: 1px solid #eaeaea;
      box-sizing: border-box;
      background: #eaeaea;
      color:rgba(0,120,250,.4);
      text-align: center;
      cursor: pointer;
      position: absolute;
      top:-25px;
      left:130px;
      font-size: 32px;
      line-height: 50px;
      overflow: hidden;
    }
    .my-info{
      width:100%;
      margin:0 auto;
      margin-top:20px;
      border-bottom:1px solid #eaeaea;
      background: #fff;
      box-sizing: border-box;
      height:80px;
    }
    .sm{
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .who:hover .hover-box{
      display: block;
    }

    .hover-box{
      width:300px;
      right:-135px;
      display: none;
      padding:15px 0;
      border: 1px solid #eaeaea;
      position: absolute;
      height:400px;
      top:15px;
      z-index: 100;
      background: #fff;
      border-radius: 8px;
    }
    .myname{
      width:100%;
      height:100%;
    }
    .name{
      color:#666;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 16px;
      text-align: center;
      font-weight: 500;
    }
    .tel{
      color:#ddd;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-size: 13px;
      margin-top: 5px;
    }
    .other{
      width:100%;
      height:300px;
      margin-top: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      color:#666;
      font-size: 22px;
      font-weight: 500;
    }
    .ic-gwc{
      position: relative;
    }
    .tip{
      position: absolute;
      top:-10px;
      right:-10px;
      width:15px;
      color:#eee;
      text-align: center;
      font-weight: 400;
      font-size: 10px;
      height:15px;
      border-radius: 50%;
      background: #ff3300;
    }
    .wrapper{
    	position:fixed;
      z-index: 99;
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
    .scan .who{
      width:30px;
      height:30px;
      display: inline-block;
      text-align: center;
      line-height: 30px;
      border: 1px solid #dfdada;
      border-radius: 50%;
      position: relative;
      background: #eaeaea;
      font-size: 22px;
      color:rgba(0,120,250,.4);
    }
</style>
