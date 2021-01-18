<template>
  <div class="">
  <router-link class="nav-link goback text-primary mt-5" :to="{ path: '/dashboard/school/subjects' }">    <i class="fa fa-arrow-left" aria-hidden="true"></i>
Go back</router-link>
 <form  @submit.prevent="handleSubmit(title)">
  <div class="form-group">
    <label for="title">Tile</label>
    <input type="text" class="form-control" id="title" placeholder="Enter title" v-model="title">
  </div>

    <button type="submit" :disabled="loading" class="btn btn-primary">Submit</button>
</form>
  </div>
</template>

<script>
import {ADD_SUBJECT} from '../../helpers/mutationConstants';
import {mapGetters} from 'vuex';
export default {
  name: "new-subject",
  data(){
      return{
          title:""
      }
  },
computed:{
  ...mapGetters({loading:"loading"})
},

  methods:{ 
    handleSubmit(title){
          console.log(title)
   this.$store.dispatch(ADD_SUBJECT,{title});
      }
  }
};
</script>

<style scoped>
form{
    text-align: left;
    padding: 1rem;
    margin: 1rem;
    width: 50%;
}

.goback{
  text-align: left;
}
</style>
