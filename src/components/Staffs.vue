<template>
  <div class="staffs ml-5">
     <div class=""><ul class="nav nav-tabs ">
  <li class="nav-item">
  <router-link class="nav-link active" :to="{ path: '/dashboard/school/info' }">
 Profile </router-link>
  </li>
<li class="nav-item">
  <router-link class="nav-link " :to="{ path: '/dashboard/school/students' }">
 Class </router-link>
  </li>
 <li class="nav-item">
  <router-link class="nav-link " :to="{ path: '/dashboard/school/staffs' }">
 Students Taken </router-link>
  </li>
    <li class="nav-item">
    <a class="nav-link" href="#">Salary info</a>
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
name: "staffs"
}
</script>

<style scoped>
.staffs{
    min-height: 100vh;
    margin-top: 5rem;
}
a{
  color: black;
}
</style>