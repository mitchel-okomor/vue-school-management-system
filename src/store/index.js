import Vue from 'vue'
import Vuex from 'vuex'
import student from './modules/student';
import staff from './modules/staff';
import admin from './modules/admin';

Vue.use(Vuex)


const store = new Vuex.Store({
    modules: {
      student,
      staff,
      admin,
    }
  })

  export default store;