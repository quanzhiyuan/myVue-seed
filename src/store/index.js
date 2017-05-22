import Vue from 'vue'
import Vuex from 'vuex'
import actions from 'actions'
import getters from 'getters'
import mutations from 'mutations'

import User from './modules/userInfo'
Vue.use(Vuex)

export default new Vuex.Store({
  state:{},
  actions: { actions },
  getters: { getters },
  mutations: {mutations},
  modules: {
    User
  }
})
