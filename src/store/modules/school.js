import { SET_SCHOOL, ADD_SCHOOL_INFO, SET_LOADING, GET_INFO, EDIT_INFO, DELETE_INFO, GET_STUDENTS } from "../../helpers/mutationConstants";
import {SERVER_URL} from '../../helpers/constants'
import axios from 'axios';
import router from '../../router/router'
export default {


  state: () => ({
      loading: false,
      info: [],
      students: [],
  }),

  //changes
  mutations: {
    [SET_SCHOOL](state, payload) {
      state.school = payload;
    },
    [ADD_SCHOOL_INFO](state, payload) {
      state.school.info = [...state.school.info, payload];
    },
    [EDIT_INFO](state, info) {
      const item = state.info.findIndex(item => item._id === info._id);
      state.info.splice(item, 1, info);
    },
    [SET_LOADING](state, payload) {
      state.school.loading =  payload;
    },
    [GET_INFO](state, payload){
    state.info = payload;
    },
    [DELETE_INFO](state, id){
  const item = state.info.findIndex(item => item.id === id);
  state.info.splice(item, 1);
    },
    [GET_STUDENTS](state, payload){
      state.students = payload
    }
  },

  //commit changes
  actions: {
    [ADD_SCHOOL_INFO]({commit},info) {
      console.log(info);
      commit(SET_LOADING, true);
      const url = SERVER_URL+ "/info"
axios.post(url, info, {
        headers: {
          "Authorization": localStorage.getItem('token')
      }}, ).then((res)=>{
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
    axios.get(url,
      {
        headers: {
          "Authorization": localStorage.getItem('token')
      }},
      ).then((res)=>{
        commit(GET_INFO, res.data);
          })
          .catch((err)=>{
              console.log(err)
          })
},


//edit info
[EDIT_INFO]({commit}, info){
 const url = SERVER_URL+ "/info/" +info.id;
 axios.patch(url, info,   {
  headers: {
    "Authorization": localStorage.getItem('token')
}},).then((res)=>{
   console.log(res.data)
  commit(EDIT_INFO, res.data);
    })
    .catch((err)=>{
        console.log(err)
    })

},

[DELETE_INFO]({commit}, id){
  const url = SERVER_URL+ "/info/" +id;
  axios.delete(url,
    {
      headers: {
        "Authorization": localStorage.getItem('token')
    }},).then((res)=>{
    console.log(res)
   commit(DELETE_INFO, id);
     })
     .catch((err)=>{
         console.log(err)
     })
},

[GET_STUDENTS]({commit}){
  const url = SERVER_URL+ "/students";
  axios.get(url,
    {
      headers: {
        "Authorization": localStorage.getItem('token')
    }},
    ).then((res)=>{
      commit(GET_STUDENTS, res.data);
        })
        .catch((err)=>{
            console.log(err)
        })
},

  },


//get state data
  getters: {
    getInfo: state => state.info,
    students: state => state.students
  },
};
