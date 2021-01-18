<template>
  <div class="info">
    <div class="actions mt-5 ml-5">
  <router-link class="nav-link btn btn-secondary" :to="{ path: '/dashboard/school/new-class' }">
 Add a subject class </router-link>  
    </div>
 <class-list :classList="classes"></class-list>
 <div>
   
 </div>
  </div>
</template>

<script>
import {GET_CLASS} from '../../helpers/mutationConstants';
import classList from './classList.vue';
import {mapGetters} from 'vuex';

export default {
  name: "classes",
  components: {classList},
  created(){
   this.$store.dispatch(GET_CLASS);
  },

  computed:{
   ...mapGetters({classes:"getClasses"})
  }
};
</script>

<style scoped>
.actions a{
  width: fit-content !important;
  
}

@media screen and (max-width: 860px) {
  .info{
    margin-left: 1rem !important;
  }
}
</style>
