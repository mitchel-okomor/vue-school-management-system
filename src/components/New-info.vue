<template>
  <div class="">
 <form  @submit.prevent="handleSubmit(title, description)">
  <div class="form-group">
    <label for="title">Tile</label>
    <input type="text" class="form-control" id="title" placeholder="Enter title" v-model="title">
  </div>

  <div class="form-group">
    <label for="description">Descritpion</label>
    <textarea class="form-control" id="description" rows="3" v-model="description"></textarea>
  </div>
    <button type="submit" class="btn btn-primary">Submit</button>
</form>
  </div>
</template>

<script>
import {ADD_SCHOOL_INFO} from '../helpers/mutationConstants';

export default {
  name: "new-info",
  data(){
      return{
          title:"",
          description:""
      }
  },


  methods:{ 
    handleSubmit(title, description){
          console.log(title, description)
   this.$store.dispatch(ADD_SCHOOL_INFO,{title, description});
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
form input, textarea{
    
}
</style>
