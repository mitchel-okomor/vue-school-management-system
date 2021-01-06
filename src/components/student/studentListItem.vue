<template>
<fragment>
        <th scope="row">{index+1}</th>
  <tr v-for="student in students" :key="student._id">
<td >{{student.firstname}}</td>
<td >{{student.lastname}}</td>
<td >{{student.phone}}</td>
<td >{{student.subject_class}}</td>
<td >{{student.address}}</td>
<td >{{student.state_of_origin}}</td>
</tr>
</fragment>
</template>

<script>
import {fragment} from 'vue-fragment'

export default {
  name: 'student-list-item',
  components: { fragment },
  props:["students"],
  
  mounted(){
console.log(this.students)
  }
}
</script>

<style>

</style>