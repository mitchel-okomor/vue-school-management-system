<template>
  <div class="staffs">
    <div class="actions mt-5 ml-5">
    </div>
 <staff-list :staffs="staffs"></staff-list>
 <div>
   
 </div>
  </div>
</template>

<script>
import StaffList from './staffList';
import {mapGetters} from 'vuex';


export default {
  name: "staffs",
  components: {StaffList},
 

  computed:{
   ...mapGetters({staffs:"staffs"})
  }
};
</script>

<style scoped>
.actions a{
  width: fit-content !important;
  
}

@media screen and (max-width: 860px) {
  .staffs{
    margin-top: 3rem;
    margin-left: 1rem !important;
  }
}
</style>
