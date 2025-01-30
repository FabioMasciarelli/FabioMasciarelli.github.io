<script>
import Main from './components/Main.vue';

export default {
  components: {
    Main,
  },
}
</script>

<template>
  <div>
    <video autoplay muted loop id="myVideo">
      <source src="./assets/code.mp4" type="video/mp4">
      Your browser does not support HTML5 video.
    </video>
    <Main />
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
