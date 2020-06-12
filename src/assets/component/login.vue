<template>
  <!-- 登录 -->
    <div class="login-box" v-if="isRegister">
      <div class="login">
        <div class="title">
          <span class="title-t">用户登录</span>
        </div>
        <div class="uName">
          <input type="text" v-model="uName" class="un" placeholder="手机号">
        </div>
        <div class="password">
          <input type="password" v-model="password" class="un" placeholder="密码6-16位字母或数字">
        </div>
        <button class="bt" v-if="loging" @click="loading()">登录</button>
        <button class="bt" v-else>登录中...</button>
        <div class="toRegister">
          <span class="turnTo" @click="turnTo()">没有账号？去注册>></span>
        </div>
      </div>
    </div>
    <!-- 注册 -->
    <div class="login-box" v-else>
      <div class="login">
        <div class="title">
          <span class="title-t">注册</span>
        </div>
        <div class="uName">
          <input type="text" v-model="uName" class="un"
          :onkeyup="uName=uName.replace(/[^\d]/,'')"
          placeholder="请输入您的手机号">
        </div>
        <div class="password">
          <input type="password" v-model="password" class="un"
          :onkeyup="checkPswd()"
          placeholder="密码6-16位字母/数字/符号">
        </div>
        <div class="password">
          <input type="password" v-model="again" class="un" placeholder="再次输入密码">
        </div>
        <button class="bt" @click="register()">注册</button>
      </div>
    </div>
</template>

<script>
  import {setSession} from "../tool/util.js";
  import bus from '../tool/bus.js'
  export default{
    data(){
      return {
        loging:true,
        isRegister:true,
        uName:'',
        person:[],
        password:'',
        again:''
      }
    },
    methods:{
      turnTo(){
        this.isRegister = false;
      },
      register(){
        let sta = this.formRule;
        if(sta){
          if(this.password === this.again){
            let newData = {};
             newData = {
               user:this.uName,
               password:this.password
             }
             let isSuccess = setSession(newData);
             if(isSuccess){
               alert("注册成功！");
               this.isRegister = true;
             }
            }else{
              alert("两次输入不一致！")
              return;
            }
        }
      },
      loading(){
        let sta = this.formRule;
        if(sta){
          let getUser = JSON.parse(sessionStorage["userData"]);
          let t = 1;
          for(var i=0;i<getUser.length;i++){
            if(getUser[i].user === this.uName){
              t = 0;
              if(getUser[i].password === this.password){
                this.loging = false;
                sessionStorage.setItem("loging",this.uName);
                bus.$emit("isLogin",getUser[i].user)
                this.$router.push("/");
              }else{
                alert("密码错误！")
              }
            }
          }
          if(t){
            alert("手机号未注册！");
          }
        }
      },
      checkPswd(){
        this.password=this.password.replace(/[\s]/g,'')
      },
    },
    computed:{
      formRule(){
        let zz = /^1[345789]\d{9}$/g;
        if(this.uName.length === 11 && zz.test(this.uName)){
          if(this.password.trim().length >= 6 && this.password.trim().length <= 16){
            return true;//账号密码格式正确
          }else{
            alert("请按密码格式输入允许的密码，6-16为字母/数字/符号!")
            return 0;//密码格式错误
          }
          return 0;//密码格式错误
        }else{
          alert("请输入可用的手机号!")
          return 0;//+86手机号不存在
        }
      }
    }
  }
</script>

<style scoped>
  .login-box{
    width:1200px;
    height:100%;
    margin:0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .login{
    width:400px;
    height:500px;
    border:1.2px solid #eaeaea;
    border-radius: 8px;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .title,.uName,.password,.bt,.toRegister{
    height:40px;
    line-height: 40px;
    color:#666;
    font-size: 24px;
    margin-top:20px;
  }
  .un,.bt{
    height:34px;
    line-height: 34px;
    width:240px;
    border:1.2px solid #eaeaea;
    border-radius: 4px;
    padding:0 15px;
    font-size: 16px;
  }
  .un::placeholder{
    color:#ddd;
  }
  .un:focus{
    border:1.2px solid #ccc;
    outline: none;
  }
  .bt{
    width:270px;
    font-weight: 500;
    border:1px solid rgba(0,120,250,0.4);
    color:#fafafa;
    background: rgba(0,120,250,0.8);
    cursor:pointer;
    box-shadow: inset 0 0 15px rgba(200,200,240,.4);
  }
  .bt:focus{
    outline: none;
    box-shadow: inset 0 0 20px rgba(200,200,240,.8);
  }
  .turnTo{
    font-size: 13px;
    text-align: right;
    cursor:pointer;
    color:rgba(0,120,250,0.8);
  }
</style>
