import {
  SET_SCHOOL,
  ADD_SCHOOL_INFO,
  SET_LOADING,
  GET_INFO,
  EDIT_INFO,
  DELETE_INFO,
  GET_STUDENTS,
  GET_STAFFS,
  SET_LOGGED_IN,
  ADD_STUDENT,
  SET_STUDENT_LOGGED_IN,
} from "../../helpers/mutationConstants";
import { SERVER_URL } from "../../helpers/constants";
import axios from "axios";
import router from "../../router/router";
export default {
  state: () => ({
    loading: false,
    info: [],
    students: [],
    staffs: [],
    isLoggedIn: false,
    student_is_logged_in: false,
  }),

  //changes
  mutations: {
    //school mutation
    [SET_SCHOOL](state, payload) {
      state.school = payload;
    },

    //set user loggin
    [SET_LOGGED_IN](state, payload) {
      state.isLoggedIn = payload;
    },
    //set student loggin
    [SET_STUDENT_LOGGED_IN](state, payload) {
      state.student_is_logged_in = payload;
    },
    //add school info
    [ADD_SCHOOL_INFO](state, payload) {
      state.school.info = [...state.school.info, payload];
    },
    [EDIT_INFO](state, info) {
      const item = state.info.findIndex((item) => item._id === info._id);
      state.info.splice(item, 1, info);
    },

    //set loading mutation
    [SET_LOADING](state, payload) {
      console.log("mutation");
      state.loading = payload;
    },

    [GET_INFO](state, payload) {
      state.info = payload;
    },
    [DELETE_INFO](state, id) {
      const item = state.info.findIndex((item) => item.id === id);
      state.info.splice(item, 1);
    },
    [GET_STUDENTS](state, payload) {
      state.students = payload;
    },
    [ADD_STUDENT](state, payload) {
      state.students = [...state.students, payload];
    },
    [GET_STAFFS](state, payload) {
      state.staffs = payload;
    },
  },

  //commit changes
  actions: {
    [ADD_SCHOOL_INFO]({ commit }, info) {
      console.log(info);
      commit(SET_LOADING, true);
      const url = SERVER_URL + "/info";
      axios
        .post(url, info, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((res) => {
          commit(ADD_SCHOOL_INFO, res.data.data);
          commit(SET_LOADING, false);
          alert("Request completed!");
          router.push("/dashboard/school/info");
        })
        .catch((err) => {
          console.log(err);
          commit(SET_LOADING, false);
        });
      commit(SET_LOADING, false);
    },

    //info
    [GET_INFO]({ commit }) {
      const url = SERVER_URL + "/info";
      axios
        .get(url, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((res) => {
          commit(GET_INFO, res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    //edit info
    [EDIT_INFO]({ commit }, info) {
      const url = SERVER_URL + "/info/" + info.id;
      axios
        .patch(url, info, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((res) => {
          console.log(res.data);
          commit(EDIT_INFO, res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    [DELETE_INFO]({ commit }, id) {
      const url = SERVER_URL + "/info/" + id;
      axios
        .delete(url, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((res) => {
          console.log(res);
          commit(DELETE_INFO, id);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    [GET_STUDENTS]({ commit }) {
      const url = SERVER_URL + "/students";
      axios
        .get(url, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((res) => {
          commit(GET_STUDENTS, res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    [GET_STAFFS]({ commit }) {
      const url = SERVER_URL + "/staffs";
      axios
        .get(url, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((res) => {
          commit(GET_STAFFS, res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //modify login status
    [SET_LOGGED_IN]({ commit }, payload) {
      commit(SET_LOGGED_IN, payload);
    },

    [SET_STUDENT_LOGGED_IN]({ commit }, payload) {
      commit(SET_LOGGED_IN, payload);
    },
    //set loading action
    [SET_LOADING]({ commit }, payload) {
      commit(SET_LOADING, payload);
    },
    [ADD_STUDENT]({ commit }, payload) {
      commit(ADD_STUDENT, payload);
    },
  },

  //get state data
  getters: {
    getInfo: (state) => state.info,
    students: (state) => state.students,
    totalStudents: (state) => state.students.length,
    staffs: (state) => state.staffs,
    totalStaffs: (state) => state.staffs.length,
    loading: (state) => state.loading,
    isLoggedIn: (state) => state.isLoggedIn,
    studentIsLoggedIn: (state) => state.student_is_logged_in,
  },
};
