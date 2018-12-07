<template lang="pug">
  ul#footer
    li(v-for="(item,index) in footerlist" :key='index'  )     
      router-link(:to="item.pathurl"  :ref="index" )
        i(:class='item.imgsrc')
        br
        span {{item.titl}}
</template>
<script>
export default {
  data(){
    return {
      footerlist: [
        {titl:'发现',imgsrc:'iconfont icon-liulan',pathurl:'/find'},
        {titl:'视频',imgsrc:'iconfont icon-bofang',pathurl:'/video'},
        {titl:'我的',imgsrc:'iconfont icon-yinyue',pathurl:'/mine'},
        {titl:'朋友',imgsrc:'iconfont icon-shejiao',pathurl:'/friends'},
        {titl:'账号',imgsrc:'iconfont icon-wode',pathurl:'/accountnum'}
      ],
      activ:{active: false}
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~common/stylus/index'

 #footer
  width: 100%
  position fixed
  bottom 0
  flex-row-around()     //进行横轴的弹性布局
  border-top: 1px solid #ccc
  padding: 7px
  li
    list-style none
    width:50px
    a 
     color: #aaa
     margin-top 8px
     font-size 14px
     display inline-block
     &.router-link-active
      color: #CC3333
     i
      font-size 24px
</style>
