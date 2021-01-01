<template>
  <nav
    class="navbar navbar-light bg-white justify-content-between fixed-top mb"
  >
    <div>
        <router-link :to="{ path: '/' }">
          School Management System
        </router-link>
    </div>
    <div class="d-flex">
       <ul class="d-flex" >
        <li class=" nav-item mr-4" ><a href="#"><router-link :to="{path: '/dashboard'}">Staff</router-link> </a></li>
        <li class="nav-item mr-4" ><a href="#"><router-link :to="{path: '/student/dashboard'}">Student</router-link> </a></li>
     
      </ul>
     <div class="mr-4">{{staff.firstname?staff.firstname: student.firstname?student.firstname: ""}}</div>
    </div> 
  </nav>
</template>

<script>
export default {
  name: "navigation",
  data(){
    return{
      student:this.$store.getters.getStudent,
      staff:this.$store.getters.getStaff
    }
  },

  created(){
    
},
  computed:{
   
  }
};
</script>

<style scoped>
a{
    color: rgb(0, 132, 255);
}
a:visited{
    color: rgb(0, 132, 255);
}
</style>
