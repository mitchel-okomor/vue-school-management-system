<template>
  <div class="admin">
    <div class="row">
      <div class="col-md-3 col-lg-3 col-xl-3 col-sm-12 col-ms-12 bg-blue pr-0">
        <div class="left">
          <div class="dashboard-image mt-5 p-4">
            <img
              src="https://bootdey.com/img/Content/avatar/avatar7.png"
              class="mt-5"
            />
          </div>

          <div class="side">
            <div class="row">
              <div class="pl-md-5">
                <ul class="px-3">
                  <li class="active-link">
                    <router-link :to="{ path: '/dashboard/overview' }"
                      ><i class="fa fa-tachometer" aria-hidden="true"></i>
                      Overview</router-link
                    >
                  </li>
                  <li>
                    <router-link :to="{ path: '/dashboard/school' }"
                      ><i class="fa fa-th-large" aria-hidden="true"></i>
                      School</router-link
                    >
                  </li>
                  <li>
                    <router-link :to="{ path: '/dashboard/students' }"
                      ><i class="fa fa-th-large" aria-hidden="true"></i>
                      Students</router-link
                    >
                  </li>
                  <li>
                    <router-link :to="{ path: '/dashboard/staffs' }"
                      ><i class="fa fa-minus-square" aria-hidden="true"></i>
                      Staffs</router-link
                    >
                  </li>
                  <li>
                    <router-link :to="{ path: '/dashboard/books' }"
                      ><i class="fa fa-minus-square" aria-hidden="true"></i>
                      Books</router-link
                    >
                  </li>
                  <li>
                    <router-link :to="{ path: '/dashboard/evaluations' }"
                      ><i class="fa fa-circle" aria-hidden="true"></i>
                      Evaluations</router-link
                    >
                  </li>
                </ul>
              </div>
            </div>

            <div class="text-center logout-container mt-5">
              <button class="btn-primary rounded" v-on:click="logoutUser">
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="col-md-9 col-lg-9 col-xl-9 col-sm-12 col-ms-12 pl-0 pr-0 right"
      >
        <div class="outer-div"><router-view></router-view></div>
      </div>
    </div>
  </div>
</template>

<script>
import Logout from "../helpers/Logout";
import { mapGetters } from "vuex";
import {
  GET_CLASSES,
  GET_STAFFS,
  GET_STUDENTS,
  GET_SUBJECTS,
} from "../helpers/mutationConstants";

export default {
  name: "dashboard",
  data() {
    return {};
  },
  created() {
    this.$store.dispatch(GET_STAFFS);
    this.$store.dispatch(GET_STUDENTS);
    this.$store.dispatch(GET_CLASSES);
    this.$store.dispatch(GET_SUBJECTS);
  },

  methods: {
    logoutUser: () => {
      Logout();
    },
  },
  computed: {
    ...mapGetters({ staff: "getStaff", student: "getStudent" }),
  },
};
</script>

<style scoped>
.dashboard-image {
  background-color: white;
  text-align: center;
  color: var(--light-color);
}

.dashboard-image img {
  color: black;
  width: 170px;
  height: 170px;
  border-radius: 50%;
}

h5 {
  color: black;
}
h3 {
  color: black;
}
.notification {
  border-right: 1px solid rgba(240, 248, 255, 0.678);
}
.n-area {
  border-top: 1px solid rgba(240, 248, 255, 0.678);
}
.side {
  background-color: white;
  height: 60vh;
}
.side .fa {
  margin-right: 0.2rem;
  color: var(--primary-color);
}

.side ul {
  margin-bottom: 1px;
  text-align: left;
}

.side ul a {
  font-size: 1rem;
  font-weight: 400;
  color: black;
}

.side ul a:hover {
  background: rgb(0, 98, 255);
  color: white !important;
  border-radius: 0.5rem;
  border: none;
  padding: 0.4rem;
}

.side ul li {
  margin-top: 0.9rem;
}

.side h4 {
  font-weight: bold;
  color: black;
}

.side button {
  font-size: large;
}

.dashboard-header {
  height: 4rem;
  background: white;
}
.admit {
  margin-top: 0rem;
}
.outer-div {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

@media screen and (max-width: 860px) {
  .side {
    height: fit-content;
    padding-bottom: 1rem;
  }
  ul {
    margin-left: 1rem;
  }
  ul li a {
    font-weight: 800 !important;
  }
  .logout-container {
    margin-top: 1rem !important;
  }
  .dashboard-image {
    margin-top: 0.2rem !important;
  }
  .dashboard-image img {
    width: 120px;
    height: 120px;
  }

  .side ul li {
    margin-top: 0.5rem;
  }
}
</style>

