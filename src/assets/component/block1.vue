<template>
  <div class='block'>
    <span class='txt'>{{title}}
      <span class='ic iconfont'>&#xe600;</span>
    </span>
    <div class="lbutton iconfont" :style="lColor" @click="pre()">&#xe600;</div>
    <div class="rbutton iconfont" :style="rColor" @click="next()">&#xe600;</div>
    <div class='box-item' :style="position">
      <div class="i-box" v-for='i in jingpin' @click='jumpWeb(i.url)'>
          <img class='i-image' :src="i.img" alt='图片资源未找到' />
          <span class="i-name">{{i.name}}</span>
          <div class='i-price'>
            <span class="i-price-n">￥{{i.price}}</span>
            <span class="i-price-t">元起</span>
          </div>
          <!-- <span class="i-state" v-if='i.state'>{{i.state}}</span> -->
       </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";//请求插件
  import util from '../tool/util.js'
  export default{
    data(){
      return {
        position:{left:'50px'},
        lColor:{color:"#cdcdcd"},
        rColor:{color:"#999"},
        title:'',
        jingpin:[],
      }
    },
    methods:{
      jumpWeb(_url){
        if(_url === '') return;
        var url = _url.split('&');
        this.$router.push(url[0]);
      },
      pre(){
        let left = this.position.left;
        if(left === '50px') return this.position.left = '50px';
        this.position.left = parseInt(left) + 1200 + 'px';
      },
      next(){
        let left = this.position.left;
        if(left === '-2350px') return this.position.left = '-2350px';
        this.position.left = parseInt(left) - 1200 + 'px';
      }
    },
    computed:{
      getJingping(){
        axios({
          method:"get",
          url:'http://localhost:8080/static/json/fuxi.json'
        }).then((res)=>{
          let t = res.data.shouji;
          let result = [];
          result = t.splice(0,4);
          t = res.data.duanxiu;
          result = t.splice(0,4).concat(result);
          t = res.data.beibao;
          result = t.splice(0,4).concat(result); t.splice(0,4);
          this.jingpin = result;
          this.title = res.data.title;
        })
      },

      ifMax(){
        if(this.position.left === '50px') return this.lColor.color = '#cdcdcd';
        return this.lColor.color = '#999';
      },
      ifMin(){
        if(this.position.left === '-2350px') return this.rColor.color = '#cdcdcd';
        return this.rColor.color = '#999';
      }
    },
    created(){
      this.getJingping;
    },
    beforeUpdate(){
      this.ifMax;
      this.ifMin;
    }
  }
</script>

<style scoped>
  .block{
    height: 250px;
  }
  .lbutton,.rbutton{
    width:25px;
    height: 25px;
    position: absolute;
    top:50%;
    cursor: pointer;
    z-index: 99;
    font-size: 23px;
    font-weight: 700;
    color:#999;
  }
  .rbutton{
    right: 0;
    right: 10px;
    transform: rotate(-90deg);
  }
  .lbutton{
    right: 0;
    left: 10px;
    transform: rotate(90deg);
  }
  .txt{
    text-align: center;
    width:100%;
    height:100px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor:pointer;
  }
  .ic{
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    width:22px;
    height:22px;
    box-sizing: border-box;
    color:#444;
    border-radius: 50%;
  }
  .box-item{
    width:3600px;
    position: absolute;
    box-sizing: border-box;
    transition:all 0.7s;
  }
  .i-box{
    width:220px;
    float:left;
    margin-right:80px;
    text-align: right;
    font-size: 18px;
  }
  .i-image{
    width:100px;
    cursor:pointer;
    height:100px;
    float:right;
    margin-left:20px;
  }
  .i-name{
    display: block;
    font-weight: 700;
    margin-left:20px;
    overflow: hidden;
    white-space: nowrap;
    font-size: 16px;
  }
  .i-price{
    margin-top: 5px;
    font-size: 16px;
  }
  .i-price-n{
    color:#FF2200;
    font-size: 14px;
    font-weight: 600;
    font-style: italic;
  }
  .i-price-t{
    font-size: 12px;
    margin-left: 2px;
    color:#999;
  }
</style>
