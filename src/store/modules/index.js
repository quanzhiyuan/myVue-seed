/** 首页数据 */
import axios from 'axios'

const state = {
  initAppUrl: 'http://uetest.kingdee.com:3000/kux/index/top',
  header: {},
  banners: {}
}
const actions = {
  initApp ({ commit }) {
    axios.get(state.initAppUrl, {})
      .then(response => {
        commit('initUrls', response.data.data.banner)
        commit('initHeader', response.data.data.categorys)
      })
      .catch(error => {
        console.log(error)
      })
  }
}
const mutations = {
  initUrls (state, payload) {
    state.banners = payload
  },
  initHeader (state, payload) {
    state.header = payload
  }

}
const getters = {
  banners: state => {
    return state.banners
  },
  header: state => {
    return state.header
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
