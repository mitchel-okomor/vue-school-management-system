<template>
  <nav
    class="navbar navbar-light bg-white justify-content-between fixed-top mb"
  >
    <div class="logo p-3">
        <router-link :to="{ path: '/' }">
          School Management System
        </router-link>
    </div>
    <div class="d-flex">
       <ul class="d-flex" >
        <li class=" nav-item mr-4" ><a href="#"><router-link :to="{path: '/dashboard'}">Staff</router-link> </a></li>
        <li class="nav-item mr-4" ><a href="#"><router-link :to="{path: '/student/dashboard'}">Student</router-link> </a></li>
     
      </ul>
     <div class="mr-4 font-weight-bold">{{staff.firstname}}</div>
    </div> 
  </nav>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "navigation",
  data(){
    return{
      user:""
    }
  },
  computed:{
    ...mapGetters({staff:"getStaff"})
},
}
</script>

<style scoped>
a{
    color: rgb(0, 132, 255);
}
a:visited{
    color: rgb(0, 132, 255);
}
.logo{
  font-weight: 600;
  border: 1px solid green;
border-radius: 3rem;
}
</style>
