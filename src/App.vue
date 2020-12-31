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

export default {
  name: 'App',
  components: {
    Footer,
   Navigation
  }
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

</style>
