import {
  SET_STUDENT,
  GET_STUDENT,
  RESET_STUDENT,
} from "../../helpers/mutationConstants";
import { SERVER_URL } from "../../helpers/constants";
import axios from "axios";

export default {
  state: () => ({
    student: {},
  }),
  mutations: {
    [SET_STUDENT](state, payload) {
      state.student = payload;
    },
    [RESET_STUDENT](state) {
      state.student = {};
    },
  },
  actions: {
    //save student to state
    [SET_STUDENT]({ commit }, payload) {
      commit(SET_STUDENT, payload);
    },

    //Loggin Student
    [RESET_STUDENT]({ commit }) {
      commit(RESET_STUDENT);
    },

    //get from api
    [GET_STUDENT]({ commit }) {
      const url = SERVER_URL + "/student/" + localStorage.getItem("student_id");
      axios
        .get(url, {
          headers: {
            Authorization: localStorage.getItem("student_token"),
          },
        })
        .then((res) => {
          commit(SET_STUDENT, res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  getters: {
    getStudent: (state) => state.student,
    getFeesPaid: (state) => (state.fees_paid ? state.fees_paid : 0),
  },
};
