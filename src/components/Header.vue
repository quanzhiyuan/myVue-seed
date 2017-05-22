<template>
 <div class="app-nav"> {{header}}</div>
</template>
<script>
export default {
  name: 'app-nav',
  data () {
    return {
      header: 'header of uecollge'
    }
  }
}
</script>
<style scoped>
.app-nav{
  position: fixed;
  top: 0px;
  height: 60px;
  width: 100%;
  background-color: red ;
}
</style>
