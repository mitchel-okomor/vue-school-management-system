import { SET_SCHOOL, ADD_SCHOOL_INFO, SET_LOADING, GET_INFO } from "../../helpers/mutationConstants";
import {SERVER_URL} from '../../helpers/constants'
import axios from 'axios';
import router from '../../router/router'
export default {


  state: () => ({
    school: {
      loading: false,
      info: []
    },
  }),
  mutations: {
    [SET_SCHOOL](state, payload) {
      state.school = payload;
    },
    [ADD_SCHOOL_INFO](state, payload) {
      state.school.info = [...state.school.info, payload];
    },
    [SET_LOADING](state, payload) {
      state.school.loading =  payload;
    },
    [GET_INFO](state, payload){
    state.info = payload;
    }
  },
  actions: {
    [ADD_SCHOOL_INFO]({commit},info) {
      console.log(info);
      commit(SET_LOADING, true);
      const url = SERVER_URL+ "/info"
axios.post(url, info, {
        headers: {
      }}, {
        timeout: 30000,
      }).then((res)=>{
        commit(ADD_SCHOOL_INFO, res.data.data)
        commit(SET_LOADING, false);
        alert('Request completed!');
        router.push('/dashboard/school/info')
      })
      .catch((err)=>{
console.log(err)
commit(SET_LOADING, false);
      })
      commit(SET_LOADING, false);
    },

//info
[GET_INFO]({commit}){
    const url = SERVER_URL+ "/info"
    axios.get(url).then((res)=>{
        commit(GET_INFO, res.data);
          })
          .catch((err)=>{
              console.log(err)
          })
}

  },
  getters: {
    info: (state) => {
      return state.school.info;
    },
  },
};
