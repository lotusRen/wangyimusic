<template lang="pug">
  header
    div#searchbox
      router-link(to="/find/search" id="searchbtn") {{searchtxt}}
      router-link(to="/find/play" id="playbtn")
        i(class="iconfont icon-youyinpin")
    div#recbox
      router-link(to="/find/recommend" id='rec' ref="rec" ) 个性推荐
      router-link(to="/find/anchorstation" id='ancsta' ref="ancsta") 主播电台
      span(ref='slider')
</template>
<script>
export default {
  data(){
    return {
      searchtxt: '沙漠骆驼 最近很火哦',
      ibecilck:''                   //代表现在激活是推荐或者电台
    }
  },
  mounted(){
    var that=this;
    window.onresize=function(){      //当窗口变化是重新计算边框的位置
        that.setspanleft()      
    }
   setTimeout(() =>{ 
    var rec=this.$refs.rec
    var ancsta=this.$refs.ancsta 
    rec.$el.hash.slice(1)===this.$route.path?this.ibecilck=rec:this.ibecilck=ancsta   //根据路由判断现在激活的是哪个面板
    this.setspanleft()
   },20)
  },
  watch:{
    '$route'(to){
      to.path===this.$refs.rec.$el.hash.slice(1) ?this.ibecilck=this.$refs.rec:this.ibecilck=this.$refs.ancsta 
      this.setspanleft()
    }
  },
  methods:{
    setspanleft(){
      this.$refs.slider.style.left=(this.ibecilck.$el.offsetLeft+17)+'px'
    }
  }

}
</script>
<style lang="stylus" scoped>
  @import '~common/stylus/index'
 header 
   background #CC3300
  #searchbox 
    height 60px
    position relative
    #searchbtn
      background: white
      opacity 0.5
      border-radius(14px)
      padding 5px
      width: 60%
      height: 20px
      text-align center
      pos-center()
    #playbtn
      position absolute 
      right: 20px
      top 20px
      i 
        color #ccc
        font-size 24px
  #recbox
    text-align center
    flex-row-around()
    position relative
    padding 10px
    a
      color white
      &.router-link-active
        font-weight bold
    span
      width 30px
      height 4px
      background white
      position absolute
      left 50%
      bottom 5px
      border-radius(10px)
      transition: left 0.3s
</style>
