<template>
  <div class="overview pt-5">
    <div class="cards1 mt-4">
      <div class="card text-white bg-primary mb-3">
        <router-link
          class="nav-link"
          :to="{ path: '/dashboard/school/students' }"
        >
          <div class="card-header">Total Students</div>
        </router-link>

        <div class="card-body">
          <p class="card-text" v-if="loading">Loading...</p>
          <h1 class="card-text">{{ totalStudents }}</h1>
        </div>
      </div>

      <div class="card text-white bg-secondary mb-3">
        <router-link
          class="nav-link"
          :to="{ path: '/dashboard/school/staffs' }"
        >
          <div class="card-header">Total Staffs</div>
        </router-link>
        <div class="card-body">
          <p class="card-text" v-if="loading">Loading...</p>
          <h1 class="card-text">{{ totalStaffs }}</h1>
        </div>
      </div>
    </div>
    <div class="cards">
      <div class="card text-white bg-success mb-3">
        <router-link
          class="nav-link"
          :to="{ path: '/dashboard/school/classes' }"
        >
          <div class="card-header">Classes: {{ classes.length }}</div>
        </router-link>

        <ul class="text-left">
          <li
            class="mt-2"
            v-for="subject_class in classes"
            :key="subject_class._id"
          >
            <router-link :to="{ path: 'class/' + subject_class._id }">
              {{ subject_class.title }}</router-link
            >
          </li>
        </ul>
        <div class="card-body px-0">
          <p class="card-text" v-if="loading">Loading...</p>
        </div>
      </div>

      <div class="card text-white bg-danger mb-3">
        <router-link
          class="nav-link"
          :to="{ path: '/dashboard/school/subjects' }"
        >
          <div class="card-header">Subjects: {{ subjects.length }}</div>
        </router-link>
        <div class="card-body px-0">
          <p class="card-text" v-if="loading">Loading...</p>
          <ul class="text-left">
            <li class="mt-2" v-for="subject in subjects" :key="subject._id">
              <router-link :to="{ path: 'subject/' + subject._id }">
                {{ subject.title }}</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "overview",

  computed: {
    ...mapGetters({
      totalStudents: "totalStudents",
      totalStaffs: "totalStaffs",
      loading: "loading",
      classes: "getClasses",
      subjects: "getSubjects",
    }),
  },
};
</script>

<style scoped>
.overview {
  overflow: auto;
}
.cards {
  margin-left: 2rem;
  display: flex;
  flex-wrap: wrap;
  flex-basis: 1rem;
  flex-direction: row;
}
.card {
  margin: 1rem;
  width: 13rem;
  height: fit-content;
}

.cards1 {
  display: flex;
  margin-left: 2rem;
  flex-wrap: wrap;
  flex-basis: 1rem;
  flex-direction: row;
}
@media (max-width: 800px) {
  .overview .cards {
  }
  .card ul {
    list-style-type: none;
  }
}
</style>
