import {
  ADD_CLASS,
  GET_CLASSES,
  EDIT_CLASS,
  DELETE_CLASS,
  SET_CLASS,
} from "../../helpers/mutationConstants";
import { SERVER_URL } from "../../helpers/constants";
import axios from "axios";
import router from "../../router/router";
export default {
  state: () => ({
    classes: [],
  }),

  //changes
  mutations: {
    [SET_CLASS](state, payload) {
      state.classes = payload;
    },
    [ADD_CLASS](state, payload) {
      state.classes = [...state.classes, payload];
    },
    [EDIT_CLASS](state, subject_class) {
      const item = state.classes.findIndex(
        (item) => item._id === subject_class._id
      );
      state.classes.splice(item, 1, subject_class);
    },
    [GET_CLASSES](state, payload) {
      state.classes = payload;
    },
    [DELETE_CLASS](state, id) {
      const item = state.classes.findIndex((item) => item.id === id);
      state.classes.splice(item, 1);
    },
  },

  //commit changes
  actions: {
    [ADD_CLASS]({ commit }, subject_class) {
      console.log(subject_class);
      const url = SERVER_URL + "/class";
      axios
        .post(url, subject_class, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((res) => {
          commit(ADD_CLASS, res.data.data);
          alert("Request completed!");
          router.push("/dashboard/school/classes");
        })
        .catch((err) => {
          console.log(err);
        });
    },

    //classes
    [GET_CLASSES]({ commit }) {
      const url = SERVER_URL + "/classes";
      axios
        .get(url, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((res) => {
          commit(GET_CLASSES, res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    //edit class
    [EDIT_CLASS]({ commit }, subject_class) {
      const url = SERVER_URL + "/class/" + subject_class.id;
      axios
        .patch(url, subject_class, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((res) => {
          console.log(res.data);
          commit(EDIT_CLASS, res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    //delete class
    [DELETE_CLASS]({ commit }, id) {
      const url = SERVER_URL + "/class/" + id;
      axios
        .delete(url, {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        })
        .then((res) => {
          console.log(res);
          commit(DELETE_CLASS, id);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },

  //get state data
  getters: {
    getClasses: (state) => state.classes,
    totalClasses: (state) => state.classes.length,
  },
};
