import { SET_USER } from "../../helpers/mutationConstants";


export default {
    state: () => ({ user: "" }),
    mutations: {
        [SET_USER](state, payload) {
            state.staff = payload;
          },
    },
    actions: {
        [SET_USER]({commit}, payload){
            commit(SET_USER, payload)
        }
    },
    getters: {
      getUser: (state)=>{
        return state.user;
      }
    },
  };
  