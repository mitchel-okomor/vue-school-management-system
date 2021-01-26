<template>
  <div class="student-dashboard">
    <div class="row">
      <div class="col-md-3 col-lg-3 col-xl-3 col-sm-12 col-ms-12 bg-blue pl-0">
        <div>
          <div class="dashboard-image mt-5 p-4">
            <img src="../../assets/dummy.jpg" />
            <h3 class="mt-2" v-if="user.firstname">{{ user.firstname }}</h3>
          </div>

          <div class="side pt-5">
            <ul class="px-4">
              <li>
                <router-link :to="{ path: '/' }"
                  ><i class="fa fa-tachometer" aria-hidden="true"></i>
                  Dashboard</router-link
                >
              </li>
              <li>
                <router-link :to="{ path: '/' }"
                  ><i class="fa fa-envelope" aria-hidden="true"></i>
                  Messages</router-link
                >
              </li>
              <li>
                <router-link :to="{ path: '/' }"
                  ><i class="fa fa-bell" aria-hidden="true"></i>
                  Notifications</router-link
                >
              </li>
              <li>
                <router-link :to="{ path: '/' }"
                  ><i class="fa fa-folder" aria-hidden="true"></i>
                  Files</router-link
                >
              </li>
            </ul>
            <div class="text-center mt-5">
              <button class="btn-primary rounded" v-on:click="logoutUser">
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-9 col-lg-9 col-xl-9 col-sm-12 col-ms-12 pr-0 right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Logout from "../../helpers/LogoutStudent";
import { GET_STUDENT } from "../../helpers/mutationConstants";

export default {
  name: "dashboard",
  data() {
    return {
      user: "",
    };
  },
  created() {
    this.$store.dispatch(GET_STUDENT);
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
  margin-left: 3rem;
}

.side ul a {
  font-size: 1rem;
  font-weight: 400;
  color: var(--primary-color);
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
  color: var(--primary-color);
}

.side button {
  font-size: large;
}
.right {
  height: 100vh;
  overflow: auto;
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
