import Vue from 'vue'
import Vuex from 'vuex'
// import actions from 'actions'
// import mutations from 'mutations'
import userInfo from './modules/userInfo'
import index from './modules/index'
import articlie from './modules/article'
// const app= {
//   urls: {
//     initAppUrl: ''
//   }
// }
Vue.use(Vuex)

export default new Vuex.Store({
  modules: { userInfo, index, articlie }
})
