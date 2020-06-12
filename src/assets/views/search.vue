<template>
	<div>
    <acquire/>
  </div>
</template>

<script>
  export default{
    data(){
      return {}
    },
    components:{
      "acquire":resolve=>{
        require(["../component/acquire.vue"],resolve)
      }
    }
  }
</script>

<style>
</style>
