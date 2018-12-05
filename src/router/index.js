import Vue from 'vue'
import Router from 'vue-router'
import Find from 'components/find/Find'
import Friends from 'components/friends/Friends'
import Mine from 'components/mine/Mine'
import Video from 'components/video/Video'
import Accountnum from 'components/accountnum/Accountnum'

Vue.use(Router)

export default new Router({
  routes:[
    {path:'/' ,redirect:'/find'},
    {path: '/find',component: Find},
    {path: '/friends',component: Friends},
    {path: '/mine',component: Mine},
    {path: '/video',component: Video} ,
    {path: '/accountnum',component: Accountnum}
  ]
})