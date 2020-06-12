<template>
	<div>
    <shopcar></shopcar>
  </div>
</template>

<script>
  export default{
    data(){
      return {}
    },
    components:{
      "shopcar":resolve=>{
        require(["../component/shopCar.vue"],resolve)
      }
    }
  }
</script>

<style>
</style>
