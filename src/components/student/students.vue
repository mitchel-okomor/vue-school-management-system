<template>
  <div class="students">
    <div class="actions mt-5 ml-5">
    </div>
 <student-list :students="students"></student-list>
 <div>
   
 </div>
  </div>
</template>

<script>
import {GET_STUDENTS} from '../../helpers/mutationConstants';
import StudentList from './studentList.vue';
import {mapGetters} from 'vuex';

export default {
  name: "students",
  components: {StudentList},
  mounted(){
   this.$store.dispatch(GET_STUDENTS);
  },

  computed:{
   ...mapGetters({students:"students"})
  }
};
</script>

<style scoped>
.actions a{
  width: fit-content !important;
  
}

@media screen and (max-width: 860px) {
  .students{
    margin-left: 1rem !important;
  }
}
</style>
