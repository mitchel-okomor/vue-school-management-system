<template>
  <main class="admit d-flex justify-content-center">
        <form class="" action="#"  @submit.prevent="loginstaff(email, password)">
        <div class="mb-3"><h3>Staff Login</h3></div>
  <div class="form-row">
    <div class="form-group col-md-12">
      <label for="inputEmail4">Email:</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email" v-model="email">
    </div>
  </div>
    <div class="form-row">
     <div class="form-group col-md-12">
       <label>Password</label>
    <input type="password" class="form-control"  placeholder="Password" v-model="password">
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Login</button>
</form>
  </main>
</template>

<script>
import axios from 'axios';
import {SERVER_URL} from '../helpers/constants';
import {SET_STAFF} from '../helpers/mutationConstants';

export default {
name: "staffLogin",
props: "staff",
data() {
return {
email:"", 
password:"",
}
},
methods: {

  loginstaff( email, password){

//collect all inputs with FormData (just in case file will be upploaded)
const formData = {email, password}

console.log(formData);
const url = SERVER_URL+ "/staff/login"

axios.post(url, formData, {
        headers: {

      }}, {
        timeout: 30000,
      })
.then((res)=>{
  console.log(res.data.info);
  console.log("staff:" +this.$store.state.staff)
  this.$store.dispatch(SET_STAFF, res.data.info)
}
)
.catch((err)=>{
  console.log(err)
})
  },

}
}
</script>

<style scoped>
main{
  min-height: 100vh;
  margin-top: 4rem;
  
}

form{
  background-color: aliceblue;
  padding: 1.5rem;
  margin-top: 3rem;
width: 30%;
}
label{
margin-top:0.5rem ;
margin-bottom: 0.1rem;
}

</style>