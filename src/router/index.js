import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'indexLayout',
      component: resolve => require(['@/components/Index'], resolve),
      redirect: '/content/recommend',
      meta: {
        keepAlive: true // 需要被缓存
      },
      children: [{
        // 推荐
        path: '/content/recommend',
        name: 'recommend',
        component: resolve => require(['@/components/Content/Recommend'], resolve),
        meta: {
          keepAlive: true // 需要被缓存
        }
      }, {
        // 旅游
        path: '/content/tourism',
        name: 'tourism',
        component: resolve => require(['@/components/Content/Tourism'], resolve),
        meta: {
          keepAlive: true // 需要被缓存
        }
      }, {
        // 汽车
        path: '/content/car',
        name: 'car',
        component: resolve => require(['@/components/Content/Car'], resolve),
        meta: {
          keepAlive: true // 需要被缓存
        }
      }, {
        // 健康
        path: '/content/health',
        name: 'health',
        component: resolve => require(['@/components/Content/Health'], resolve),
        meta: {
          keepAlive: true // 需要被缓存
        }
      }, {
        // 探索发现
        path: '/content/find',
        name: 'find',
        component: resolve => require(['@/components/Content/Find'], resolve),
        meta: {
          keepAlive: true // 需要被缓存
        }
      }, {
        // 娱乐
        path: '/content/recreation',
        name: 'recreation',
        component: resolve => require(['@/components/Content/Recreation'], resolve),
        meta: {
          keepAlive: true
        }
      }, {
        // 体育
        path: '/content/sports',
        name: 'sports',
        component: resolve => require(['@/components/Content/Sports'], resolve),
        meta: {
          keepAlive: true
        }
      }, {
        // 社会
        path: '/content/society',
        name: 'society',
        component: resolve => require(['@/components/Content/Society'], resolve),
        meta: {
          keepAlive: true
        }
      }, {
        // 情感
        path: '/content/emotion',
        name: 'emotion',
        component: resolve => require(['@/components/Content/Emotion'], resolve),
        meta: {
          keepAlive: true
        }
      }, {
        // 谣言终结者
        path: '/content/rumor',
        name: 'rumor',
        component: resolve => require(['@/components/Content/Rumor'], resolve),
        meta: {
          keepAlive: true
        }
      }, {
        path: '/content/detail',
        name: 'detail',
        component: resolve => require(['@/components/Detail/Detail.vue'], resolve),
        meta: {
          keepAlive: false
        }
      }]
    }
  ]
})
