<template>
  <div class="wrapper" v-cloak>
    <div class="shopcar" v-if="isShow">
      <div class="sp-checked">
        <div class="lchecked">
          <input type="checkbox" class="checkall" id="checkall" @click="checkAll($event)"/>
          <span class="checktxt">全选</span>
        </div>
        <div class="rchecked">
          <span class="txt">共选择<span class="finalInfo"> {{finalCount}} </span>件商品</span>
          <span class="txt">应付总额：<span class="finalInfo"> ￥{{finalPrice}} </span>元</span>
          <span class="sp-buy">购买</span>
        </div>
      </div>
      <div class="opt-title">
        <div class="sp-left">
          <span>商品信息</span>
        </div>
        <div class="sp-right">
          <span class="sp-operation">操作</span>
          <span class="sp-xiaoji">小计</span>
          <span class="sp-number">数量</span>
          <span class="sp-price">单价</span>
        </div>
      </div>
      <div class="opt-item">
        <div class="opt-box" v-for="i,index in sp" >
          <div class="sp-left sp-l">
            <input type="checkbox" class="checkone" v-model="i.checked" @click="spFinal(index)"/>
            <img :src="i.img" alt="" class="img"/>
            <div class="sp-info">
              <div class="sp-name" :title="i.name">{{i.name}}</div>
              <div class="sp-desc" :title="i.col + '-' + i.size">{{i.col}} - {{i.size}}</div>
            </div>
          </div>
          <div class="sp-right sp-r">
            <span class="sp-operation"><div class='sp-o' @click="delSel(index)">+</div></span>
            <span class="sp-xiaoji">￥{{i.xiaoji}}</span>
            <span class="sp-number">
              <span class="jian" @click.stop="jian(index)">-</span>
              <span class="n">{{i.selCount}}</span>
              <span class="jia" @click.stop="jia(index)">+</span>
            </span>
            <span class="sp-price">￥{{i.price}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="no-sp shopcar" v-else="isShow">
      购物车还没有商品哦~
    </div>
  </div>
</template>

<script>
  import bus from '../tool/bus.js'
  import {setCookie,getCookie,delCookie} from '../tool/util.js';
  export default{
    data(){
      return {
        sp:[],
        finalCount:0,
        finalPrice:0.00,
        isShow:true,
      }
    },
    methods:{
      spFinal(ind){
        if(event.currentTarget.checked === true){
          this.sp[ind].checked = true;
          this.finalCount = 0;
          this.finalPrice = 0.00;
          this.sp.forEach((i)=>{
            if(i.checked === true){
               this.finalCount += i.selCount;
               this.finalPrice = parseInt(parseInt(this.finalPrice) + i.selCount * i.price).toFixed(2);
            }
          })
        }else{
          this.sp[ind].checked = false;
          this.finalCount -= this.sp[ind].selCount;
          this.finalPrice = parseInt(parseInt(this.finalPrice) - this.sp[ind].selCount * this.sp[ind].price).toFixed(2)
        }
      },
      checkAll(e){
        this.finalCount = 0;
        //使用event.currentTarget.checked可以获取元素是否是选中状态，前面部分就是获取触发点击事件的dom
        if(e.currentTarget.checked === true){
          this.finalCount = 0;
          this.finalPrice = 0.00;
          this.sp.forEach((i)=>{
            i.checked = true;
            this.finalCount += i.selCount;
            this.finalPrice = parseInt(parseInt(this.finalPrice) + i.selCount * i.price).toFixed(2)
          })
        }else{
          this.finalCount = 0;
          this.finalPrice = 0.00;
          this.sp.forEach((i)=>{
            i.checked = false;
          })
        }
      },
      delSel(ind){
        if(this.sp[ind].checked === true){
          alert("选中状态下不可删除！")
          return;
        }
        this.sp.splice(ind,1);
        let s = this.sp;
        let str = JSON.stringify(s);
        setCookie("spName",str);
        let n = getCookie("count");
        n--;
        if(n === 0){
          delCookie("spName");
        }
        setCookie("count",n);

      },
      jia(ind){
        if(this.sp[ind].selCount === 9){
          alert("该商品限购9件！")
          return;
        }else{
          if(this.sp[ind].checked === true){
            this.finalCount++;
            this.finalPrice = (parseInt(this.finalPrice) + parseInt(this.sp[ind].price)).toFixed(2)
          }
          this.sp[ind].selCount++;
          this.sp[ind].xiaoji = (this.sp[ind].selCount * parseInt(this.sp[ind].price)).toFixed(2);
        }
      },
      jian(ind){
        if(this.sp[ind].selCount === 1){
          return;
        }else{
          if(this.sp[ind].checked === true){
            this.finalCount--;
            this.finalPrice = (parseInt(this.finalPrice) - parseInt(this.sp[ind].price)).toFixed(2)
          }
          this.sp[ind].selCount--;
          this.sp[ind].xiaoji = (this.sp[ind].selCount * parseInt(this.sp[ind].price)).toFixed(2);
        }
      },
    },
    computed:{
      initData(){
        let sp = [];
        if(getCookie("spName")){
          this.isShow = true;
          sp = JSON.parse(getCookie("spName"));
          this.sp = sp;
          if(this.sp.length>=1){
            this.isOne = true;
          }else{
            this.isOne = false;
          }
        }else{
          this.isShow = false;
        }
      }
    },
    mounted(){
      this.initData;
      bus.$on("toGwc",(val)=>{//监听事件toGwc，回调函数要使用箭头函数;
        this.initData
      })
    },
    updated(){

    }
  }
</script>

<style scoped>
  [v-cloak]{
      display: none;
  }
  .wrapper{
    margin:0 auto;
    max-width:1200px;
    margin-top:90px;
  }
  .shopcar{
    width:100%;
    min-height:300px;
    background: #fff;
    border-radius: 8px;
    border:1px solid #ddd;
  }
  .sp-checked{
    height:60px;
    line-height: 60px;
    border-bottom: 1px solid #eee;
  }
  .lchecked{
    float:left;
    margin-left: 15px;
  }
  .checktxt{
    font-size: 14px;
    color:#999;
    margin-left: -6px;
  }
  .rchecked{
    float:right;
    margin-right: 40px;
  }
  .txt{
    color:#999;
  }
  .finalInfo{
    color:#ff3300;
  }
  .sp-buy{
    height:30px;
    line-height: 30px;
    border: 1px solid #ddd;
    border-radius: 6px;
    text-align: center;
    display: inline-block;
    width:60px;
    color:#eee;
    margin-left: 10px;
    background: rgba(0,120,250,0.8);
    box-shadow: inset 0 0 10px rgb(0,140,250);
    cursor: pointer;
  }
  .opt-title{
    width:100%;
    height:30px;
    line-height: 30px;
    background: #fafafa;
    border-bottom: 1px solid #eee;
    font-size: 13px;
    color:#aaa;
  }
  .sp-left{
    float:left;
    margin-left: 15px;
  }
  .sp-right{
    margin-right: 100px;
    float:right;
  }
  .sp-price,.sp-number,.sp-xiaoji,.sp-operation{
    width:120px;
    float:right;
    text-align: center;
  }
  .opt-box{
    height:80px;
    line-height: 80px;
    width:1100px;
    border:1.2px solid #ddd;
    margin: 20px;
    border-radius: 6px;
  }
  .sp-l{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top:10px;
  }
  .img{
    width:60px;
    height:60px;
  }
  .sp-info{
    height:100%;
  }
  .checkone,.sp-info,.img{
    float:left;
    margin-right: 20px;;
  }
  .sp-name,.sp-desc{
    font-size: 16px;
    font-weight: 600;
    color:#666;
    height:20px;
    line-height: 20px;
    width:100px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .sp-desc{
    font-size: 13px;
    font-weight: 500;
    color:#999;
  }
  .sp-r{
    margin-right: 20px;
  }
  .jian,.jia,.sp-o{
    display: inline-block;
    width:24px;
    height:24px;
    line-height: 22px;
    margin-top:28px;
    text-align: center;
    background: rgba(25,25,25,.04);
    color:#666;
    font-size: 20px;
    font-weight: 600;
    border-radius: 50%;
    border:1px solid #ccc;
    cursor: pointer;
  }
  .n{
    margin:0 10px;
  }
  .sp-o{
    font-weight: 500;
    font-size: 25px;
    color:#777;
    transform: rotate(44deg);
    transition: all .3s;
  }
  .sp-o:hover{
    transform: rotate(-45deg);
  }
  .sp-xiaoji,.sp-price{
    color:#666;
    font-weight: 400;
  }
  .no-sp{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color:#999;
  }

</style>
