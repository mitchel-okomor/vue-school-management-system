<template>
  <nav
    class="navbar navbar-light bg-white justify-content-between fixed-top mb-4"
  >
    <div class="logo p-3">
      <router-link class="logo1" :to="{ path: '/' }">
        School Management System
      </router-link>
      <router-link class="logo2" :to="{ path: '/' }"> SMS </router-link>
    </div>
    <div class="d-flex">
      <ul class="d-flex">
        <li class="nav-item mr-4" v-if="!user">
          <a href="#"
            ><router-link :to="{ path: '/dashboard' }">Staff</router-link>
          </a>
        </li>
        <li class="nav-item mr-4" v-if="!user">
          <a href="#"
            ><router-link :to="{ path: '/student/dashboard' }"
              >Student</router-link
            >
          </a>
        </li>
        <li class="nav-item mr-4" v-if="staff.firstname">
          <a href="#"
            ><router-link :to="{ path: '/dashboard' }">Dashboard</router-link>
          </a>
        </li>
        <li class="nav-item mr-4" v-if="student.firstname">
          <a href="#"
            ><router-link :to="{ path: '/student/dashboard' }"
              >Dashboard</router-link
            >
          </a>
        </li>
      </ul>
      <div class="mr-4 font-weight-bold" v-if="user && staff.firstname">
        <router-link :to="{ path: '/staff/profile' }">{{ user }}</router-link>
      </div>
      <div class="mr-4 font-weight-bold" v-if="user && student.firstname">
        <router-link :to="{ path: '/student/profile' }">{{ user }}</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
import first_to_upper_case from "../helpers/firstToUpperCase";

export default {
  name: "navigation",
  data() {
    return {};
  },
  computed: {
    ...mapGetters({ staff: "getStaff", student: "getStudent" }),
    user() {
      if (this.staff.firstname) {
        return first_to_upper_case(this.staff.firstname);
      } else if (this.student.firstname) {
        return first_to_upper_case(this.student.firstname);
      }
      return null;
    },
  },
};
</script>

<style scoped>
a {
  color: rgb(0, 132, 255);
}
a:visited {
  color: rgb(0, 132, 255);
}
.logo {
  font-weight: 600;
  border: 1px solid green;
  border-radius: 3rem;
}
.logo2 {
  display: none;
}
@media screen and (max-width: 860px) {
  .logo {
    font-weight: 900;
    border: none;
    padding: 0 !important;
  }
  .logo1 {
    display: none;
  }
  .logo2 {
    display: block;
  }
  ul {
    margin-bottom: 0;
  }
}
</style>
