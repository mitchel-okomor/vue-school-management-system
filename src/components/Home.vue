<template>
  <main class="home d-flex justify-content-center">
    <div class="container-fluid welcome">
      <h1 class="mt-5">Welcome</h1>
      <p>Knowledge is the key</p>
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
