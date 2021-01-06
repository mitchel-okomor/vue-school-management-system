<template>
  <div class="students ml-5">
     <div class=""><ul class="nav nav-tabs ">
  <li class="nav-item">
  <router-link class="nav-link active" :to="{ path: '/dashboard/school/info' }">
 Profile </router-link>
  </li>
<li class="nav-item">
  <router-link class="nav-link " :to="{ path: '/dashboard/school/students' }">
 Academics </router-link>
  </li>
 <li class="nav-item">
  <router-link class="nav-link " :to="{ path: '/dashboard/school/staffs' }">
 Fees Info</router-link>
  </li>
    <li class="nav-item">
    <a class="nav-link" href="#">Actions</a>
  </li>
 
</ul></div>

        <router-view></router-view>
  </div>
</template>

<script>
export default {
name: "students"
}
</script>

<style scoped>
.students{
    min-height: 100vh;
    margin-top: 5rem;
}
a{
  color: black;
}
</style>