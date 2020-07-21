<template>
  <div class="main">
    <b-jumbotron bg-variant="dark" header="Cyberthreats" lead="Realtime visualization of worldwide cyberthreat data">
    <p>
      <b-icon icon="cursor" class="h2 mb-2" shift-v="-6"></b-icon>
      Click on the screen to cycle the visualizations.
    </p>
    <br>
    <b-button style="margin-right: 10px;" variant="primary" @click="emit('click-event')">Get started</b-button>
    <b-button variant="secondary" href="https://projects.hfg-gmuend.de/iot/2020ss-iot2-darstellensimulation/dokumentation-darstellen-simulation-viktoria-galver-marc-rufeis/einfuhrung">Documentation (DE)</b-button>
  </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: 'Intro'
}
</script>

<style>
  .main {
    width: 100vw;
    height: 100vh;
    padding: 100px;
    background-image: url("../assets/canvas-merged.png")
  }
</style>