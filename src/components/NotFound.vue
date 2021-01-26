<template>
  <div class="not-found">
    <div>
      <h1>404</h1>
      <p>Page Not Found or under construction</p>
      <router-link class="btn btn-primary" :to="{ path: '/' }"
        >Return to Home</router-link
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.not-found {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
}
h1 {
  font-size: 10rem;
}
</style>