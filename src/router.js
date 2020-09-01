import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  // base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'Home',
      redirect: '/Home/css3',
      component: Home,
      children: [{
          path: '/Home/css3',
          name: 'css3',
          redirect: '/Home/css3/Title',
          component: () => import('./views/Myitem/css3.vue'),
          children: [{
              path: '/Home/css3/Title',
              name: 'Title',
              component: () => import('./views/Myitem/CSS3-Item/Title.vue')
            },
            {
              path: '/Home/css3/Other',
              name: 'Other',
              component: () => import('./views/Myitem/CSS3-Item/Other.vue')
            }
          ]
        },
        {
          path: '/Laya-h5game',
          name: 'Laya-h5game',
          component: () => import('./views/Myitem/Laya-h5game.vue')
        },
        {
          path: '/Wx-Demo',
          name: 'Wx-Demo',
          component: () => import('./views/Myitem/Wx-Demo.vue')
        },
        {
          path: '/Radio',
          name: 'Radio',
          component: () => import('./views/Media/Radio.vue')
        },
        {
          path: '/Video',
          name: 'Video',
          component: () => import('./views/Media/Video.vue')
        },
        {
          path: '/Experence',
          name: 'Experence',
          component: () => import('./views/Note/Experence.vue')
        },
        {
          path: '/Summary',
          name: 'Summary',
          component: () => import('./views/Note/Summary.vue')
        }
      ]
    },
    {
      path: '/Email',
      name: 'Email',
      component: () => import( /* webpackChunkName: "about" */ './views/Email.vue')
    },
    {
      path: '/Warn',
      name: 'Warn',
      component: () => import( /* webpackChunkName: "about" */ './views/Warn.vue')
    },
    {
      path: '/OnlineChat',
      name: 'OnlineChat',
      component: () => import( /* webpackChunkName: "about" */ './views/OnlineChat.vue')
    },
    {
      path: '*',
      name: 'Home'
    }
  ]
})
