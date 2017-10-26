/**
 * Created by byte_developer on 2017/10/20.
 */
import * as types from './mutation_types'

export default {
  // 添加未订阅
  [types.ADD_NOSUBSCRIBED] (state, index) {
    console.log(index)
  },

  // 删除未订阅
  [types.DELETE_NOSUBSCRIBED] (state, index) {
    console.log(index)
  },

  // 添加订阅
  [types.ADD_SUBSCRIBED] (state, index) {
    let temp = state.noSubscribed[index]
    state.noSubscribed.splice(index, 1)
    state.subscribed.push(temp)
    state.routes.push(temp)
  },

  // 删除订阅
  [types.DELETE_SUBSCRIBED] (state, index) {
    let oIndex = parseInt(index) + 2
    let temp = state.subscribed[index]
    state.subscribed.splice(index, 1)
    state.routes.splice(oIndex, 1)
    state.noSubscribed.push(temp)
  },
  // 用数据块更新
  [types.UPDATE_ALL] (state, obj) {
    state.subscribed = obj.temp_subscribedArr
    state.routes = [{
      name: '推荐',
      url: '/content/recommend'
    }]
    state.subscribed.map(item => {
      state.routes.push(item)
    })
    window.localStorage.setItem('routesList', JSON.stringify(state.routes))
  }
}
