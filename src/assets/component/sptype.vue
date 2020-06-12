<template>
  <div class="more clearfix">
    <div class="sort">
      <span>
        <span>· 默认排序</span>
      </span>
      <span>
        <span @click="zhsort('zh')" :class="this.color('zh')"> · 按综合排序 · </span>
      </span>
      <span>
        <span @click="jgsort('jg')" :class="this.color('jg')">按价格排序 · </span>
      </span>
    </div>
    <div class='items clearfix'>
      <div class='i-box' v-for="i in list">
        <div class="img-box">
          <img :src="i.img" alt="" class="img" @click="jumpWeb(i.id)">
        </div>
        <div class='disc'>
          <div class='sp-title'>{{i.name}}</div>
          <div class='sp-desc'>{{i.desc}}</div>
          <div class='sp-price'>￥{{i.price}} <span class='sp-yuan'>元</span></div>
        </div>
        <div class='bt-box'>
          <button class='bt-gouwuche' @click="jumpWeb(i.id)">去购买</button>
        </div>
      </div>
    </div>
    <div class="noMore"  v-if="moreShowBoolen">已加载全部...</div>
  </div>
</template>

<script>
  import axios from 'axios';
export default{
  data(){
    return {
      beibao:[],
      colsort:'',
      list: [],
      moreShowBoolen: true,
      nowPage: 1,
      scrollHeight: 0
    }
  },
  methods:{
    color(o){
      return this.colsort === o?'active':'';
    },
    jumpWeb(id){
      this.$router.push("/shop?id="+id);
    },
    zhsort(z){
      this.colsort= z;
      return this.list.sort((a, b) => {
      return a['name'].localeCompare(b['name'])
      })
    },
    jgsort(j){
      this.colsort= j;
      console.log(this.colsort);
      return this.list.sort((a, b) => {
      //    return a['price'].localeCompare(b['price'])
        return ((parseInt(a['price'])<parseInt(b['price']))?-1:((parseInt(a['price'])>parseInt(b['price']))?1:0))
      })
    },
    scrollMore(){ // 下滑加载更多
        this.list = this.list.concat(this.beibao.slice(this.nowPage * 12, (this.nowPage + 1) * 12))
        this.nowPage++
        if (this.beibao.length >= this.nowPage * 12) {
          this.moreShowBoolen = false
        } else {
          this.moreShowBoolen = true
        }
    }
  },
  computed:{
    getBeibao(){
	  let url = "http://xjlweb.icu/static/json/fuxi.json";
      axios.get(url).then((res)=>{
        var all = window.location.href;
        var search = all.split("=")
        if(search[1] === '1000'){
          let t = [];
          t = [...res.data.beibao];
          t = [...res.data.beibao].concat(t,t,t,t,t,t,t);
          this.beibao = t;
          this.list = t.slice(0, 12)
          this.moreShowBoolen = false;//可以判断是否大于12再设置
        }else if(search[1] === '2000'){
          let t = [];
          t = [...res.data.duanxiu];
          t = [...res.data.duanxiu].concat(t,t,t,t,t,t,t);
          this.beibao = t;
          this.list = t.slice(0, 12)
          this.moreShowBoolen = false
        }else if(search[1] === '3000'){
          let t = [];
          t = [...res.data.shouji];
          t = [...res.data.shouji].concat(t,t,t,t,t,t,t);
          this.beibao = t;
          this.list = t.slice(0, 12)
          this.moreShowBoolen = false
        }
      })
    }
  },
  created(){
  },
  mounted(){
    this.getBeibao;
    window.addEventListener('scroll', () => {
      //document.documentElement.scrollTop获取滚动条纵坐标位置
      //document.documentElement.clientHeight获取视口高度
      //document.documentElement.scrollHeight获取目前的总高度，包括已经划过的(滚动条高度)
      const scrollY = document.documentElement.scrollTop || document.body.scrollTop;
      const vh = document.compatMode === 'CSS1Compat' ? document.documentElement.clientHeight : document.body.clientHeight;
      const allHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
       if (scrollY + vh + 5 >= allHeight) { // 当滚动条滑到页面底部
            this.scrollMore()
       }
    })
  }
}

</script>

<style scoped>
  .noMore{
    font-size: 14px;
    font-weight: 500;
    color:#bbb;
    text-align: center;
    margin-bottom: 30px;
  }
  .sort .active{
    color:#5683ea;
  }
  .more{
    max-width:1200px;
    margin:0 auto;
    margin-top:80px;
  }
  .sort span{
    font-size: 13px;
    font-weight: 500;
    color:#bbb;
    cursor: pointer;
  }
  .clearfix:after{
    content: "";
    display: block;
    clear: both;
  }
  .items{
    margin-top:20px;
    border-radius: 8px;
    overflow: hidden;
    margin-bottom: 30px;
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
    background: #fff;
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
