<template>
  <div class="overview pt-5">
    <h3 class="text-danger font-weight-bold bg-white pt-5"></h3>

    <div class="cards">
      <div class="card text-white bg-primary mb-3">
        <router-link class="nav-link" :to="{ path: '/student/dashboard/info' }">
          <div class="card-header uppercase">Basic Info</div>
        </router-link>
        <div class="card-body text-left">
          <p class="card-text" v-if="loading">Loading...</p>
          <p>
            <span>Firstname: </span><span>{{ firstname }}</span>
          </p>
          <p>
            <span>Surname: </span><span>{{ lastname }}</span>
          </p>
          <p>
            <span>Email: </span><span>{{ student.email }}</span>
          </p>
          <p>
            <span>Phone: </span><span>{{ student.phone }}</span>
          </p>
        </div>
      </div>

      <div class="card text-white bg-primary mb-3">
        <router-link
          class="nav-link"
          :to="{ path: '/student/dashboard/academics' }"
        >
          <div class="card-header">Academics</div>
        </router-link>
        <div class="card-body text-left">
          <p class="card-text" v-if="loading">Loading...</p>
          <p><span>Academic Session: </span><span>2020/2021</span></p>
          <p><span>No of subjects: </span><span>12</span></p>
          <p>
            <span>Class: </span><span>{{ student.subject_class }}</span>
          </p>
        </div>
      </div>
      <div class="card text-white bg-primary mb-3">
        <router-link class="nav-link" :to="{ path: '/student/dashboard/fees' }">
          <div class="card-header">Fees</div>
        </router-link>
        <div class="card-body text-left">
          <p class="card-text" v-if="loading">Loading...</p>
          <p>
            <span>Total paid: </span><span>{{ getFees }}</span>
          </p>
          <p>
            <span>Fees paid: </span><span>{{ feesPaid }}</span>
          </p>
          <p>
            <span>Fees balance: </span><span>{{ getFeesBalance }}</span>
          </p>

          <div class="text-center">
            <button
              v-on:click="pay"
              v-if="getFeesBalance"
              class="btn btn-light text-dark rounded"
            >
              Pay fees
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
import firstLetterUpperCase from "../../helpers/firstToUpperCase";
import { SERVER_URL } from "../../helpers/constants";

export default {
  name: "overvie",
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      student: "getStudent",
      classes: "getClasses",
      feesPaid: "getFeesPaid",
      loading: "loading",
    }),
    getFees() {
      console.log(this.student);
      const student_class = this.classes.find((item) => {
        console.log("item: " + this.student.subject_class + " " + item.title);
        return item.title === this.student.subject_class;
      });
      console.log(student_class);
      return student_class ? student_class.tution : "";
    },

    getFeesBalance() {
      return this.getFees - this.feesPaid;
    },
    firstname() {
      return firstLetterUpperCase(this.student.firstname);
    },
    lastname() {
      return firstLetterUpperCase(this.student.lastname);
    },
  },

  methods: {
    getClass() {
      const student_class = this.classes.find((item) => {
        console.log("item: " + this.student.subject_class + " " + item.title);
        return item.title === this.student.subject_class;
      });
      return student_class;
    },

    pay() {
      const url = SERVER_URL + "/pay";
      axios
        .get(url)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>



<style scoped>
.overview {
  overflow: auto;
}
.overview .cards {
  margin-left: 2rem;
  display: flex;
  flex-wrap: wrap;
  flex-basis: 1rem;
  flex-direction: row;
}
.overview .card {
  margin: 1rem;
  width: 13rem;
}

@media (max-width: 800px) {
  .cards {
    flex-direction: column;
    margin-left: 0;
    margin-right: 0;
  }
}
</style>