<template>
  <div class="mt-5 overview  pt-5">
    <h3 class="text-danger">School Overview</h3>

<div class="cards ">
  <router-link class="nav-link " :to="{ path: '/dashboard/school/students' }">
<div class="card text-white bg-primary mb-3" >
  <div class="card-header">Total Students</div>
  <div class="card-body">
    <p class="card-text" v-if="loading">Loading...</p>
        <p class="card-text">{{totalStudents}}</p>
  </div>
</div>
  </router-link>
    <router-link class="nav-link " :to="{ path: '/dashboard/school/staffs' }">
<div class="card text-white bg-secondary mb-3" >
  <div class="card-header">Total Staffs</div>
  <div class="card-body">
    <p class="card-text" v-if="loading">Loading...</p>
            <p class="card-text">{{totalStaffs}}</p>
  </div>
</div>
    </router-link>
<div class="card text-white bg-success mb-3" >
  <div class="card-header">Classes</div>
  <div class="card-body">
    <p class="card-text" v-if="loading">Loading...</p>
  </div>
</div>
<div class="card text-white bg-danger mb-3" >
  <div class="card-header">Subjects</div>
  <div class="card-body">
    <p class="card-text" v-if="loading">Loading...</p>
  </div>
</div>

</div>
   </div>
</template>

<script>
import {mapGetters} from 'vuex';
import {GET_STAFFS, GET_STUDENTS} from '../helpers/mutationConstants';

export default {
name: "overview",

created(){
   this.$store.dispatch(GET_STAFFS);
   this.$store.dispatch(GET_STUDENTS);

},

computed: {
  ...mapGetters({totalStudents:"totalStudents", totalStaffs: "totalStaffs", loading:"loading"})
}
}


</script>

<style scoped>
.overview .cards{
  margin-left: 2rem;
display: flex;
flex-wrap: wrap;
flex-basis: 1rem;
flex-direction: row;
}
.overview .card{
  margin: 1rem;
  width: 13rem;
}

@media (max-width: 800px) {
  .cards {
    flex-direction: column;
    margin-left: 0;
    margin-right: 0;
  }
}

</style>