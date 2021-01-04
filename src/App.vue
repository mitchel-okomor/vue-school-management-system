<template>
  <div id="app">
<Navigation />
          <router-view></router-view>
<Footer />
  </div>
</template>

<script>
import Footer from './components/Footer.vue';
//import Home from './components/Home.vue';
import Navigation from './components/Navigation.vue';
//import Admit from './components/Admit';
import isLoggedIn from './helpers/checkLogin';
import {GET_STAFF, SET_LOGGED_IN, SET_USER} from './helpers/mutationConstants';

export default {
  name: 'App',
  components: {
    Footer,
   Navigation
  },
  data(){
return{

}
  },

created(){
if(this.checkLoggin()){
  console.log("loggedIn")
  this.$store.dispatch(GET_STAFF);
      this.$store.dispatch(SET_LOGGED_IN, true);
        this.$store.dispatch(SET_USER);
}
},


  methods:{
    checkLoggin: ()=>{
      return isLoggedIn();
    }
  },


}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
      background-image:url("./assets/school.jpg");
      background-repeat: no-repeat;
      background-size: cover;
      min-height: 100vh;
}

/* remove arrow from input type number
 Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* remove arrow from input type number
Firefox */
input[type=number] {
  -moz-appearance: textfield;
}


button:focus{
  outline: none;
}
button{
  border: none;
}
ul{
  list-style-type: none;
}

a{
  color: white;
  text-decoration: none;
}
a:visited{
  color: white;
}
a:hover{
  text-decoration: none;
  font-weight: 700;
}

form{
  border: 1px solid green;
  border-radius: 0.5em;
}

@media screen and (max-width: 860px) {
  .card{
    margin: 0.5rem !important;
  }
}
</style>
