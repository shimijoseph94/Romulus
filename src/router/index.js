import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Test from '@/components/Test'
import rr from '@/components/rr'
import Inpage from '@/components/Inpage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: Home,
      component: Home
    },
    {
      path: '/Test',
      name: Test,
      component:Test
    },
    {
      path: '/Inpage',
      name: Inpage,
      component:Inpage
    },
    {
      path: '/rr',
      name: rr,
      component:rr
    }
  ]
})
