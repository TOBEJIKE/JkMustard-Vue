/**
 * Created by byte_developer on 2017/10/20.
 */
import * as types from './mutation_types'
export default {
  // 未定制增加
  add_nosubscribed: ({ commit }, index) => {
    commit(types.ADD_NOSUBSCRIBED, index)
  },
  // 未定制减少
  delete_nosubscribed: ({ commit }, index) => {
    commit(types.DELETE_NOSUBSCRIBED, index)
  },
  // 定制增加
  add_subscribed: ({ commit }, index) => {
    commit(types.ADD_SUBSCRIBED, index)
  },
  // 定制减少
  delete_subscribed: ({ commit }, index) => {
    commit(types.DELETE_SUBSCRIBED, index)
  },
  // 更新页面和数据
  update_all: ({ commit }, obj) => {
    commit(types.UPDATE_ALL, obj)
  }
}