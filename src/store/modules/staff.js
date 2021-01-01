import {SET_STAFF} from '../../helpers/mutationConstants'

export default {

    state: () => ({ staff:""
     }),
    mutations: { 
      [SET_STAFF](state, payload){
        state.staff =  payload
      }
     },
    actions: {
      setStaff({commit}){
        commit(SET_STAFF);
      }
      },
    getters: {  }
  }
