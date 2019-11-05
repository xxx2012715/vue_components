import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const Home = () => import('@/pages/Home')






const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})

export default router