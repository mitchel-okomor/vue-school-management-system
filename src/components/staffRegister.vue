<template>
  <main class="admit d-flex justify-content-center">
        <form class="" action="#"  @submit.prevent="registerStudent(firstname, lastname, address, state_of_origin, phone, email, lastname, date_of_birth, subjects, passport, category, salary)">
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
       <label for="inputAddress2">Address:</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" v-model="address">
    </div>
    <div class="form-group col-md-6">
      <label for="inputState">State of Origin:</label>
      <select class="form-control" v-model="state_of_origin">
        <option selected>Choose...</option>
         <option>Delta</option>
        <option>Imo</option>
        <option>Lagos</option>
      </select>
    </div>
  </div>
    <div class="form-row">
  <div class="form-group col-md-6">
    <label >D.O.B:</label>
    <input type="date" class="form-control"  placeholder="12-12-1990" v-model="date_of_birth">
  </div>
    </div>
    <div class="form-group col-md-6">
      <label for="inputState">Category of staff:</label>
      <select class="form-control" v-model="category">
        <option selected>Choose...</option>
         <option>Academic</option>
        <option>Non-academic</option>
      </select>
    </div>
   <div class="form-group col-md-6" v-if="category === 'Academic'">
       <div>Subjects</div>
    <div class="form-check">
 <div class="mb-1"><label class="form-check-label" for="exampleCheck1">English</label> 
    <input type="checkbox" class="form-check-input" value="english" id="exampleCheck1" v-model="subjects">
    </div>   
<div><label class="form-check-label" for="exampleCheck1">Mathematics</label> 
    <input type="checkbox" class="form-check-input" value="mathematics" id="exampleCheck1" v-model="subjects">
  </div>    
</div>
    </div>
  <div class="form-row">

  </div>
   <div class="form-row">
    <div class="form-group col-md-6">
       <label for="inputAddress2">Salary:</label>
    <input type="number" class="form-control" placeholder="10000" v-model="salary">
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
name: "staffRegister",
props: "staff",
data() {
return {
  firstname:"",
 lastname:"",
address:"", 
state_of_residence: "",
state_of_origin: "",
phone:"", 
email:"", 
password:"",
date_of_birth:"", 
subjects:[],
passport:"",
category: "",
salary: ""
}
},
methods: {

 handleFileUpload(){
    this.passport = this.$refs.file.files[0];
  },
  registerStudent(firstname, lastname, address, state_of_origin , phone, email, password, date_of_birth, subjects, passport, category, salary){

    console.log("subjects: "+firstname, lastname, address, state_of_origin, phone, email, password, date_of_birth, subjects, passport, category, salary);

//collect all inputs with FormData (just in case file will be upploaded)
const formData = new FormData();
formData.append("firstname",firstname);
formData.append("lastname", lastname);
formData.append("address", address);
formData.append("state_of_origin", state_of_origin);
formData.append("phone", phone);
formData.append("email", email);
formData.append("salary", salary);
formData.append("password", password)
formData.append("date_of_birth", date_of_birth);
formData.append("subject", subjects);
formData.append("image", passport);
formData.append("category", category);

const url = SERVER_URL+ "/staff"

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
.form-check-label{
width: fit-content;
}

.form-check input{
    width: fit-content;
}
</style>