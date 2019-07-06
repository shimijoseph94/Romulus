import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Test from '@/components/Test'
import IndianSnake from '@/components/IndianSnake'
import Inpage from '@/components/Inpage'
import CrocodileBank from '@/components/CrocodileBank'
import Snakepark from '@/components/Snakepark'



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
      path: '/CrocodileBank',
      name: CrocodileBank,
      component:CrocodileBank
    },
    {
      path: '/Snakepark',
      name: Snakepark,
      component:Snakepark
    },
    {
      path: '/IndianSnake',
      name: IndianSnake,
      component:IndianSnake
    },
    

  ]
})
