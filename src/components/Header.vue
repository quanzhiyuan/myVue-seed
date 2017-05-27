<template>
 <div class="app-nav app-nav-external">
   <div class="ue-container app-nav-container">
     <div class="app-nav-left">
       <img class="app-nav-logo" :src="ue_logo" >
       <span><router-link to="/articlelist">发现</router-link></span>
       <span><a :id="header[0]._id" href="#">{{header[0].name}}</a><span class="triangle-down" style="margin-left: 7px;"></span></span>
     </div>
     <div class="app-nav-right">
       <input type="text" >
       <span></span>
       <span><a  v-on:click="ueLogin">登录</a></span>
       <span ><a href="https://cloud.kingdee.com/passport/signup">注册</a></span>
     </div>
   </div>
 </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'app-nav',
    data () {
      return {
        ue_logo: '/static/Img/ue_logo.png'
      }
    },
    methods: {
      ueLogin: function () {  // 登录
//        let url = encodeURIComponent(window.location.href)
        window.location.href = '/index.html?code=123124234'
      },
      ueSignup: function () {  // 注册

      }
    },
    computed: {
      ...mapGetters([
        'header'
      ])
    }
  }
</script>
<style lang="scss">
  @import "../SCSS/main.scss";
  .app-nav{
    position: fixed;
    top: 28px;
    height: $header-height;
    width: 100%;
    background-color: $header-background-color ;
    text-align: center;
    font-size: 16px;
    z-index: $z-index5;
    cursor: default;
  }
  .app-nav-logo{
    width: 60px;
    height: 60px;
    float: left;
    margin-right: 135px;
  }
  .app-nav-left{
    float: left;
    height: $header-height;
    >:not(:first-child), >:not(:nth-child(2)){
      margin-right: 60px;
    }
    >span{
      text-align: center;
      height: 60px;
      >a{
        line-height: $header-height;
        height: $header-height;
        color: $font-color-white;
      }
    }
  }
  .app-nav-right{
    float: right;
    height: $header-height;
    >span{
      text-align: center;
      height: $header-height;
      margin-left: 40px;
      >a{
        line-height: $header-height;
        height: $header-height;
        color: $font-color-white;
      }
    }
    input{
      width: 240px;
      height: 32px;
      background-color: transparent;
      box-shadow: none;
      border-radius: 16px;
      border: 1px solid #fff;
      padding-left: 16px;
      color: $font-color-white;
      &:hover,&:checked,&:focus{
        outline:none;
        box-shadow: none;
      }
    }
    >:nth-child(2){
      border-left: 1px solid rgba(255,255,255,0.3);
    }
  }
</style>
