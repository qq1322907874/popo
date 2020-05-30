<template>
 <div class="box">
  <div class="detail">
    <div class="dt-box">
      <div class='img-box'>
        <img :src="detail.img" alt="" class="img" />
      </div>
      <div class="right">
        <div class="title">
          <h3>{{detail.name}}</h3>
          <div class="desc">{{detail.desc}}</div>
        </div>
        <div class="huodong"><span class="ltitle">促销活动</span><span class="desc">暂无</span></div>
        <div class="opt-item">
          <span class="ltitle">颜色选项</span>
          <div class="opt-box" :class="{checked:index==c}" v-for="i,index in detail.opt" @click="checkcol(i,index)">
            <div class="opt-color">{{i}}</div>
          </div>
        </div>
        <div class="opt-item">
          <span class="ltitle">配置选项</span>
          <div class="opt-box" :class="{checked:index==s}" v-for="i,index in detail.size" @click="checksize(i,index)">
            <div class="opt-size">{{i}}</div>
          </div>
        </div>
        <div class="huodong">
          <span class="ltitle">数量</span>
          <span class="jian" @click="reduce()">-</span>
          <span class="count">{{count}}</span>
          <span class="jia" @click="add()">+</span>
         </div>
      </div>
    </div>
  </div>
  <div class="bottom">
    <div class="bottom-box">
      <div class="sp-select"><span>已选择：</span></div>
      <div class="sp-info">
        <span class="sp-name">{{detail.name}} </span>
        <span class="sp-count"> x{{count}} </span>
        <span class="sp-color"> {{color}} </span>
        <span class="sp-size"> {{size}} </span>
      </div>
      <div class="sp-allprice">￥{{allprice}}.00<span>元</span></div>
      <div class="sp-buy">购买</div>
      <div class="sp-gouwuce">加入购物车</div>
    </div>
  </div>
  <div class="introduction">
    这是商品{{detail.name}}的详细说明
  </div>
 </div>
</template>

<script>
  import axios from 'axios';
  export default{
    data(){
      return {
        detail:[],
        color:"",
        size:"",
        allprice:"",
        count:1,
        c:0,
        s:0,
      }
    },
    methods:{
      checkcol(col,ind){
        this.color = col;
        this.c = parseInt(ind);
      },
      checksize(size,ind){
        this.size = size;
        this.s = ind;
      },
      add(){
        if(this.count === 9){
          return this.count = 9;
        }
        return this.count++;
      },
      reduce(){
        if(this.count === 1){
          return this.count = 1;
        }
        return this.count--;
      },
    },
    computed:{
      allPrice(){
        return this.allprice = this.detail.price * this.count;
      },
      getData(){
        var url = "http://localhost:8080/static/json/fuxi.json"
        axios.get(url).then((res)=>{
          let current = res.data;
          let u = window.location.href;
          u = u.split("=");
          u = u[1];
          if(parseInt(u) > 3000){
            current.shouji.map((item)=>{
              if(u === item.id){
                return this.detail = item;
              }
            })
          }else if(parseInt(u) > 2000){
            current.duanxiu.map((item)=>{
              if(u === item.id){
                return this.detail = item;
              }
            })
          }else{
            current.beibao.map((item)=>{
              if(u === item.id){
                return this.detail = item;
              }
            })
          }
        })
      }
    },
    created(){
      this.getData;
    },
    mounted(){
      this.$router.afterEach((to, from, next) => {
          window.scrollTo(0, 0)
      })
    },
    updated(){
      this.allPrice;
    }
  }
</script>

<style scoped>

  .checked{
    box-shadow: inset 0 0 10px rgba(25,25,80,.1);
  }
  .jian,.jia{
    width:24px;
    height:24px;
    line-height: 22px;
    margin-top:28px;
    float:left;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    border-radius: 50%;
    border:1px solid #ccc;
    cursor: pointer;
  }
  .count{
    float: left;
    margin:0 10px;
  }
  .box{
    width:100%;
  }
  .detail,.introduction{
    max-width:1200px;
    margin:0 auto;
    margin-top:80px;
  }
  .introduction{
    margin-top:20px;
    height:600px;
    text-align: center;
    padding-top:290px;
    font-size: 20px;
    color:#999;
    font-weight: 700;
    background: #fff;
    margin-bottom:100px;
  }
  .dt-box{
    border-radius: 8px;
    overflow: hidden;
    width:100%;
    height:600px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
  }
  .img-box{
    width:50%;
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .img{
    width:70%;
  }
  .right{
    width:40%;
    margin-right:10%;
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .title{
    font-size: 18px;
    font-weight: 600;
    color:#666;
    border-bottom: 1px solid #e6e6e6;
  }
  .title div{
    margin-bottom: 15px;
  }
  .desc{
    font-size: 13px;
    font-weight: 500;
    color:#bbb;
    width:300px;
    overflow: hidden;
    white-space:nowrap;
    text-overflow: ellipsis;
  }
  .ltitle{
    width:100px;
    float:left;
    display: inline-block;
  }
  .huodong,.opt-item{
    border-bottom: 1px solid #e6e6e6;
    color:#777;
    height:80px;
    line-height: 80px;
  }
  .opt-item{
  }
  .opt-box{
    float:left;
    height:34px;
    line-height: 34px;
    margin-top:23px;
    width:60px;
    text-align: center;
    margin-right:15px;
    font-size: 14px;
    color:#999;
    border-radius: 4px;
    cursor: pointer;
    border:1px solid #ddd;
    background: rgba(25,25,25,.04);
  }
  .bottom{
    position: fixed;
    bottom:0;
    left:0;
    right: 0;
    width:100%;
    height:80px;
    background: #fbfbfb;
    border-top: 1px solid #eaeaea;
  }
  .bottom-box{
    width:100%;
    height:80px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
  }
  .sp-select span{
    font-size: 14px;
    color:#999;
  }
  .sp-name{
    color:#666;
    font-size: 18px;
    font-weight: 600;
  }
  .sp-color,.sp-size,.sp-count{
    font-size: 13px;
    color:#999;
    margin-right: 5px;
    font-size: 600;
  }
  .sp-count{
    color:#ff3300;
    font-size: 16px;
  }
  .sp-info{
    margin-right:400px;
  }
  .sp-allprice{
    font-style: italic;
    color:#ff3300;
    font-weight: 600;
    font-size: 18px;
    margin-right: 20px;
  }
  .sp-buy,.sp-gouwuce{
    width:80px;
    border:1px solid #ccc;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    color: #999;text-align: center;
    height:32px;
    line-height: 32px;
    border-radius: 4px;
    background: rgba(25,25,25,0.04);
    margin-right: 20px;
  }
</style>
