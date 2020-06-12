<template>
  <div class="more">
    <sptypes></sptypes>
  </div>
</template>

<script>
export default{
  data(){
    return {
    }
  },
  components:{
    "sptypes":resolve=>{
      require(["../component/sptype.vue"],resolve)
    }
  }
}

</script>

<style scoped>

</style>
