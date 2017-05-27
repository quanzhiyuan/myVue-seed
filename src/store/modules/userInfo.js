/** 首页数据 */
// import axios from 'axios'

const state = {
  userInfo: {
    'imgUrl': '/static/Img/userImg.png',
    'name': '全志渊',
    'department': '用户体验部'
  }
}
const actions = {
  getUserInfo ({ commit }) {
  }
}
const mutations = {
  setUserInfo (state, payload) {
    state.userInfo = payload
  }
}
const getters = {
  userInfo: state => {
    return state.userInfo
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
