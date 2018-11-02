import Vue from 'vue'
import Router from 'vue-router'
import product from '@/components/product'
import service from '@/components/service'
import business from '@/components/business'
import work from '@/components/work'
import loginView from '@/components/loginView'
import aboutus from '@/components/aboutus'
import register from '@/components/register'
import applyDetail from '@/components/applydetail'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'product',
      component: product
    },
    {
      path: '/business',
      name: 'business',
      component: business
    },
    {
      path: '/service',
      name: 'service',
      component: service
    },
    {
      path: '/work',
      name: 'work',
      component: work
    },
    {
      path: '/applyDetail',
      name: 'applyDetail',
      component: applyDetail
    },
    {
      path: '/loginView',
      name: 'loginView',
      component: loginView
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      component: aboutus
    },
    {
      path: '/register',
      name: 'register',
      component: register
    }
  ]
})
