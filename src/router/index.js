import Vue from 'vue'
import Router from 'vue-router'
import Find from 'components/find/Find'
import Friends from 'components/friends/Friends'
import Mine from 'components/mine/Mine'
import Video from 'components/video/Video'
import Accountnum from 'components/accountnum/Accountnum'
import Search from 'components/search/search'
import Findmain from 'components/find/findmain'
import Play from  'components/play/play'
import Recommend from 'components/recommend/recommend'
import Anchorstation from 'components/anchorstation/anchorstation'
Vue.use(Router)


const findmainchil=[         //发现页主页面下的子路由
  {path:'/',redirect:'recommend'},
  {path: 'recommend',component: Recommend },
  {path: 'anchorstation',component: Anchorstation}
]

const findchil=[                 //发现页下的路由
  {path:'/',component: Findmain,
    children: findmainchil
  },       //发现页面的默认页面
  {path: 'search',component: Search},
  {path: 'play', component: Play}
]




export default new Router({
  routes:[
    {path:'/' ,redirect:'/find'},
    {path: '/find',component: Find,
      children:findchil
    },
    {path: '/friends',component: Friends},
    {path: '/mine',component: Mine},
    {path: '/video',component: Video} ,
    {path: '/accountnum',component: Accountnum},
  ]
})
