<template>
<fragment>
        <th scope="row">{index+1}</th>
  <tr v-for="(staff)in staffs" :key="staff._id">
<td >{{staff.firstname}}</td>
<td >{{staff.lastname}}</td>
<td >{{staff.phone}}</td>
<td >{{staff.subject_class}}</td>
<td >{{staff.address}}</td>
<td >{{staff.state_of_origin}}</td>
</tr>
</fragment>
</template>

<script>
import {fragment} from 'vue-fragment'

export default {
  name: 'staff-list-item',
  components: { fragment },
  props:["staffs"],
  
  created(){
console.log(this.staffs)
  }
}
</script>

<style>

</style>