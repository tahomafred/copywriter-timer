import Vue from 'vue'
import Router from 'vue-router'
import mainTimer from '@/components/mainTimer'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainTimer',
      component: mainTimer
    }
  ]
})
