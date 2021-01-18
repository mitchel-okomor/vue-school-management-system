<template>
  <div>
    <div class="row justify-content-between">
      <div>
        <span class="mr-4 ml-2 font-weight-bold"
          >{{ subject_class.title }}</span >
      </div>
      <div>
        <i class="fa fa-edit mr-4 text-primary" v-on:click="togglePanel"></i
        ><i
          class="fa fa-times-circle mr-4 text-danger"
          @click="deleteInfo(subject_class._id)"
        ></i>
      </div>
    </div>

    <form
      class="hide p-2"
      @submit.prevent="handleSubmit(title, subject_class._id, $event)"
    >
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          placeholder=""
          v-model="title"
        />
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import { EDIT_CLASS, DELETE_CLASS } from "../../helpers/mutationConstants";

export default {
  name: "subject_class",
  props: ["subject_class"],
  data() {
    return {
      title: this.subject_class.title,
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
    async handleSubmit(title, id, e) {
      console.log(title, id);
      await this.$store.dispatch(EDIT_CLASS, { title, id });
      e.target.classList.add("hide");
    },

    deleteInfo(id) {
      this.$store.dispatch(DELETE_CLASS, id);
    },
  },
};
</script>

<style scoped>
span {
  color: black;
}
i {
  cursor: pointer;
}
form {
  border: none;
}
</style>