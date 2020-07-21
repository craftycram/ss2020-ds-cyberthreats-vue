<template>
  <vue-p5 class="p5" @setup="setup" @draw="draw" @click="$emit('click-event')"></vue-p5>
</template>

<script>
// import axios from 'axios'
import VueP5 from 'vue-p5';

export default {
  components: {
    "vue-p5": VueP5
  },
  data: function () {
    return {
      attack: Object,
      zoom: 4,
      yOffset: 100,
      attacks: [],
      startX: 10,
    }
  },
  mounted() {
    this.sockets.subscribe('attack', (data) => {
      this.attack = data;
      const distance = Math.sqrt(Math.pow((data.DestinationCoords[0] - data.OriginCoords[0]), 2) +  Math.pow((data.DestinationCoords[1] - data.OriginCoords[1]), 2));
      this.attacks.push(distance);
    });
  },
  methods: {
    setup(sketch) {
      sketch.createCanvas(sketch.displayWidth, sketch.displayHeight);
    },
    draw(sketch) {
      const hue = Math.floor(sketch.map(sketch.mouseX, 0, sketch.displayWidth, 0, 360));
      const light = Math.floor(sketch.map(sketch.mouseY, 0, sketch.displayHeight, 100, 10));
      const color = sketch.color(`hsl(${hue}, 100%, ${light}%)`);
      sketch.clear();
      sketch.background(0);
      sketch.circle(sketch.mouseX, sketch.mouseY, 10);
      sketch.fill(color);
      sketch.stroke(color);
      this.startX = 10;
      for (let i = 0; i < this.attacks.length; i++) {
        const attack = this.attacks[i];
        sketch.line(this.startX, sketch.height / 2 + attack / 2 * 3, this.startX, sketch.height / 2 - attack / 2 * 3);
        this.startX += 10;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.p5 {
  cursor: none;
}
</style>
