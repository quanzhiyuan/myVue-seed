/** 文章数据 */
import axios from 'axios'

const state = {
  // url: 'http://uetest.kingdee.com:3000/all?type=588470ad08ec05162c2e18c1&p=1',
  getAllLisUrl: '/static/Data/allList.json',
  articlelistCards: {
  }
}
const actions = {
  getArticleListCards ({ commit }) {
    axios(state.getAllLisUrl, {
      type: 'post',
      async: false,
      withCredentials: true,
      headers: {'Access-Control-Allow-Origin': '*'}
    })
      .then(response => {
        commit('setArticleListCards', response.data.data.posts)
      })
      .catch(error => {
        console.log(error)
      })
  }
}
const mutations = {
  setArticleListCards (state, payload) {
    state.articlelistCards = payload
  }
}
const getters = {
  articlelistCards: state => {
    return state.articlelistCards
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
