<template>
  <div class="index">
    <app-carrousel></app-carrousel>
    <div class="ue-content ue-container">
      <div class="ue-kindcard">
        <img :src="cards[0].url">
        <span>{{cards[0].name}}</span>
        <span>{{cards[0].sum}}</span>
      </div>
      <div class="ue-kindcard">
        <img :src="cards[1].url">
        <span>{{cards[1].name}}</span>
        <span>{{cards[1].sum}}</span>
      </div>
      <div class="ue-kindcard">
        <img :src="cards[2].url">
        <span>{{cards[2].name}}</span>
        <span>{{cards[2].sum}}</span>
      </div>
      <div class="ue-kindcard">
        <img :src="cards[3].url">
        <span>{{cards[3].name}}</span>
        <span>{{cards[3].sum}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import appCarrousel from './swiper'
  export default {
    name: 'index',
    data () {
      return {
        cards: [
          {
            name: '读研报',
            url: './static/Img/typecard1.png',
            sum: '研报文章34篇'
          },
          { name: '看竞品',
            url: './static/Img/typecard2.png',
            sum: '竞品文章35篇'
          },
          { name: '赏设计',
            url: './static/Img/typecard3.png',
            sum: '设计文章44篇'
          },
          {
            name: '学方法',
            url: './static/Img/typecard4.png',
            sum: '方法文章100篇'
          }
        ]
      }
    },
    components: {appCarrousel}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "../SCSS/main.scss";
  .ue-content{
    height: 280px;
    padding-top: 60px;
    padding-bottom: 50px;
    .ue-kindcard {
      float: left;
      & > :nth-child(2) {
        display: block;
        font-size: 24px;
        margin-top: 10px;
      }
      & > :nth-child(3) {
        margin-top: 10px;
        display: block;
        font-size: 16px;
        color: #999999;
      }
      img {
        display: block;
        width: 150px;
        height: 100px;
      }
    }
    & > :not(:last-child) {
      margin-right: 200px;
    }
  }
</style>
