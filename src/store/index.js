/**
 * Created by byte_developer on 2017/10/20.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex) // this.$store对象

const state = {
// 路由结构
  routes: [{
    name: '推荐',
    url: '/content/recommend'
  }, {
    name: '旅游',
    url: '/content/tourism'
  }, {
    name: '汽车',
    url: '/content/car'
  }, {
    name: '健康',
    url: '/content/health'
  }, {
    name: '探索',
    url: '/content/find'
  }, {
    name: '娱乐',
    url: '/content/recreation'
  }, {
    name: '体育',
    url: '/content/sports'
  }, {
    name: '社会',
    url: '/content/society'
  }, {
    name: '情感',
    url: '/content/emotion'
  }, {
    name: '谣言',
    url: '/content/rumor'
  }],
  // 订阅
  subscribed: [{
    name: '旅游',
    url: '/content/tourism'
  }, {
    name: '汽车',
    url: '/content/car'
  }, {
    name: '健康',
    url: '/content/health'
  }, {
    name: '探索',
    url: '/content/find'
  }, {
    name: '娱乐',
    url: '/content/recreation'
  }, {
    name: '体育',
    url: '/content/sports'
  }, {
    name: '社会',
    url: '/content/society'
  }, {
    name: '情感',
    url: '/content/emotion'
  }, {
    name: '谣言',
    url: '/content/rumor'
  }],
  // 还未订阅的
  noSubscribed: []
}

export default new Vuex.Store({
  state, // 状态 存放
  mutations, // 修改、改变、切换、下一个改变的定义
  getters,
  actions // 动作，组件不能直接改变state，改变谁？
})