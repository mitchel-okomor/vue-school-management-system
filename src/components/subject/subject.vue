<template>
  <div class="info">
    <div class="actions mt-5 ml-5">
  <router-link class="nav-link btn btn-secondary" :to="{ path: '/dashboard/school/new-subject' }">
 Add Subject </router-link>  
    </div>
 <subject-list :subjectList="subjects"></subject-list>
 <div>
   
 </div>
  </div>
</template>

<script>
import {GET_SUBJECTS} from '../../helpers/mutationConstants';
import SubjectList from './subjectList.vue';
import {mapGetters} from 'vuex';

export default {
  name: "subjects",
  components: {SubjectList},
  created(){
   this.$store.dispatch(GET_SUBJECTS);
  },

  computed:{
   ...mapGetters({subjects:"getSubjects"})
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
