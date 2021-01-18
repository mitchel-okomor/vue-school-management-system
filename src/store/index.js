import Vue from 'vue'
import Vuex from 'vuex'
import student from './modules/student';
import staff from './modules/staff';
import admin from './modules/admin';
import user from './modules/user';
import school from './modules/school';
import subject from './modules/subject';

Vue.use(Vuex)


const store = new Vuex.Store({
    modules: { 
      school,
      student,
      staff,
      admin,
      subject,
       user
    }
  })

  export default store;