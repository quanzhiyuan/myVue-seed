<template>
  <div id="app" class="app">
    <app-nav></app-nav>
    <router-view></router-view>
  </div>
</template>

<script>
  import appNav from './components/Header'
  export default {
    name: 'app',
    components: {appNav}
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
