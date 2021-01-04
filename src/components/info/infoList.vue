<template>
  <div class="card m-5 mt-1" style="width: 80%">
    <ul class="list-group list-group-flush text-left">
      <li class="list-group-item" v-for="info in infoList" :key="info._id">
        <div class="row justify-content-between">
          <div>
            <span class="mr-4 ml-2 font-weight-bold">{{ info.title }}:</span
            ><span class="">{{ info.description }}</span>
          </div>
          <div>
            <i class="fa fa-edit mr-4 text-primary" v-on:click="togglePanel(this)"></i
            ><i class="fa fa-times-circle mr-4 text-danger"></i>
          </div>
        </div>
        <div class="edit" v-if="panelOpen"><input type="test" value=""></div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "infoList",
  props: ["infoList"],
  data() {
    return {
    };
  },

  methods: {
    togglePanel(el) {
      console.log(el)
    },
  },
};
</script>

<style scoped>
span {
  color: black;
}
i {
  cursor: pointer;
}
</style>