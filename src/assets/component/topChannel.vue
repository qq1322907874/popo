<template lang=''>
	<div class="wrapper">
		<ul class="topnav" >
        <li class="opt" @click="optTo('tj')"  :class="this.isActive('tj')">推荐
        </li>
        <li class="opt" @click="optTo('xs')"  :class="this.isActive('xs')" @mouseover="hover('xs')">限时
          <!--  <div class='pull' v-if="isHover" @mouseover="own('xs')" @mouseout="own("false")">
              <div class='list'>
                 <div><a href="#"></a></div>
                 <div><a href="#"></a></div>
                 <div><a href="#"></a></div>
               </div>
               <div class='list'>
                 <div><a href="#"></a></div>
                 <div><a href="#"></a></div>
                 <div><a href="#"></a></div>
               </div>
            </div> -->
        </li>
        <li class="opt" @click="optTo('xp')"  :class="this.isActive('xp')" @mouseover="hover('xp')">新品
           <!-- <div class='pull' v-if="isHover" @mouseover="own('xp')" @mouseout="own("false")">
               <div class='list'>
                 <div><a href="#"></a></div>
                 <div><a href="#"></a></div>
                 <div><a href="#"></a></div>
               </div>
               <div class='list'>
                 <div><a href="#"></a></div>
                 <div><a href="#"></a></div>
                 <div><a href="#"></a></div>
               </div>
            </div> -->
        </li>
        <li class="opt" @click="optTo('jj')"  :class="this.isActive('jj')" @mouseover="hover('jj')">居家
            <!-- <div class='pull' v-if="isHover" @mouseover="own('jj')" @mouseout="own("false")">
               <div class='list'>
                 <div><a href="#"></a></div>
                 <div><a href="#"></a></div>
                 <div><a href="#"></a></div>
               </div>
               <div class='list'>
                 <div><a href="#"></a></div>
                 <div><a href="#"></a></div>
                 <div><a href="#"></a></div>
               </div>
            </div> -->
        </li>
        <li class="opt" @click="optTo('fs')"  :class="this.isActive('fs')" @mouseover="hover('fs')">服饰
            <!-- <div class='pull' v-if="isHover" @mouseover="own('fs')" @mouseout="own("false")">
              <div class='list'>
                 <div><a href="#"></a></div>
                 <div><a href="#"></a></div>
                 <div><a href="#"></a></div>
               </div>
               <div class='list'>
                 <div><a href="#"></a></div>
                 <div><a href="#"></a></div>
                 <div><a href="#"></a></div>
               </div>
            </div> -->
        </li>
        <li class="opt" @click="optTo('ms')"  :class="this.isActive('ms')" @mouseover="hover('ms')">美食
            <!-- <div class='pull' v-if="isHover" @mouseover="own('ms')" @mouseout="own("false")">
               <div class='list'>
                 <div><a href="#"></a></div>
                 <div><a href="#"></a></div>
                 <div><a href="#"></a></div>
               </div>
               <div class='list'>
                 <div><a href="#"></a></div>
                 <div><a href="#"></a></div>
                 <div><a href="#"></a></div>
               </div>
            </div> -->
        </li>
        <li class="opt" @click="optTo('qj')"  :class="this.isActive('qj')">清洁

        </li>
        <li class="opt" @click="optTo('my')"  :class="this.isActive('my')">母婴

        </li>
        <li class="opt" @click="optTo('yd')"  :class="this.isActive('yd')">运动

        </li>
        <li class="opt" @click="optTo('sm')"  :class="this.isActive('sm')">数码

        </li>
		</ul>
	</div>
</template>

<script>
  export default{
    data(){
      return {
        nowposition:{left:"0px"},
        active:'tj',
        isHover:"false",
      }
    },
    methods:{
      // own(o){

      // },
      // hover(b){
      //   if(this.isHover === "false")
      //   this.isHover = b;
      //    return true;
      // },
      isActive(o){
        return o === this.active?'isActive':''
      },
      optTo(_key){
        this.active = _key;
      }
    },
    created(){

    },
    mounted(){
      // this.initposition();
    },
  }
</script>

<style scoped>
  .pull{
    width:1280px;
    height:300px;
    background: #fff;
    position: absolute;
    top:30px;
    left:9%;
    z-index: 99;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .list{
    list-style: none;
    height:20px;
  }
  .isActive{
    color:#ff2200;
    background-color: rgba(0,0,0,.1);
  }
  .wrapper{
    	position:absolute;
      top:60px;
      left:0px;
      right: 0;
    	height:30px;
      padding:0 10%;
    	border-top-width:2px;
      box-sizing: border-box;
    	/* border-top-color:#d9d9d9; */
    	background-color: rgba(0,0,0,.5);
      color: #ddd;
  }
  .topnav{
    margin: 0;
    list-style: none;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap:nowrap;
    padding:0;
  }
  .opt{
    cursor: pointer;
    font-size: 13px;
    text-align: center;
    width:8%;
    height:30px;
    line-height: 30px;
  }


</style>
