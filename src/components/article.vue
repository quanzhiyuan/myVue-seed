<template>
  <div class="article ue-container">
    <div class="article-content"></div>
    <div class="authorinfo">
      <img :src="userInfo.imgUrl"/>
      <span>{{userInfo.name}}</span>
      <span>{{userInfo.department}}</span>
    </div>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'article',
    data () {
      return {
      }
    },
    computed: {
      ...mapGetters(['userInfo'])
    }

  }
</script>
<style lang="scss" scoped>
  @import "../SCSS/base/variables";
  .article{
    margin:100px auto;
    .article-content{
      width: 960px;
    }
    .authorinfo{
      float: right;
      width: 220px;
      height: 358px;
      background-color: #fff;
      border: $border;
      text-align: center;
      img {
        display: block;
        margin: 50px auto 30px ;
        width: 100px;
        height: 100px;
        border-radius: 50px;
      }
      span {
        display: block;
        text-align:center;
      }
      &>:nth-child(2){
        font-weight: 600;
        font-size: 20px;
        margin-bottom: 15px;
      }
      &>:nth-child(3){
        font-size: 14px;
        color: $font-color;
      }
    }
  }
</style>
