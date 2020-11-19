<template>
  <div id="app">
    <play-music/>
  </div>
</template>

<script>
import playMusic from './components/playMusic.vue';

export default {
  name: 'App',
  components: {
    playMusic,
  },
};
</script>

<style lang="scss">
@import "./assets/all.scss";

#app {
  font-family: Century Gothic,Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
