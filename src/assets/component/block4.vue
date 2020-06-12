<template>
  <div class="block">
    <div class="title">
      <h2>手机专场</h2>
    </div>
    <div class='items'>
      <div class='i-box' v-for="i in shouji">
        <div class="img-box">
          <img :src="i.img" alt="" class="img" @click="jumpWeb(i.id)">
        </div>
        <div class='disc'>
          <div class='sp-title'>{{i.name}}</div>
          <div class='sp-desc'>{{i.desc}}</div>
          <div class='sp-price'>￥{{i.price}} <span class='sp-yuan'>元</span></div>
        </div>
        <div class='bt-box'>
          <button class='bt-gouwuche' @click="jumpWeb(i.id)">加入购物车</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import bus from '../tool/bus.js'
  import {setCookie,getCookie,addTogwc} from '../tool/util.js';
export default{
  data(){
    return {
      shouji:[]
    }
  },
  methods:{
    jumpWeb(id){
      this.$router.push('/shop?id='+id);
    }
  },
  computed:{

    getDuanxiu(){
      let url = "http://xjlweb.icu/static/json/fuxi.json";
      axios.get(url).then((res)=>{
        this.shouji = [...res.data.shouji];
      })
    }
  },
  created(){
    this.getDuanxiu;
  },
  mounted(){

  }
}

</script>

<style scoped>
  .block{
    height:400px;
    margin-bottom: 100px;
  }
  .title{
    height:50px;
    line-height: 42px;
    border-bottom: 1px solid #eee;
    background: #fdfdfd;
    box-sizing: border-box;
  }
  h2{
    margin:0;
    height:50px;
    line-height: 50px;
    margin-left:15px;
    color: #666;
    font-size: 18px;
    font-weight: 700;
  }
  .items{

  }
  .i-box:hover{
    box-shadow: inset 0 0 15px rgba(0,0,0,.08);
  }
  .img-box{
    width:100%;
    height:220px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .img{
    width:80%;
    height:160px;
    display: block;
  }
  .i-box{
    float:left;
    border: 1px solid #eee;
    width:200px;
    height:350px;
    box-sizing: border-box;
    border-top:none;
  }
  .disc{
    width:100%;
    height:80px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    align-items: center;
    padding:5px 0;
    box-sizing: border-box;
  }
  .sp-title,.sp-desc,.sp-price{
    font-size: 15px;
    width:180px;
    font-weight: 600;
    color: #666;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .sp-desc{
    font-size: 12px;
    font-weight: 500;
    color: #ccc;
  }
  .sp-price{
    font-size: 16px;
    color: #FF3300;
    font-style: italic;
  }
  .sp-yuan{
    color:#ccc;
    font-size: 12px;
  }
  .bt-box{
    display: flex;
    align-items: center;
    height: 50px;
  }
  .bt-gouwuche{
    width:50%;
    height:30px;
    border:1px solid #ddd;
    background: rgba(25,25,25,.05);
    border-radius: 4px;
    color:#999;
    cursor: pointer;
    font-size: 13px;
    font-weight: 600;
    margin:0 auto;
  }
  .bt-gouwuche:focus{
    outline: none;
    box-shadow: inset 0 0 10px rgba(0,0,0,.08);
  }
</style>
