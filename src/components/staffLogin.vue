<template>
  <main class="admit d-flex justify-content-center">
    <form
      class=""
      action="#"
      @submit.prevent="loginstaff(email, password)"
      v-if="!loading"
    >
      <div class="mb-3"><h3>Staff Login</h3></div>

      <div>
        <h6 class="text-primary text-left">
          Test with <br />
          Email: admin@sms.com <br />
          Password: admin
        </h6>
      </div>
      <div class="form-row">
        <div class="form-group col-md-12">
          <label for="inputEmail4">Email:</label>
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
        <div class="form-group col-md-12">
          <label>Password</label>
          <input
            type="password"
            class="form-control"
            placeholder="Password"
            v-model="password"
          />
        </div>
      </div>
      <div class="text-danger mb-3">{{ message }}</div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
    <loading v-if="loading"></loading>
  </main>
</template>

<script>
import axios from "axios";
import { SERVER_URL } from "../helpers/constants";
import {
  SET_STAFF,
  SET_LOGGED_IN,
  SET_USER,
  SET_LOADING,
} from "../helpers/mutationConstants";
import isLoggedIn from "../helpers/checkLogin";
import { mapGetters } from "vuex";
import Loading from "./loading";

export default {
  name: "staffLogin",
  props: "staff",
  components: { Loading },
  data() {
    return {
      email: "",
      password: "",
      staff: "",
      message: "",
    };
  },

  computed: {
    ...mapGetters({ loading: "loading" }),
  },

  created() {
    if (isLoggedIn()) {
      console.log("loggedIn");
      this.$store.dispatch(SET_LOGGED_IN, true);
      this.staff = this.$store.getters.getStaff;
    }
  },
  methods: {
    async loginstaff(email, password) {
      //collect all inputs with FormData (just in case file will be upploaded)
      const formData = { email, password };

      console.log(formData);
      const url = SERVER_URL + "/staff/login";

      this.$store.dispatch(SET_LOADING, true);
      axios
        .post(url, formData)
        .then((res) => {
          localStorage.setItem("token", res.data.info.token);
          localStorage.setItem("userId", res.data.info.data._id);
          this.$store.dispatch(SET_STAFF, res.data.info.data);
          this.$store.dispatch(SET_LOGGED_IN, true);
          this.$store.dispatch(SET_LOADING, false);
          this.$store.dispatch(SET_USER, {
            name: res.data.info.data.firstname,
            type: "staff",
          });
        })
        .then(() => {
          this.$router.push("/dashboard");
        })
        .catch((err) => {
          this.$store.dispatch(SET_LOADING, false);
          const { response } = err;
          if (response.status === 401) {
            this.message = "Email or password incorrect";
            setTimeout(() => {
              this.message = "";
            }, 3000);
          }
          console.log(response);
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
  text-align: left !important;
}
</style>