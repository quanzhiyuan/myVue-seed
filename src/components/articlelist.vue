<template>
  <div class="ue-articlelist">
      <div :style="{backgroundImage: 'url(' + bannerUrl + ')'}" class="ue-banner">
      </div>
    <div class="ue-articlelist-content ue-container">
      <ul v-on:click.stop="changeList($event)">
        <li><a id="al-allRead" :class="{active: active['al-allRead']}">全部</a></li>
        <li><a id="al-newPublish" :class="{active: active['al-newPublish']}">最新发布</a></li>
        <li><a id="al-moreRead" :class="{active: active['al-moreRead']}">最多阅读</a></li>
        <li><a id="al-moreLike" :class="{active: active['al-moreLike']}">最多点赞</a></li>
      </ul>
      <div class="clearfix"></div>
      <div class="articlelist-cards" v-if="articlelistCards.length!==0">
        <articlelist-card  v-for="(value,key) in articlelistCards" :style="key%2==1?'margin-left:30px;':''" :key="key" :cardInfo="value"></articlelist-card>
      </div>
      <div class="articlelist-cards" v-else="articlelistCards">
        lodding。。。。
      </div>
    </div>
  </div>
</template>
<script>
  import articlelistCard from '../components/articlelistcard.vue'
  import { mapGetters } from 'vuex'
  export default {
    name: 'ue-articlelist',
    data () {
      return {
        bannerUrl: require('../Images/articlelistBanner.png'),
        active: {
          'al-allRead': true,
          'al-newPublish': false,
          'al-moreRead': false,
          'al-moreLike': false
        }
      }
    },
    computed: {
      ...mapGetters([
        'articlelistCards'
      ])
    },
    methods: {
      changeList: function (event) {
        var currentId = event.target.id
        if (!currentId) return
        for (var item in this.active) {
          this.active[item] = false
        }
        this.active[currentId] = true
        this.articlelistCards = [
          {
            title: '从0到1 进步的未来',
            imgUrl: './static/Img/article1.png',
            author: '全志渊',
            pv: 23,
            like: 22,
            comment: 34
          }
        ]
      }
    },
    components: { articlelistCard },
    created: function () {
      this.$store.dispatch('getArticleListCards')
    }
  }
</script>
<style lang="scss" scoped="">
  @import "../SCSS/main";
  .ue-articlelist {
    .ue-articlelist-content {
      height: 600px;
      >ul {
        float: left;
        display: inline-block;
        padding: 0px;
        margin: 40px auto 0px auto;
        :not(:first-child) {
          margin-left: 45px;
        }
        >li {
          display: inline-block;
          float: left;
          list-style: none;
          cursor: default;
          >a {
            display: block;
            line-height: 25px;
            height: 25px;
            &:hover {
              cursor: pointer;
            }
            &.active {
              border-bottom: 2px solid $color-red;
              border-bottom-left-radius: 2px;
              border-bottom-right-image: url();-radius: 2px;
              color: $color-red;
            }
          }
        }
      },
    .articlelist-cards{
    }
    }
  }

</style>
