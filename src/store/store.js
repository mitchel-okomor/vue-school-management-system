import Vue from 'vue'
import Vuex from 'vuex'
import {SET_USER} from '../helpers/mutationConstants';

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user :'',
    loading: false,
  },
  mutations: {
    [SET_USER ](state, user) {
      state = {...state, user
    }}
  }
})

export default store;