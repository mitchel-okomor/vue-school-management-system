<template>
  <div class="school ml-5">
     <div class=""><ul class="nav nav-tabs ">
  <li class="nav-item">
  <router-link class="nav-link active" :to="{ path: '/dashboard/school/info' }">
 Info </router-link>
  </li>
   <li class="nav-item">
    <router-link class="nav-link" :to="{path: '/dashboard/school/employ'}">Employ Staff</router-link> 
  </li>
   <li class="nav-item">
    <router-link class="nav-link" :to="{path: '/dashboard/school/register'}">Register Student</router-link> 
  </li>
<li class="nav-item">
  
  <router-link class="nav-link " :to="{ path: '/dashboard/school/students' }">
 Student List </router-link>
  </li>
 <li class="nav-item">
  <router-link class="nav-link " :to="{ path: '/dashboard/school/staffs' }">
 Staff List </router-link>
  </li>
   <li class="nav-item">
  <router-link class="nav-link " :to="{ path: '/dashboard/school/classes' }">
Classess </router-link>
  </li>
   <li class="nav-item">
  <router-link class="nav-link " :to="{ path: '/dashboard/school/subjects' }">
 Subjects </router-link>
  </li>
  
</ul></div>

        <router-view></router-view>
  </div>
</template>

<script>
export default {
name: "school"
}
</script>

<style scoped>
.school{
    min-height: 100vh;
    margin-top: 5rem;
}
a{
  color: black;
}

@media screen and (max-width: 860px) {
  .school{
    margin: 0.1rem !important;
  }
}
</style>