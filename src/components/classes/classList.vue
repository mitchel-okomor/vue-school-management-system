<template>
  <div class="card m-5 mt-1" style="width: 80%">
    <ul class="list-group list-group-flush text-left">
      <li class="list-group-item" v-for="subject_class in classList" :key="subject_class._id">
   <class-item :subject_class="subject_class"></class-item>
      </li>
    </ul>
  </div>
</template>

<script>
import ClassItem from './classItem.vue';


export default {
  name: "classList",
  props: ["classList"],
 components: {ClassItem}
};
</script>

<style scoped>

</style>