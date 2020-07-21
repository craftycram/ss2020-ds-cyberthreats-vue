<template>
  <div id="app">
    <Colors style="width: 100vw; height: 100vh;"></Colors>
    <!--<DataViz msg="Welcome to Your Vue.js App"/>-->
    <!--<img alt="Vue logo" src="./assets/logo.png">-->
  </div>
</template>

<script>
//import DataViz from './components/lines-with-dots'
//import DataViz from './components/only-dots'
//import DataViz from './components/country-codes'

//--

//import DataViz from './components/circles-by-origin'
//import DataViz from './components/circles-by-destination'


// Linien nach Kontinent
// Koordinateen zu RGB Werten
// Farbe ändert sich pro Sekunde

//import DataViz from './components/vertical-lines-from-left'
//import DataViz from './components/vertical-lines-equal'
//import DataViz from './components/vertical-lines-middle'

//import DataViz from './components/lines-by-country'
import Colors from './views/Colors.vue';

export default {
  name: 'App',
  components: {
    Colors
    //DataViz
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
