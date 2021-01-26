<template>
  <div class="overview pt-5">
    <h3 class="text-danger font-weight-bold bg-white pt-5"></h3>

    <div class="cards">
      <router-link class="nav-link" :to="{ path: '/student/dashboard/info' }">
        <div class="card text-white bg-primary mb-3">
          <div class="card-header">Basic Info</div>
          <div class="card-body">
            <p class="card-text" v-if="loading">Loading...</p>
            <p>
              <span>Name: </span
              ><span>{{ student.firstname + " " + student.lastname }}</span>
            </p>
          </div>
        </div>
      </router-link>
      <router-link
        class="nav-link"
        :to="{ path: '/student/dashboard/academics' }"
      >
        <div class="card text-white bg-primary mb-3">
          <div class="card-header">Academics</div>
          <div class="card-body">
            <p class="card-text" v-if="loading">Loading...</p>
            <p><span>Academic Session:</span><span>{{}}</span></p>
            <p><span>No of subjects:</span><span>{{}}</span></p>
            <p>
              <span>Class: </span><span>{{ student.subject_class }}</span>
            </p>
          </div>
        </div>
      </router-link>
      <router-link class="nav-link" :to="{ path: '/student/dashboard/fees' }">
        <div class="card text-white bg-primary mb-3">
          <div class="card-header">Fees</div>
          <div class="card-body">
            <p class="card-text" v-if="loading">Loading...</p>
            <p><span>Fees paid:</span><span>{{}}</span></p>
            <p><span>Fees balance:</span><span>{{}}</span></p>
            <button v-if="feesBalance" class="btn btn-secondary rounded">
              Pay fees
            </button>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "overvie",
  data() {
    return {};
  },
  computed: {
    ...mapGetters({ student: "getStudent" }),
  },
};
</script>



<style scoped>
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