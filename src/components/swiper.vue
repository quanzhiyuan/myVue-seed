<template>
  <div class="app-carrousel">
      <!-- swiper -->
      <swiper :options="swiperOption">
        <swiper-slide v-for="banner in banners" :key="banner.id"><img class="app-banner" :src="banner.coverPhoto.url" /></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
  </div>
</template>

<script>
  import { swiper, swiperSlide } from '../mount/swiper'
  import { mapGetters } from 'vuex'
  export default {
    name: 'app-carrousel',
    data () {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          paginationClickable: true,
          centeredSlides: true,
          autoplay: 2500,
          autoplayDisableOnInteraction: false
        }
      }
    },
    computed: {
      ...mapGetters(['banners'])
    },
    components: { swiper, swiperSlide }
  }
</script>
<style lang="scss" scoped>
  @import "../SCSS/base/variables.scss";
  .app-banner{
    width: 100%;
    height: $banner-height ;
  }
</style>
