<template>
  <div class="my-box">
    <div class="my">
      <div class="my-info">
        <div class="headimg">{{uName}}</div>
        <div class="myname">
          <span class="name">{{uName}}</span>
          <span class="tel">此用户很懒，没有写个性标签</span>
        </div>
        <div class="lv">LV 5</div>
      </div>
      <div class="other">
        其他一些东西
      </div>
    </div>
  </div>
</template>

<script>
  import bus from "../tool/bus.js"
  export default{
    data(){
      return {
        uName:"",
      }
    },
    mounted(){
      this.uName = "用户" + sessionStorage["loging"];
    }
  }
</script>

<style scoped>
  .my-box{
    width:1200px;
    margin:0 auto;
    margin-top: 60px;
  }
  .my{
    width:100%;
    padding:20px 0;
  }
  .my-info{
    width:100%;
    padding:0 30px;
    border:1px solid #eaeaea;
    background: #fff;
    box-sizing: border-box;
    border-radius: 8px;
    height:100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .headimg{
    width:60px;
    height:60px;
    border-radius: 50%;
    border: 1px solid #eaeaea;
    background: #fafafa;
    overflow: hidden;
    background: royalblue;
    font-size: 18px;
    font-weight: 600;
    color: #fff;
    white-space: nowrap;line-height: 60px;
    cursor:default;
  }
  .myname{
    width:200px;
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 65%;
  }
  .name{
    color:#666;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 16px;
    font-weight: 500;
  }
  .tel{
    color:#ddd;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 13px;
    margin-top: 5px;
  }
  .other{
    width:100%;
    height:400px;
    margin-top: 20px;
    background: #fff;
    border: 1px solid #eaeaea;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    color:#666;
    font-size: 22px;
    font-weight: 500;
  }
</style>
