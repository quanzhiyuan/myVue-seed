<template>
   <div class="articlelist-card" v-on:click="showArticle">
      <img :src="cardInfo.coverPhoto.url">
     <div class="articlelist-card-content">
       <span class="articlelist-card-title">{{cardInfo.title}}</span>
       <span class="articlelist-card-author">作者：{{cardInfo.name}}</span>
       <div>
         <img src="">
         <span>{{cardInfo.pageview}}</span>
         <img src="">
         <span>{{cardInfo.like}}</span>
         <img src="">
         <span>{{cardInfo.comments.length}}</span>
       </div>
     </div>
   </div>
</template>
<script>
  export default {
    name: 'articlelist-card',
    props: ['cardInfo'],
    methods: {
      showArticle: function () {
        window.open('/article')
      }
    },
    data () {
      return {
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../SCSS/base/variables";
  .articlelist-card {
    float: left;
    width: $ue-card-width;
    height: $ue-card-height;
    margin-top: 30px;
    background-color: $card-background-color;
    border: $border;
    transition: all .2s ease;
    >img {
      width: $ue-card-width;
      height: 200px;
    }
    > .articlelist-card-content{
      padding-left: 20px;
      padding-right: 20px;
      > .articlelist-card-title{
        text-align: left;
        float: left;
        width: $ue-card-width;
        display: block;
        margin-top: 15px;
        margin-bottom: 8px;
        font-size: 20px;
        color: $font-color1;
      }
      > .articlelist-card-author{
        display: inline-block;
        float: left;
        text-align: left;
      }
      > :nth-child(3){
        float: right;
      }
    };
    &:hover {
      transform: translateY(-4px);
      box-shadow: 1px 4px 5px #888888;;
      cursor: pointer;
    }
  }
</style>
