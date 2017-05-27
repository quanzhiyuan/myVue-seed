<template>
  <footer class="app-footer">
    <div class="clearfix"></div>
    <div class="app-footer-content">
    <span class="feedback">
      <a href="#">关于我们 ABOUT US </a> |
      <a href="#">联系我们 CONTACT</a> |
      <a href="/copy_right">免责声明 PRIVACY</a></span>
    <span class="copyright">1993-2017  金蝶软件（中国）有限公司版权所有  粤ICP备05041751号</span>
    </div>
  </footer>
</template>
<script>
  export default {
    name: 'app-footer'
  }
</script>
<style lang="scss" scoped>
  @import "../SCSS/main.scss";
  .app-footer-content {
    text-align: center;
    height: 100px;
    border-top:1px solid #747474;
    line-height: 105px;
    span {
      display: inline-block;
    }
    * {
      color: #747474;
      font-size:13px;
    }
    .copyright {
      margin-left: 40px;
    }
  }
</style>
