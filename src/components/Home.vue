<template>
  <main class="home d-flex justify-content-center">
    <div class="container-fluid welcome pb-5">
      <div>
        <h1 class="mt-5">Welcome to Our School</h1>
        <p>Knowledge open doors to possibities</p>
        <router-link :to="{ path: '/admission', name: 'take-admission' }">
          <button class="btn btn-primary mt-5">
            Take Admission
          </button></router-link
        >
      </div>
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
  background-image: url("../assets/education.svg");
  background-repeat: repeat-x;
}

.welcome {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  box-shadow: 1px 1px 3px 3px blue;
  opacity: 0.7;
  color: white;
  width: 30%;
  margin-top: 7rem;
  margin-bottom: 4rem;
  border-radius: 0.6rem;
}
h1 {
  background-color: black;
  font-weight: bold;
  color: white;
}
p {
  font-weight: bold;
}

@media screen and (max-width: 860px) {
  .welcome {
    width: 100%;
  }
}
</style>
