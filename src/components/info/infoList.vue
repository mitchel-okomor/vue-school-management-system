<template>
     <div class="card m-5 mt-1" style="width: 18rem">
      <ul class="list-group list-group-flush">
        <li class="list-group-item"  v-for="info in infos" :key="info._id"><span class="mr-4">{{info.title}}</span><span class="">{{info.description}}</span></li>
      </ul>
    </div>
</template>

<script>
export default {
name: "info-list",
props: ['infos'],

mounted(){
    console.log(this.infos)
}

}
</script>

<style scoped>
span{
    color:black
}
</style>