<template>
  <div class="books ml-5">
     <div class=""><ul class="nav nav-tabs ">
  <li class="nav-item">
  <router-link class="nav-link active" :to="{ path: '/dashboard/school/info' }">
 Jss1 </router-link>
  </li>
<li class="nav-item">
  <router-link class="nav-link " :to="{ path: '/dashboard/school/students' }">
 Jss2 </router-link>
  </li>
 <li class="nav-item">
  <router-link class="nav-link " :to="{ path: '/dashboard/school/staffs' }">
Jss3 </router-link>
  </li>
    <li class="nav-item">
    <a class="nav-link" href="#">SS1</a>
  </li>
    <li class="nav-item">
    <a class="nav-link" href="#">SS2</a>
  </li>
   <li>
    <li class="nav-item">
    <a class="nav-link" href="#">SS3</a>
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