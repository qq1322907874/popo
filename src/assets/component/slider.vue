
 <template>
  <div class="banner" :style="heig" @mouseover="stop()" @mouseout="play">
    <transition name="slide-fade" class="item">
      <img :src="dataList[currentIndex]" ref="h" v-if="show">
    </transition>
    <div class="page" v-if="this.dataList.length > 1">
      <ul>
        <li @click="gotoPage(prevIndex)" class="iconfont ic-l">&#xe600;</li>
        <li v-for="(item,index) in dataList" @click="gotoPage(index)" :class="{'current':currentIndex == index}">  {{index+1}}</li>
        <li @click="gotoPage(nextIndex)" class="iconfont ic-r">&#xe600;</li>
      </ul>
    </div>
  </div>
</template>


<script>
  export default{
    data(){
      return {
        dataList:["https://i1.mifile.cn/a4/xmad_15535933141925_ulkYv.jpg",
        "https://i1.mifile.cn/a4/xmad_15532384207972_iJXSx.jpg",
        "https://i1.mifile.cn/a4/xmad_15517939170939_oiXCK.jpg"],
          currentIndex: 0,   //默认显示图片
          timer: null,    //定时器
          heig:{height:"450px"},
          show:true,
      }
    },
    methods: {
      gotoPage(index) {
        this.currentIndex = index;
      },
      // boxheight(){
      //   if(!this.$refs.h && this.$refs.h.offsetHeight == 0) return;
      //   let h = this.$refs.h.offsetHeight;
      //   this.heig = {height:h+"px"}
      // },
      stop(){
        clearInterval(this.timer);
      },
      play(){
        // clearInterval(this.timer)
          this.timer=setInterval(()=>{
            this.currentIndex = this.nextIndex;
        },2000)
       },
    },
    computed: {
      //上一张
      prevIndex() {
        if(this.currentIndex == 0) {
          return this.dataList.length - 1;
        }else{
          return this.currentIndex - 1;
        }
      },

      //下一张
      nextIndex() {
        if(this.currentIndex == this.dataList.length - 1) {
          return 0;
        }else {
          return this.currentIndex + 1;
        }
      },

    },
    beforeCreate(){
    },
    created(){
    },
    mounted(){
      // this.boxheight();
      this.play();
    },
    updated(){
    }
  }
</script>

<style scoped>
  .ic-l{
    transform: rotate(90deg);
  }
  .ic-r{
    transform: rotate(-90deg);
  }
  ul li {
          list-style: none;
          float: left;
          width: 30px;
          height: 25px;
          line-height: 25px;
          text-align: center;
          cursor: pointer;
          color: rgba(255,255,255,.8);
          font-size: 14px;
      }
      .banner {
          max-width: 1200px;
          margin: 0 auto;
          height:416.6px;
          position: relative;
          margin-top: 110px;
      }
      .banner img {
          position: absolute;
          top:0;
          left:0;
          width: 100%;
          display: block;
      }
      .banner .page {
          background: rgba(0,0,0,.5);
          position: absolute;
          right: 0;
          bottom: 0;
          width: 100%;
      }
      .banner .page ul {
          float: right;
          margin-left: 5px;
      }
      .current {
          color: #ff6722;
      }

</style>

