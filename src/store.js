import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // 首先声明一个状态 state
  state: {
    userName: '莫思',
    userImg: require('./assets/HeaderPng/a3.png'),
    messageCount: {
      'homeMessage': 0,
      'emailMessage': 0,
      'warnMessage': 0,
      'onlineMessage': 0
    },
    isShowPersonInfo: false
  },
  // 更新状态
  mutations: {
    updateHomeMessage(state) {
      state.messageCount.homeMessage++
    },
    updateEmailMessage(state) {
      state.messageCount.emailMessage++
    },
    updateWarnMessage(state) {
      state.messageCount.warnMessage++
    },
    updateOnlineMessage(state) {
      state.messageCount.onlineMessage++
    },
    ShowPersonInfo(state) {
      state.isShowPersonInfo = !state.isShowPersonInfo
    }
  },
  // 然后给 actions 注册事件处理函数，当这个函数被触发时，将状态提交到 mutaions中处理
  actions: {
    updateHomeMessage({
      commit
    }) {
      commit('updateHomeMessage')
    },
    updateEmailMessage({
      commit
    }) {
      commit('updateEmailMessage')
    },
    updateWarnMessage({
      commit
    }) {
      commit('updateWarnMessage')
    },
    updateOnlineMessage({
      commit
    }) {
      commit('updateOnlineMessage')
    },
    updateShowPersonStatus({
      commit
    }) {
      commit('ShowPersonInfo')
    }
  },
  // 获取状态信息
  getters: {

  }
})
