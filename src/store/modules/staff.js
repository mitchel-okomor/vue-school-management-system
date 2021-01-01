import { SET_STAFF, GET_STAFF, SET_LOGGED_IN } from "../../helpers/mutationConstants";
import { SERVER_URL } from "../../helpers/constants";
import axios from "axios";

export default {
  state: () => ({
    staff: "",
    isLoggedIn: false, 
  }),
  mutations: {
   [SET_STAFF](state, payload) {
      state.staff = payload;
    },
  [SET_LOGGED_IN](state, payload){
state.isLoggedIn = payload
  }
  },
  actions: {
    //save staff to state
   [SET_STAFF]({ commit }, payload) {
      commit(SET_STAFF, payload);
    },

    //get from api
    [GET_STAFF]({ commit }) {
      const url = SERVER_URL + "/staff/" + localStorage.getItem("userId");
      axios
        .get(url)
        .then((res) => {
          commit(SET_STAFF, res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },

//modify login status
[SET_LOGGED_IN]({commit}, payload){
commit(SET_LOGGED_IN, payload);
}    
  },
  getters: {
    getStaff: state => state.staff,
    staffIsLoggedIn: state => state.isLoggedIn,
  },
};
