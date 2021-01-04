<template>
  <div class="">
    <div class="actions mt-5 ml-5">
  <router-link class="nav-link btn btn-secondary" :to="{ path: '/dashboard/school/new-info' }">
 Add Info </router-link>  
    </div>
 <info-list infos="infos"></info-list>
  </div>
</template>

<script>
import {GET_INFO} from '../../helpers/mutationConstants';
import InfoList from './infoList.vue';
import {mapGetters} from 'vuex';

export default {
  name: "infos",
  components: {InfoList},
  created(){
   this.$store.dispatch(GET_INFO);
  },

  computed:{
   ...mapGetters({infos:"getInfo"})
  }
};
</script>

<style scoped>
.actions a{
  width: fit-content !important;
  
}
</style>
