<template>
<div class="table-responsive">
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
<tr v-for="(student, index) in students" :key="student._id">
  <th>{{index + 1}}</th>
<td >{{student.firstname}}</td>
<td >{{student.lastname}}</td>
<td >{{student.phone}}</td>
<td >{{student.subject_class}}</td>
<td >{{student.address}}</td>
<td >{{student.state_of_origin}}</td>
</tr>
  </tbody>
</table>
   </div>
</template>

<script>

export default {
  name: "studentList",
  props: ["students"],


};
</script>

<style scoped>
@media screen and (max-width: 860px) {
  .table{
    font-size: small;
 }
}
</style>