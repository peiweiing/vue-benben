import Vue from 'vue'
import Router from 'vue-router'

import Fujin from '../pages/fujin.vue'
import Tongcheng from '../pages/tongcheng.vue'
import Guanzhu from '../pages/guanzhu.vue'
import My from '../pages/my.vue'
import Login from '../pages/my/login'
import Forget from '../pages/my/forget'
import Register from '../pages/my/register'
import Shop from '../pages/shop.vue'
import Shopping from '../pages/shopping.vue'


import Tab from '@/components/common/tabbar'
import Chen from '@/components/common/chengshi.vue'
import Xq from '@/components/common/xiangqing'
import Fw from '@/components/common/xiangqingfuwu'
import Pj from '@/components/common/xiangqingpingjia'
import Allpingjia from '@/components/common/allpingjia'
import Tijiao from '@/components/common/tijiao'

import Reone from '@/components/common/remaione'
import Lone from '@/components/common/remai/lone'
import Ltwo from '@/components/common/remai/ltwo'
import Lthree from '@/components/common/remai/lthree'
import Lfour from '@/components/common/remai/lfour'
import Lfive from '@/components/common/remai/lfive'

import Retwo from '@/components/common/remaitwo'
import Rone from '@/components/common/remai/rone'
import Rtwo from '@/components/common/remai/rtwo'
import Rthree from '@/components/common/remai/rthree'
import Rfour from '@/components/common/remai/rfour'
import Rfive from '@/components/common/remai/rfive'


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


import Mymoney from '@/components/my/mymoney'
import Myvip from '@/components/my/myvip'
import Myset from '@/components/my/myset'
import Guanyu from '@/components/my/guanyumy'
import Shangjia from '@/components/my/shangjia'
import Myxinxi from '@/components/my/myxinxi'
import Myanquan from '@/components/my/myanquan'

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
                {path:"/reone/lthree",name:"Lthree",component:Lthree},
                {path:"/reone/lfour",name:"Lfour",component:Lfour},
                {path:"/reone/lfive",name:"Lfive",component:Lfive},
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
      path: '/tijiao',
      name: 'Tijiao',
      component: Tijiao,
    },


    {
      path: '/my',
      name: 'My',
      component: My,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },
    {
      path: '/forget',
      name: 'Forget',
      component: Forget,
    },
    {
      path: '/myvip',
      name: 'Myvip',
      component: Myvip,
    },
    {
      path: '/shangjia',
      name: 'Shangjia',
      component: Shangjia,
    },
    {
      path: '/mymoney',
      name: 'Mymoney',
      component: Mymoney,
    },
    {
      path: '/guanyu',
      name: 'Guanyu',
      component: Guanyu,
    },
    {
      path: '/myset',
      name: 'Myset',
      component: Myset,
    },
    {
      path: '/myxinxi',
      name: 'Myxinxi',
      component: Myxinxi,
    },
    {
      path: '/myanquan',
      name: 'Myanquan',
      component: Myanquan,
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
