<template>
  <div id="app">
    <Colors style="width: 100vw; height: 100vh;"></Colors>
  </div>
</template>

<script>
import Colors from './views/Colors.vue';

export default {
  name: 'App',
  components: {
    Colors,
  }
}
</script>

<style>
#app {
  font-family: 'Source Code Pro', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #000000;
  color: #bacada;
  margin: 0px;
}
</style>
