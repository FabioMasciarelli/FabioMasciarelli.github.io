<script>
import HomePage from './pages/HomePage.vue';
import NavBar from './components/NavBar.vue';

export default {
  components: {
    HomePage,
    NavBar
  }
}
</script>

<template>
  <main>
    <video autoplay muted loop id="myVideo">
      <source src="./assets/code.mp4" type="video/mp4">
      Your browser does not support HTML5 video.
    </video>
    <NavBar />
    <div>
      <router-view></router-view>
    </div>
  </main>
</template>

<style scoped lang="scss">
main {
  height: 100vh;
  position: relative;

  #myVideo {
    position: fixed;
    z-index: -1;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
  }
}
</style>
