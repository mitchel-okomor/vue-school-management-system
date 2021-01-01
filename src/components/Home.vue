<template>
  <main class="home d-flex justify-content-center">
    <div class="container-fluid welcome pb-5">
      <h1 class="mt-5">Welcome to C-drive Schools</h1>
      <p>Knowledge open doors to possibities</p>
      <button class="btn btn-primary mt-3">
        <router-link :to="{ path: '/admission' }"> Take admission</router-link>
      </button>
    </div>
  </main>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
main {
  min-height: 100vh;
}

.welcome{
    background-color: aliceblue;
    width: 30%;
    margin-top: 7rem;
    margin-bottom: 4rem;
}
</style>
