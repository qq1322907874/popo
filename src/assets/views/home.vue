<template>
	<div class='root'>
      <topChannel></topChannel>
      <slider></slider>
      <block-1></block-1>
      <block-2></block-2>
      <block-3></block-3>
      <block-4></block-4>
  </div>
</template>

<script>
  // import topChannel from '../component/topChannel.vue'
  // import slider from '../component/slider.vue'
  // import block1 from '../component/block1.vue'
  // import block2 from '../component/block2.vue'
  // import block3 from '../component/block3.vue'
  // import block4 from '../component/block4.vue'
  export default{
    data(){
      return {
      }
    },
    components:{
      "topChannel":resolve => {
        require(['../component/topChannel.vue','../component/slider.vue'],resolve)
        },
      "slider":resolve => {
        require(['../component/slider.vue'],resolve)
        },
      "block-1":resolve => {
        require(['../component/block1.vue'],resolve)
        },
      "block-2":resolve => {
        require(['../component/block2.vue'],resolve)
        },
      "block-3":resolve => {
        require(['../component/block3.vue'],resolve)
        },
      "block-4":resolve => {
        require(['../component/block4.vue'],resolve)
        },
      // "topChannel":topChannel,
      // "slider":slider,
      // "block-1":block1,
      // "block-2":block2,
      // "block-3":block3,
      // "block-4":block4,
    },
    computed:{

    },
    created(){
    },
    mounted(){
    }
  }
</script>

<style>
  .block{
    margin:0 auto;
    box-sizing: border-box;
    overflow: hidden;
    background: #fff;
    margin-top: 20px;
    min-height: 250px;
    max-width:1200px;
    border-radius:8px;
    position: relative;
  }
</style>

<style scoped>
	.root{

	}

</style>
