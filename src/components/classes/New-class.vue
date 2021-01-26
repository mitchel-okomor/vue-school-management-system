<template>
  <div class="mt-5">
    <h3>Add new class</h3>
    <router-link
      class="nav-link goback text-primary"
      :to="{ path: '/dashboard/school/classes' }"
    >
      <i class="fa fa-arrow-left" aria-hidden="true"></i> Go back</router-link
    >
    <form @submit.prevent="handleSubmit(title, tution)">
      <div class="form-group">
        <label for="title">Tile</label>
        <input
          type="text"
          class="form-control"
          id="title"
          placeholder="Enter title"
          v-model="title"
        />
      </div>
      <div class="form-group">
        <label for="tution">Tution Fee</label>
        <input
          type="number"
          class="form-control"
          id="tution"
          placeholder="Enter Fee Amount"
          v-model="tution"
        />
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import { ADD_CLASS } from "../../helpers/mutationConstants";

export default {
  name: "new-class",
  data() {
    return {
      title: "",
      tution: "",
    };
  },

  methods: {
    handleSubmit(title, tution) {
      this.$store.dispatch(ADD_CLASS, { title, tution });
    },
  },
};
</script>

<style scoped>
form {
  text-align: left;
  padding: 1rem;
  margin: 1rem;
  width: 50%;
}

.goback {
  text-align: left;
}
</style>
