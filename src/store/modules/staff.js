import { SET_STAFF, GET_STAFF } from "../../helpers/mutationConstants";
import { SERVER_URL } from "../../helpers/constants";
import axios from "axios";

export default {
  state: () => ({
    staff: {},
  }),
  mutations: {
    [SET_STAFF](state, payload) {
      state.staff = payload;
    },
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
        .get(url, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((res) => {
          commit(SET_STAFF, res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  getters: {
    getStaff: (state) => state.staff,
  },
};
