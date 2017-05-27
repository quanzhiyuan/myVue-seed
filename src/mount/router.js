import Vue from 'vue'
import Router from 'vue-router'
import index from '../components/index'
import articlelist from '../components/articlelist'
import article from '../components/article'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [

    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/articlelist',
      name: 'articlelist',
      component: articlelist
    },
    {
      path: '/article',
      name: 'article',
      component: article
    },
    {
      path: '/',
      redirect: index,
      afterEach: route => {
        console.log(route)
        debugger
      }
    }

  ],
  beforeEach: (to, from, next) => {
    console.log(next)
    debugger
  }
})
