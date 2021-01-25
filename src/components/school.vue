<template>
  <div class="school ml-5">
    <div class="">
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <router-link
            class="nav-link"
            active
            :to="{ path: '/dashboard/school/info' }"
          >
            Info
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link"
            :to="{ path: '/dashboard/school/employ' }"
            >Employ Staff</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link"
            :to="{ path: '/dashboard/school/register' }"
            >Register Student</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link"
            :to="{ path: '/dashboard/school/students' }"
          >
            Student List
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link"
            :to="{ path: '/dashboard/school/staffs' }"
          >
            Staff List
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link"
            :to="{ path: '/dashboard/school/classes' }"
          >
            Classess
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link"
            :to="{ path: '/dashboard/school/subjects' }"
          >
            Subjects
          </router-link>
        </li>
      </ul>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "school",
};
</script>

<style scoped>
.school {
  min-height: 100vh;
  margin-top: 5rem;
}
a {
  color: black;
}
.nav-item {
  border-radius: 0.5rem;
  border: 1px solid black;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  text-transform: uppercase;
  font-weight: bold;
  margin: 0.2rem;
}
.nav-item:hover {
  background: rgb(0, 98, 255);
  color: white i !important;
  border-radius: 0.5rem;
  border: none;
}
.nav-item a:hover {
  color: white;
  border-radius: 0.5rem;
  border: none;
}
.nav-item a:active {
  background: rgb(0, 98, 255);
  color: white i !important;
}

@media screen and (max-width: 860px) {
  .school {
    margin: 0.1rem !important;
  }
}
</style>