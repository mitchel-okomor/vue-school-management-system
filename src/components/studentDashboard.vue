<template>
  <div class="student-dashboard">
    <div class="row">
      <div class="col-md-3 col-lg-3 col-xl-3 col-sm-12 col-ms-12 bg-blue pl-0">
        <div>
          <div class="dashboard-image mt-5 p-5">
            <img src="https://bootdey.com/img/Content/avatar/avatar7.png" />
            <h3 class="mt-2" v-if="student">{{ student.firstname }}</h3>
          </div>

          <div class="side pt-5">
            <h4 class=" ">Navigation</h4>
            <ul class="px-4">
              <li>
                <router-link :to="{ path: '/overview' }"
                  ><i class="fa fa-tachometer" aria-hidden="true"></i>
                  Dashboard</router-link
                >
              </li>
              <li>
                <router-link :to="{ path: '/' }"
                  ><i class="fa fa-th-large" aria-hidden="true"></i>
                  Fees</router-link
                >
              </li>
              <li>
                <router-link :to="{ path: '/' }"
                  ><i class="fa fa-th-large" aria-hidden="true"></i>
                  Academics</router-link
                >
              </li>
              <li>
                <router-link :to="{ path: '/' }"
                  ><i class="fa fa-minus-square" aria-hidden="true"></i>
                  Info</router-link
                >
              </li>
            </ul>
            <div class="text-center mt-5">
              <button class="btn-primary" v-on:click="logoutUser">
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-9 col-lg-9 col-xl-9 col-sm-12 col-ms-12">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Logout from "../helpers/Logout";

export default {
  name: "dashboard",
  data() {
    return {};
  },

  methods: {
    logoutUser: () => {
      Logout();
    },
  },
};
</script>

<style scoped>
.student-dashboard {
  min-height: 100vh;
  border-top: 15px solid var(--primary-color);
}
.dashboard-image {
  background-color: white;
  text-align: center;
  color: var(--primary-color);
}

.dashboard-image img {
  color: var(--primary-color);
  width: 170px;
  height: 170px;
  border-radius: 50%;
}

h5 {
  color: var(--primary-color);
}
h3 {
  color: var(--primary-color);
}
.notification {
  border-right: 1px solid var(--primary-color);
}
.n-area {
  border-top: 1px solid var(--primary-color);
}
.side {
  background-color: white;
  height: 100vh;
}
.side .fa {
  margin-right: 0.5rem;
  color: var(--primary-color);
}

.side ul {
  margin-bottom: 1px;
  text-align: left;
  margin-left: 4.5rem;
}

.side ul a {
  font-size: 1rem;
  font-weight: 400;
  color: var(--primary-color);
}

.side ul li {
  margin-top: 0.9rem;
}

.side h4 {
  font-weight: bold;
  color: var(--primary-color);
}

.side button {
  font-size: large;
}
</style>
