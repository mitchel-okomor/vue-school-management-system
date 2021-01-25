<template>
  <div class="table-responsive">
    <form class="form-inline mb-5">
      <input
        class="form-control form-control-sm mr-2 w-75"
        type="text"
        placeholder="Search"
        aria-label="Search"
      />
    </form>

    <table class="table table-bordered table-striped">
      <thead class="thead-dark">
        <tr class="">
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Phone Number</th>
          <th scope="col">Class</th>
          <th scope="col">Address</th>
          <th scope="col">State of origin</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(staff, index) in staffs" :key="staff._id">
          <th>{{ index + 1 }}</th>
          <td>{{ staff.firstname }}</td>
          <td>{{ staff.lastname }}</td>
          <td>{{ staff.phone }}</td>
          <td>{{ staff.subject_class }}</td>
          <td>{{ staff.address }}</td>
          <td>{{ staff.state_of_origin }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "stafftList",
  props: ["staffs"],

  created() {
    console.log(this.staffs);
  },
};
</script>

<style scoped>
form {
  width: 50%;
  border: none;
}
tbody {
  background-color: lightgrey;
}

@media screen and (max-width: 860px) {
  .table {
    font-size: small;
  }
}
</style>