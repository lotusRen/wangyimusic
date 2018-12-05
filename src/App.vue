<template>
  <div id="app">
    <div>
       <router-view></router-view>
    </div>
    <footers></footers>
  </div>
</template>

<script>
import Footers from 'components/footer/footer'
export default {
  name: 'app',
  components:{
    Footers
  }
}
</script>

<style lang="stylus" scoped>
  #app
    padding:0px;
    margin:0px;
    position:absolute;
    top:0px;
    left:0px;
    width:100%;
    height:100%;
    border:hidden;
</style>
