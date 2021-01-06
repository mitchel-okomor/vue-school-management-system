<template>
<table class="table table-borderless">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Venue</th>
      <th scope="col">Date</th>
      <th scope="col">Status</th>
      <th scope="col">Publish</th>
      <th scope="col">Complete</th>
      <th scope="col">Action</th>

    </tr> 
  </thead>
  <tbody>
       <student-list-item :studentList="students"></student-list-item>

  </tbody>
</table>
   
</template>

<script>
import StudentListItem from './studentListItem.vue';

export default {
  name: "studentListItem",
  props: ["students"],
components: {StudentListItem}


};
</script>

<style scoped>

</style>