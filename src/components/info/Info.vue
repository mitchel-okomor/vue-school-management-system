<template>
  <div class="">
    <div class="actions mt-5 ml-5">
  <router-link class="nav-link btn btn-secondary" :to="{ path: '/dashboard/school/new-info' }">
 Add Info </router-link>  
    </div>
    <div class="card m-5 mt-1" style="width: 18rem">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Cras justo odio</li>
        <li class="list-group-item">Dapibus ac facilisis in</li>
        <li class="list-group-item">Vestibulum at eros</li>
      </ul>
    </div>
  </div>
</template>

<script>
import {GET_INFO} from '../../helpers/mutationConstants'

export default {
  name: "info",
  mounted(){
   this.$store.dispatch(GET_INFO);
  },

  computed:{
    info(){
return this.$store.getters.info;
    }
  }
};
</script>

<style scoped>
.actions a{
  width: fit-content !important;
  
}
</style>
