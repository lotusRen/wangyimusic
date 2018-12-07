<template lang="pug">
  div
    findhead
    keep-alive
     router-view
</template>
<script>
import Findhead from 'components/find/findmain/findhead'
export default {
  components:{
    Findhead
  }
}
</script>
<style lang="stylus" scoped>

</style>
