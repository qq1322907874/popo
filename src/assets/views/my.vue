<template>
	<div>
    <login v-if="showMy()"/>
    <user v-else/>
  </div>
</template>

<script>
  // import store from "../store/store.js"
  export default{
    data(){
      return {
      }
    },
    components:{
      "user":resolve=>{
        require(["../component/user.vue"],resolve)
      },
      "login":resolve=>{
        require(["../component/login.vue"],resolve)
      },
    },
    methods:{
      showMy(){
        if(sessionStorage["loging"]){
          return false;
        }else{
          return true;
        }
      }
    },
    mounted(){

    }
    // store
  }
</script>

<style>
</style>
