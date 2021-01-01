<template>
  <div class="admin">
    <div class="row">
      <div class="col-md-3 col-lg-3 col-xl-3 col-sm-12 col-ms-12 bg-blue pr-0">
        <div class="left">
          <div class="dashboard-image mt-5 p-4 ">
            <img src="../assets/dummy.jpg" />
            <h3 class="mt-2">{user.firstname}</h3>
          </div>

          <div class="side pt-5 ">
            <h4 class=" ">Navigation</h4>
            <div class="row">
              <div class="col-md-6 col-lg-6 col-xl-6 col-sm-12 col-ms-12 pr-0">
                <div class="">
                  <ul class="px-3 ">
                    <li>
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
                      <router-link :to="{ path: '/dashboard/evaluations' }"
                        ><i class="fa fa-circle" aria-hidden="true"></i>
                        Evaluations</router-link
                      >
                    </li>
                  </ul>
                </div>
              </div>
              
            </div>

            <div class="text-center mt-5">
              <button class="btn-primary" v-on:click="logoutUser">
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-9 col-lg-9 col-xl-9 col-sm-12 col-ms-12 pl-0">
        
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
.admin {
}

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
  height: 100vh;
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
</style>
