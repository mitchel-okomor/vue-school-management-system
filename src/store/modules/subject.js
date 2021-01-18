import { ADD_SUBJECT, GET_SUBJECTS, EDIT_SUBJECT, DELETE_SUBJECT, SET_SUBJECTS} from "../../helpers/mutationConstants";
import {SERVER_URL} from '../../helpers/constants'
import axios from 'axios';
import router from '../../router/router'
export default {


  state: () => ({
      subjects: [],
     
  }),

  //changes
  mutations: {
    [SET_SUBJECTS](state, payload) {
      state.subjects = payload;
    },
    [ADD_SUBJECT](state, payload) {
      state.subjects = [...state.subjects, payload];
    },
    [EDIT_SUBJECT](state, subject) {
      const item = state.subjects.findIndex(item => item._id === subject._id);
      state.subjects.splice(item, 1, subject);
    },
    [GET_SUBJECTS](state, payload){
    state.subjects = payload;
    },
    [DELETE_SUBJECT](state, id){
  const item = state.subjects.findIndex(item => item.id === id);
  state.subjects.splice(item, 1);
    },
  },

  //commit changes
  actions: {
    [ADD_SUBJECT]({commit}, subject) {
      console.log(subject);
      const url = SERVER_URL+ "/course"
axios.post(url, subject, {
        headers: {
          "Authorization": localStorage.getItem('token')
      }}, ).then((res)=>{
        commit(ADD_SUBJECT, res.data.data)
        alert('Request completed!');
        router.push('/dashboard/school/subjects')
      })
      .catch((err)=>{
console.log(err)
      })
    },

//subject
[GET_SUBJECTS]({commit}){
    const url = SERVER_URL+ "/courses"
    axios.get(url,
      {
        headers: {
          "Authorization": localStorage.getItem('token')
      }},
      ).then((res)=>{
        commit(GET_SUBJECTS, res.data);
          })
          .catch((err)=>{
              console.log(err)
          })
},


//edit subject
[EDIT_SUBJECT]({commit}, subject){
 const url = SERVER_URL+ "/course/" +subject.id;
 axios.patch(url, subject,   {
  headers: {
    "Authorization": localStorage.getItem('token')
}},).then((res)=>{
   console.log(res.data)
  commit(EDIT_SUBJECT, res.data);
    })
    .catch((err)=>{
        console.log(err)
    })

},

//delete subject
[DELETE_SUBJECT]({commit}, id){
  const url = SERVER_URL+ "/course/" +id;
  axios.delete(url,
    {
      headers: {
        "Authorization": localStorage.getItem('token')
    }},).then((res)=>{
    console.log(res)
   commit(DELETE_SUBJECT, id);
     })
     .catch((err)=>{
         console.log(err)
     })
},
  },


//get state data
  getters: {
    getSubjects: state => state.subjects,
    totalSubjectss: state => state.subjects.length,
  },
};
