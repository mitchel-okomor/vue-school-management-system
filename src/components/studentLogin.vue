<template>
  <main class="admit d-flex justify-content-center">
    <form
      class=""
      action="#"
      @submit.prevent="loginStudent(email, password)"
      v-if="!loading"
    >
      <div class="mb-3"><h3>Student Login</h3></div>
      <div class="form-row">
        <div class="form-group col-md-12 text-left">
          <label for="inputEmail4"
            >Email<span class="text-danger">*</span>:</label
          >
          <input
            type="email"
            class="form-control"
            id="inputEmail4"
            placeholder="Email"
            v-model="email"
          />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-12 text-left">
          <label class="">Password<span class="text-danger">*</span></label>
          <div class="">Password is student's surname</div>
          <input
            type="password"
            class="form-control"
            placeholder="Password"
            v-model="password"
          />
        </div>
      </div>
      <div class="text-danger mb-2">{{ message }}</div>
      <button type="submit" class="btn btn-primary">
        <span v-if="loading">Loading...</span>
        <span v-if="!loading">Login</span>
      </button>
    </form>
    <loading class="mt-5 pt-5" v-if="loading"></loading>
  </main>
</template>

<script>
import axios from "axios";
import { SERVER_URL } from "../helpers/constants";
import {
  SET_LOADING,
  SET_STUDENT,
  SET_USER,
  SET_LOGGED_IN,
} from "../helpers/mutationConstants";
import { mapGetters, mapActions } from "vuex";
import Loading from "./loading.vue";
import isLoggedIn from "../helpers/checkLogin";

export default {
  name: "studentLogin",
  props: "student",
  components: { Loading },
  data() {
    return {
      email: "",
      password: "",
      message: "",
      student: "",
    };
  },
  created() {
    if (isLoggedIn()) {
      console.log("loggedIn");
      this.$store.dispatch(SET_LOGGED_IN, true);
      this.student = this.$store.getters.getStudent;
    }
  },

  computed: {
    ...mapGetters({ loading: "loading" }),
  },

  methods: {
    ...mapActions({ setLoading: SET_LOADING }),
    loginStudent(email, password) {
      //collect all inputs with FormData (just in case file will be upploaded)
      const formData = { email, password };

      console.log(formData);
      const url = SERVER_URL + "/student/login";
      this.$store.dispatch(SET_LOADING, true);
      axios
        .post(url, formData)
        .then((res) => {
          console.log(res);
          localStorage.setItem("student_token", res.data.info.token);
          localStorage.setItem("student_id", res.data.info.data._id);
          this.$store.dispatch(SET_STUDENT, res.data.info.data);
          this.$store.dispatch(SET_LOGGED_IN, true);
          this.$store.dispatch(SET_LOADING, false);
          this.$store.dispatch(SET_USER, {
            name: res.data.info.data.firstname,
            type: "student",
          });
        })
        .then(() => {
          this.$router.push("/student/dashboard");
        })
        .catch((err) => {
          this.$store.dispatch(SET_LOADING, false);
          this.message = err.response.data.message;
          setTimeout(() => {
            this.message = "";
          }, 8000);
          console.log(err.response);
        });
    },
  },
};
</script>

<style scoped>
main {
  min-height: 100vh;
  margin-top: 4rem;
}

form {
  background-color: black;
  opacity: 0.8;
  color: white;
  padding: 1.5rem;
  margin-top: 3rem;
  width: 30%;
  height: fit-content;
}
label {
  margin-top: 0.5rem;
  margin-bottom: 0.1rem;
}
</style>