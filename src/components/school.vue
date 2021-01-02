<template>
  <div class="school ml-5">
     <div class=""><ul class="nav nav-tabs ">
  <li class="nav-item">
  <router-link class="nav-link active" :to="{ path: '/dashboard/school/info' }">
 Info </router-link>
  </li>
<li class="nav-item">
  <router-link class="nav-link " :to="{ path: '/dashboard/school/students' }">
 Students </router-link>
  </li>
 <li class="nav-item">
  <router-link class="nav-link " :to="{ path: '/dashboard/school/staffs' }">
 Staffs </router-link>
  </li>
    <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
    <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
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
</style>