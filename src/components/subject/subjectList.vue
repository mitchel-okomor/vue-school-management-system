<template>
  <div class="card m-5 mt-1" style="width: 80%">
    <ul class="list-group list-group-flush text-left">
      <li class="list-group-item" v-for="subject in subjectList" :key="subject._id">
   <subject-item :subject="subject"></subject-item>
      </li>
    </ul>
  </div>
</template>

<script>
import SubjectItem from './subjectItem.vue';


export default {
  name: "subjectList",
  props: ["subjectList"],
 components: {SubjectItem}
};
</script>

<style scoped>

</style>