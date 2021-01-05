<template>
       <div>
        <div class="row justify-content-between">
          <div>
            <span class="mr-4 ml-2 font-weight-bold">{{ info.title }}:</span
            ><span class="">{{ info.description }}</span>
          </div>
          <div>
            <i class="fa fa-edit mr-4 text-primary" v-on:click="togglePanel"></i
            ><i class="fa fa-times-circle mr-4 text-danger" @click="deleteInfo( info._id) "></i>
          </div>
        </div>
       
    <form class="hide" @submit.prevent="handleSubmit(title, description, info._id, $event)">
  <div class="form-group">
    <label for="title">Title</label>
    <input type="text" class="form-control" id="title"   placeholder="" v-model="title">
  </div>

  <div class="form-group">
    <label for="description">Descritpion</label>
    <input class="form-control" id="description"   rows="3" v-model="description" />
  </div>
    <button type="submit" class="btn btn-primary">Submit</button>
</form></div>
</template>

<script>
import {EDIT_INFO, DELETE_INFO} from '../../helpers/mutationConstants';

export default {
    name : "info",
     props: ["info"],
 data() {
    return {
      title: this.info.title,
      description: this.info.description,
    };
  },
  

  methods: {
    //close and open panel
    togglePanel(e) {
      const editEl = e.target.parentNode.parentNode.nextSibling;
      console.log(editEl.classList);
      editEl.classList.contains("hide")
        ? editEl.classList.remove("hide")
        : editEl.classList.add("hide");
    },

//submit panel form
async handleSubmit( title, description, id, e){
  console.log(title, description, id);
 await this.$store.dispatch(EDIT_INFO, {title, description, id});
    e.target.classList.add("hide");

},

deleteInfo(id){
  this.$store.dispatch(DELETE_INFO, id)
}

  },
}
</script>

<style>

</style>