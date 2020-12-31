<template>
  <main class="admit d-flex justify-content-center">
        <form class="" action="#"  @submit.prevent="registerStudent(firstname, lastname, address, state_of_origin, state_of_residence, phone, email, date_of_birth, subject_class, passport)">
   <div class="form-row">
    <div class="form-group col-md-6">
      <label for="firstname">First Name:</label>
      <input type="text" name="firstname" class="form-control" id="firstname"  placeholder="First Name" v-model="firstname">
    </div>
    <div class="form-group col-md-6">
      <label for="lastname">Last Name:</label>
      <input type="text" class="form-control" id="lastname" placeholder="Last Name" v-model="lastname">
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email:</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email" v-model="email">
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Phone Number:</label>
      <input type="number" maxlength="11" class="form-control" id="inputPassword4" placeholder="08047585066" v-model="phone">
    </div>
  </div>
    <div class="form-row">
  <div class="form-group col-md-6">
    <label for="inputAddress">D.O.B:</label>
    <input type="date" class="form-control" id="inputAddress" placeholder="12-12-1990" v-model="date_of_birth">
  </div>
   <div class="form-group col-md-6">
    <label for="inputAddress">Subject Class:</label>
 <select id="inputState" class="form-control" v-model="subject_class">
        <option selected>Choose...</option>
        <option>JSS1</option>
        <option>JSS2</option>
        <option>JSS3</option>
        <option>SS1</option>
        <option>SS2</option>
        <option>SS3</option>
      </select>   </div>
    </div>
  <div class="form-row">
  <div class="form-group col-md-6">
     <label for="inputCity">State of residence</label>
 <select id="inputState" class="form-control" v-model="state_of_residence">
        <option selected>Choose...</option>
        <option>Delta</option>
        <option>Imo</option>
        <option>Lagos</option>
      </select>  </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
       <label for="inputAddress2">Address:</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" v-model="address">
    </div>
    <div class="form-group col-md-6">
      <label for="inputState">State of Origin:</label>
      <select id="inputState" class="form-control" v-model="state_of_origin">
        <option selected>Choose...</option>
         <option>Delta</option>
        <option>Imo</option>
        <option>Lagos</option>
      </select>
    </div>
  </div>
 <div class="form-row">
  <div class="form-group col-md-6">
     <label for="inputCity">passport</label>
<input type="file" ref="file" placeholder="passport" v-on:change="handleFileUpload()"/>  </div>
  </div>
  <button type="submit" class="btn btn-primary">Register</button>
</form>
  </main>
</template>

<script>
import axios from 'axios';
import {SERVER_URL} from '../helpers/constants';

export default {
name: "admit",
props: "student",
data() {
return {
  firstname:"",
 lastname:"",
address:"", 
state_of_residence: "",
state_of_origin: "",
phone:"", 
email:"", 
date_of_birth:"", 
subject_class:"",
passport:""
}
},
methods: {

 handleFileUpload(){
    this.passport = this.$refs.file.files[0];
  },
  registerStudent(firstname, lastname, address, state_of_residence, state_of_origin , phone, email, date_of_birth, subject_class, passport){

    console.log("passport: "+passport);
//collect all inputs with FormData (just in case file will be upploaded)
const formData = new FormData();
formData.append("firstname",firstname);
formData.append("lastname", lastname);
formData.append("address", address);
formData.append("state_of_residence", state_of_residence);
formData.append("state_of_origin", state_of_origin);
formData.append("phone", phone);
formData.append("email", email);
formData.append("date_of_birth", date_of_birth);
formData.append("subject_class", subject_class);
formData.append("image", passport);

console.log(formData);
const url = SERVER_URL+ "/student"
axios.post(url, formData, {
        headers: {

      }}, {
        timeout: 30000,
      })
.then((res)=>{
  console.log(res);
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
width: 50%;
}
label{
margin-top:0.5rem ;
margin-bottom: 0.1rem;
}
</style>