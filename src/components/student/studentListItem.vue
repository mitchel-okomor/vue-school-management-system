<template>
<Fragment>
<tr v-for="(student, index) in studentList" :key="student._id">
      <th scope="row">{{index+1}}</th>
<td>{{firstname}}</td>
<td>{{lastname}}</td>
<td>{{subject_class}}</td>
<td>{{address}}</td>
<td>{{phone}}</td>
<td></td>
<td><span>Edit</span> 
<span><button className="btn btn-danger"> Delete</button></span> 

</td>
    </tr>
    </Fragment>
</template>

<script>
import {Fragment} from 'vue-fragment'

export default {
 name: 'Test',
  components: { Fragment },
  props:["studentList"]
  
}
</script>

<style>

</style>