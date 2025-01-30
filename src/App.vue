<script>
import HomePage from './pages/HomePage.vue';

export default {
  components: {
    HomePage,
  },
}
</script>

<template>
  <main>
    <video autoplay muted loop id="myVideo">
      <source src="./assets/code.mp4" type="video/mp4">
      Your browser does not support HTML5 video.
    </video>
    <HomePage />
    <router-view></router-view>
  </main>
</template>

<style scoped lang="scss">
main {
  height: 100vh;

  #myVideo {
    position: absolute;
    z-index: -1;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
  }
}

</style>
