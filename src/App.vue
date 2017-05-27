<template>
  <div id="app" class="app">
    <app-nav></app-nav>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import appNav from './components/Header'
  import appFooter from './components/footer'
  export default {
    name: 'app',
    components: {appNav, appFooter},
    created: function () {    // 初始化App
      this.$store.dispatch('initApp')
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
