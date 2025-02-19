<script>
import NavBar from './components/NavBar.vue';

export default {
  data() {
    return {
      isLoading: true,
      progress: 0
    }
  },
  components: {
    NavBar
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2100);
    this.startLoading();
  },
  methods: {
    startLoading() {
      // Simula il caricamento
      const interval = setInterval(() => {
        this.progress += 1; // Incrementa la percentuale
        if (this.progress >= 100) {
          clearInterval(interval); // Ferma il caricamento al 100%
          this.$emit('loading-complete'); // Emetti un evento per notificare il completamento
        }
      }, 20);
    }
  }
}
</script>

<template>
  <main>
    <video autoplay muted loop id="myVideo">
      <source src="./assets/code.mp4" type="video/mp4">
      Your browser does not support HTML5 video.
    </video>
    <div class="loader" v-if="isLoading == true">
      <span class="progress">{{ progress }}%</span>
    </div>
    <div class="paginator" v-if="isLoading == false">
      <router-view></router-view>
    </div>
    <NavBar />
  </main>
</template>

<style scoped lang="scss">
@use "./style/partials/variables" as *;

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

.loader {  
  position: relative;
  margin: 300px auto;  
  --r1: 154%;
  --r2: 68.5%;
  width: 150px;
  aspect-ratio: 1;
  border-radius: 16px;
  background:
    radial-gradient(var(--r1) var(--r2) at top   ,#0000 79.5%, $orange 80%),
    radial-gradient(var(--r1) var(--r2) at bottom, $orange 79.5%,#0000 80%),
    radial-gradient(var(--r1) var(--r2) at top   ,#0000 79.5%, $orange 80%),
    #ccc;
  background-size: 50.5% 220%;
  background-position: -100% 0%,0% 0%,100% 0%;
  background-repeat:no-repeat;
  animation: l9 2s infinite linear;

  .progress {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
  color: black;
}
}
@keyframes l9 {
    33%  {background-position:    0% 33% ,100% 33% ,200% 33% }
    66%  {background-position: -100%  66%,0%   66% ,100% 66% }
    100% {background-position:    0% 100%,100% 100%,200% 100%}
}
</style>
