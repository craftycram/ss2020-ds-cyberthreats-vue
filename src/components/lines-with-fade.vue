<template>
      <div>
          Attack from {{attack.Origin}} to {{attack.DestinationName}}
          <vue-p5 v-on="this"></vue-p5>
      </div>
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
      yOffset: 100
    }
  },
  mounted() {
    this.sockets.subscribe('attack', (data) => {
      this.attack = data;
    });
  },
  methods: {
    setup(sketch) {
      sketch.translate(sketch.width / 2, sketch.height / 2);
      sketch.scale(1, -1);
      sketch.createCanvas(1800, 1000);
      sketch.background(230, 230, 230);
    },
    draw(sketch) {
      // sketch.text(`${this.attack.Origin} > ${this.attack.DestinationName}`, 10, 10);
      sketch.translate(sketch.width / 2, sketch.height / 2);
      // sketch.scale(1, -1);
      const c1 = sketch.color(255, 0, 0);
      const c2 = sketch.color(0, 255, 0);
      const c = sketch.lerpColor(c1, c2, 0.5);
      sketch.stroke(c);
      sketch.strokeWeight(20);
      sketch.line(this.attack.OriginCoords[1] * this.zoom, -this.attack.OriginCoords[0] * this.zoom * 2 + this.yOffset, this.attack.DestinationCoords[1] * this.zoom, -this.attack.DestinationCoords[0] * this.zoom * 2 + this.yOffset)
    }
  },
  render(h) {
    return h(VueP5, {on: this});
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
