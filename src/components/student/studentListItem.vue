<template>
<div>list</div>
</template>

<script>
//import {Fragment} from 'vue-fragment'

export default {
 name: 'Test',
  //components: { Fragment },
  props:["studentList"],
  
  mounted(){
console.log(this.studentList)
  }
}
</script>

<style>

</style>