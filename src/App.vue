<script>
import Navbar from './components/Navbar.vue';

export default {
  components: {
    Navbar,
  },
}
</script>

<template>
  <div>
    <video autoplay muted loop id="myVideo">
      <source src="./assets/code.mp4" type="video/mp4">
      Your browser does not support HTML5 video.
    </video>
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<style scoped lang="scss">
div {
  height: 100vh;

  #myVideo {
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
  }
}

</style>
