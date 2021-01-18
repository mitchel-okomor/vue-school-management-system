<template>
  <div class="card m-5 mt-1" style="width: 80%">
    <ul class="list-group list-group-flush text-left">
      <li class="list-group-item" v-for="info in infoList" :key="info._id">
   <info-item :info="info"></info-item>
      </li>
    </ul>
  </div>
</template>

<script>
import InfoItem from './infoItem.vue';


export default {
  name: "infoList",
  props: ["infoList"],
 components: {InfoItem}
};
</script>

<style scoped>

</style>