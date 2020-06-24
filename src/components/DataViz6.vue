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
      console.log(data);
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
      const colorOrigin = sketch.color(0, 255, 0); // Define color 'c'
      const colorDestination = sketch.color(255, 0, 0); // Define color 'c'
      sketch.fill(colorOrigin); // Use color variable 'c' as fill color
      sketch.noStroke();
      sketch.fill(colorOrigin);
      sketch.circle(this.attack.OriginCoords[1] * this.zoom, -this.attack.OriginCoords[0] * this.zoom * 2 + this.yOffset, 10)
      sketch.fill(colorDestination);
      sketch.circle(this.attack.DestinationCoords[1] * this.zoom, -this.attack.DestinationCoords[0] * this.zoom * 2 + this.yOffset, 10)
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
