import Vue from 'vue'
import Router from 'vue-router'

import Fujin from '../pages/fujin.vue'
import Tongcheng from '../pages/tongcheng.vue'
import Guanzhu from '../pages/guanzhu.vue'
import My from '../pages/my.vue'
import Shop from '../pages/shop.vue'
import Shopping from '../pages/shopping.vue'



import Tab from '@/components/common/tabbar'
import Chen from '@/components/common/chengshi.vue'
import Ding from '@/components/common/dingwei.vue'



import One from '@/components/fujin/classone'
import Two from '@/components/fujin/classtwo'
import Three from '@/components/fujin/classthree'
import Four from '@/components/fujin/classfour'
import Five from '@/components/fujin/classfive'
import Six from '@/components/fujin/classsix'


import Tone from '@/components/tongcheng/classone'
import Ttwo from '@/components/tongcheng/classtwo'


import Gone from '@/components/guanzhu/classone'
import Gtwo from '@/components/guanzhu/classtwo'
import Xq from '@/components/guanzhu/xiangqing'
import Fw from '@/components/guanzhu/xiangqingfuwu'

import Pj from '@/components/guanzhu/xiangqingpingjia'
import Allpingjia from '@/components/guanzhu/allpingjia'
// import Re from '@/components/guanzhu/remai'
import Reone from '@/components/guanzhu/remaione'
import Lone from '@/components/guanzhu/remai/lone'
import Ltwo from '@/components/guanzhu/remai/ltwo'
import Lthree from '@/components/guanzhu/remai/lthree'
import Lfour from '@/components/guanzhu/remai/lfour'
import Lfive from '@/components/guanzhu/remai/lfive'

import Retwo from '@/components/guanzhu/remaitwo'
import Rone from '@/components/guanzhu/remai/rone'
import Rtwo from '@/components/guanzhu/remai/rtwo'
import Rthree from '@/components/guanzhu/remai/rthree'
import Rfour from '@/components/guanzhu/remai/rfour'
import Rfive from '@/components/guanzhu/remai/rfive'


import Quan from '@/components/my/shopquanbu'
import He from '@/components/my/shophexiao'
import Ping from '@/components/my/shoppingjia'
import Wan from '@/components/my/shopwancheng'
import Tui from '@/components/my/shoptuikuan'


import { Tabbar, TabbarItem } from 'vant';
Vue.use(Tabbar).use(TabbarItem);
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/tab',
      name: 'Tab',
      component: Tab
    },
    {
      path: '/chengshi',
      name: 'Chen',
      component: Chen
    },
    {
      path: '/dingwei',
      name: 'Ding',
      component: Ding
    },
    {
      path: '/fujin',
      name: 'Fujin',
      component: Fujin,
      children:[
        {path:"one",name:"One",component:One},
        {path:"two",name:"Two",component:Two},
        {path:"three",name:"Three",component:Three},
        {path:"four",name:"Four",component:Four},
        {path:"five",name:"Five",component:Five},
        {path:"six",name:"Six",component:Six}
      ]
    },


    {
      path: '/tongcheng',
      name: 'Tongcheng',
      component: Tongcheng,
      children:[
        {path:"tone",name:"Tone",component:Tone},
        {path:"ttwo",name:"Ttwo",component:Ttwo}
      ]
    },


    {
      path: '/guanzhu',
      name: 'Guanzhu',
      component: Guanzhu,
      children:[
        {path:"gone",name:"Gone",component:Gone},
        {path:"gtwo",name:"Gtwo",component:Gtwo}
      ]
    },
    {
      path: '/xiangqing',
      name: 'Xq',
      redirect:'/xiangqing/fuwu',
      component: Xq,
      children:[
        {path:"fuwu",name:"Fw",redirect:'/fuwu/reone',component:Fw,
          children:[
            {path:"/fuwu/reone",name:"Reone",redirect:'/reone/lone',component:Reone,
              children:[
                {path:"/reone/lone",name:"Lone",component:Lone},
                {path:"/reone/ltwo",name:"Ltwo",component:Ltwo},
                {path:"/reone/rthree",name:"Lthree",component:Lthree},
                {path:"/reone/rfour",name:"Lfour",component:Lfour},
                {path:"/reone/rfive",name:"Lfive",component:Lfive},
              ]
            },
            {path:"/fuwu/retwo",name:"Retwo",redirect:'/retwo/rone',component:Retwo,
              children:[
                {path:"/retwo/rone",name:"Rone",component:Rone},
                {path:"/retwo/rtwo",name:"Rtwo",component:Rtwo},
                {path:"/retwo/rthree",name:"Rthree",component:Rthree},
                {path:"/retwo/rfour",name:"Rfour",component:Rfour},
                {path:"/retwo/rfive",name:"Rfive",component:Rfive},
              ]
            },
          ]
        },
        
        // {path:"reone",name:"Reone",redirect:'/reone/lone',component:Reone,
        //   children:[
        //     {path:"/reone/lone",name:"Lone",component:Lone},
        //     {path:"/reone/ltwo",name:"Ltwo",component:Ltwo},
        //     {path:"/reone/rthree",name:"Lthree",component:Lthree},
        //     {path:"/reone/rfour",name:"Lfour",component:Lfour},
        //     {path:"/reone/rfive",name:"Lfive",component:Lfive},
        //   ]
        // },

        // {path:"retwo",name:"Retwo",redirect:'/retwo/rone',component:Retwo,
        //   children:[
        //     {path:"/retwo/rone",name:"Rone",component:Rone},
        //     {path:"/retwo/rtwo",name:"Rtwo",component:Rtwo},
        //     {path:"/retwo/rthree",name:"Rthree",component:Rthree},
        //     {path:"/retwo/rfour",name:"Rfour",component:Rfour},
        //     {path:"/retwo/rfive",name:"Rfive",component:Rfive},
        //   ]
        // },
        {path:"pingjia",name:"Pj",component:Pj},
      ]
    },
    {
      path: '/allpingjia',
      name: 'Allpingjia',
      component: Allpingjia,
    },


    {
      path: '/my',
      name: 'My',
      component: My,
    },
    {
      path: '/shop',
      name: 'Shop',
      redirect:'/shop/quan',
      component: Shop,
      children:[
        {path:"quan",name:"Quan",component:Quan},
        {path:"he",name:"He",component:He},
        {path:"ping",name:"Ping",component:Ping},
        {path:"wan",name:"Wan",component:Wan},
        {path:"tui",name:"Tui",component:Tui}
      ]
    },
    {
      path: '/shopping',
      name: 'Shopping',
      component: Shopping,
    },
    {
      path:'/*',
      redirect:'/fujin'
    }
  ]
})
