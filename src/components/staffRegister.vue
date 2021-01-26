<template>
  <main class="admit d-flex justify-content-center">
    <loading v-if="loading"></loading>
    <form
      class=""
      action="#"
      @submit.prevent="
        registerStudent(
          firstname,
          lastname,
          address,
          state_of_origin,
          phone,
          email,
          lastname,
          date_of_birth,
          subjects,
          passport,
          category,
          salary
        )
      "
      v-if="!loading"
    >
      <h3 class="mb-4">Employ Staff</h3>
      <div class="form-row text-left">
        <div class="form-group col-md-6">
          <label for="firstname">First Name:</label>
          <input
            type="text"
            name="firstname"
            class="form-control"
            id="firstname"
            placeholder="First Name"
            v-model="firstname"
          />
        </div>
        <div class="form-group col-md-6">
          <label for="lastname">Last Name:</label>
          <input
            type="text"
            class="form-control"
            id="lastname"
            placeholder="Last Name"
            v-model="lastname"
          />
        </div>
      </div>
      <div class="form-row text-left">
        <div class="form-group col-md-6">
          <label for="inputEmail4">Email:</label>
          <input
            type="email"
            class="form-control"
            id="inputEmail4"
            placeholder="Email"
            v-model="email"
          />
        </div>
        <div class="form-group col-md-6">
          <label for="inputPassword4">Phone Number:</label>
          <input
            type="number"
            maxlength="11"
            class="form-control"
            id="inputPassword4"
            placeholder="08047585066"
            v-model="phone"
          />
        </div>
      </div>
      <div class="form-row text-left">
        <div class="form-group col-md-6">
          <label for="inputAddress2">Address:</label>
          <input
            type="text"
            class="form-control"
            id="inputAddress2"
            placeholder="Residencial address"
            v-model="address"
          />
        </div>
        <div class="form-group col-md-6">
          <label for="inputState">State of Origin:</label>
          <select class="form-control" v-model="state_of_origin">
            <option value="" selected disabled>Choose...</option>
            <option
              v-for="state in states"
              :key="state.state.id"
              :value="state.state.name"
            >
              {{ state.state.name }}
            </option>
          </select>
        </div>
      </div>
      <div class="form-row text-left">
        <div class="form-group col-md-6">
          <label>D.O.B:</label>
          <input
            type="date"
            class="form-control"
            placeholder="12-12-1990"
            v-model="date_of_birth"
          />
        </div>
      </div>
      <div class="form-group col-md-6 text-left">
        <label for="inputState">Category of staff:</label>
        <select class="form-control" v-model="category">
          <option value="" selected>Choose...</option>
          <option>Academic</option>
          <option>Non-academic</option>
        </select>
      </div>
      <div class="form-group col-md-6" v-if="category === 'Academic'">
        <div class="mt-4">Subjects</div>
        <div class="form-check">
          <div class="mb-1 row">
            <label class="form-check-label" for="exampleCheck1">English</label>
            <input
              type="checkbox"
              class="form-check-input"
              value="english"
              id="exampleCheck1"
              v-model="subjects"
            />
          </div>
          <div class="row text-left">
            <label class="form-check-label" for="exampleCheck1"
              >Mathematics</label
            >
            <input
              type="checkbox"
              class="form-check-input"
              value="mathematics"
              id="exampleCheck1"
              v-model="subjects"
            />
          </div>
        </div>
      </div>
      <div class="form-row text-left"></div>
      <div class="form-row text-left">
        <div class="form-group col-md-6">
          <label for="inputAddress2">Salary:</label>
          <input
            type="number"
            class="form-control"
            placeholder="10000"
            v-model="salary"
          />
        </div>
      </div>
      <div class="form-row text-left">
        <div class="form-group col-md-6">
          <label for="inputCity">passport</label>
          <div class="image-preview mb-2"><img v-if="passport" /></div>
          <input
            type="file"
            ref="file"
            placeholder="passport"
            v-on:change="handleFileUpload"
          />
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Employ</button>
    </form>
  </main>
</template>

<script>
import axios from "axios";
import { SERVER_URL } from "../helpers/constants";
import { SET_LOADING, ADD_STAFF } from "../helpers/mutationConstants";
import { mapGetters } from "vuex";
import loading from "./loading.vue";

export default {
  components: { loading },
  name: "staffRegister",
  props: "staff",
  data() {
    return {
      firstname: "",
      lastname: "",
      address: "",
      state_of_residence: "",
      state_of_origin: "",
      phone: "",
      email: "",
      password: "",
      date_of_birth: "",
      subjects: [],
      passport: null,
      category: "",
      salary: "",
      states: [],
    };
  },
  created() {
    this.fetchStates();
  },
  computed: {
    ...mapGetters({ loading: "loading" }),
  },
  methods: {
    handleFileUpload(e) {
      this.passport = e.target.files[0];

      const reader = new FileReader();
      reader.onload = function () {
        const el = document.querySelector(".image-preview > img");
        el.src = reader.result;
      };
      reader.readAsDataURL(this.passport);
    },
    registerStudent(
      firstname,
      lastname,
      address,
      state_of_origin,
      phone,
      email,
      password,
      date_of_birth,
      subjects,
      passport,
      category,
      salary
    ) {
      console.log(
        "subjects: " + firstname,
        lastname,
        address,
        state_of_origin,
        phone,
        email,
        password,
        date_of_birth,
        subjects,
        passport,
        category,
        salary
      );

      //collect all inputs with FormData (just in case file will be upploaded)
      const formData = new FormData();
      formData.append("firstname", firstname);
      formData.append("lastname", lastname);
      formData.append("address", address);
      formData.append("state_of_origin", state_of_origin);
      formData.append("phone", phone);
      formData.append("email", email);
      formData.append("salary", salary);
      formData.append("password", password);
      formData.append("date_of_birth", date_of_birth);
      formData.append("subject", subjects);
      formData.append("image", passport);
      formData.append("category", category);

      const url = SERVER_URL + "/staff";
      this.$store.dispatch(SET_LOADING, true);
      axios
        .post(
          url,
          formData,
          {
            headers: {},
          },
          {
            timeout: 30000,
          }
        )
        .then((res) => {
          console.log(res);
          this.$store.dispatch(ADD_STAFF, res.data.data);
          this.$store.dispatch(SET_LOADING, false);
          this.message = "Staff successfully registered";
        })
        .catch((err) => {
          this.$store.dispatch(SET_LOADING, true);
          this.message = "Error occured while saving data";
          console.log(err);
        });
    },
    fetchStates() {
      axios
        .get(
          "https://gist.githubusercontent.com/segebee/7dde9de8e70a207e6e19/raw/90c91f7318d67c9534e3a4d74e4bd755b144e01e/gistfile1.txt"
        )
        .then((res) => {
          this.states = res.data;
        })
        .catch((err) => console.log(err));
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
  width: 60%;
}

.form-check-label {
  width: fit-content;
}

.form-check input {
  width: fit-content;
}

.image-preview img {
  width: 12rem;
}
</style>