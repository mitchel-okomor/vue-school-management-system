<template>
  <div>
    <div class="row justify-content-between">
      <div>
        <span class="mr-4 ml-2 font-weight-bold">{{ subject.title }}</span>
      </div>
      <div>
        <i class="fa fa-edit mr-4 text-primary" v-on:click="togglePanel"></i
        ><i
          class="fa fa-times-circle mr-4 text-danger"
          @click="deleteSubject(subject._id)"
        ></i>
      </div>
    </div>

    <form
      class="hide p-2"
      @submit.prevent="handleSubmit(title, subject._id, $event)"
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
import { EDIT_SUBJECT, DELETE_SUBJECT } from "../../helpers/mutationConstants";

export default {
  name: "subject",
  props: ["subject"],
  data() {
    return {
      title: this.subject.title,
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
      await this.$store.dispatch(EDIT_SUBJECT, { title, id });
      e.target.classList.add("hide");
    },

    deleteSubject(id) {
      this.$store.dispatch(DELETE_SUBJECT, id);
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