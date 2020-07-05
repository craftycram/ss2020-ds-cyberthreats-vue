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
      attacks: {},
    }
  },
  mounted() {
    this.sockets.subscribe('attack', (data) => {
      this.attack = data;
      const country = data.Destination;
      if (this.attacks[country] !== undefined) {
        this.attacks[country].push(data);
      } else {
        this.attacks[country] = [];
        this.attacks[country].push(data);
      }
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
      const maxCircleRadius = 1000;
      let attackCount = 0;
      sketch.fill(255);
      for (let i = 0; i < Object.keys(this.attacks).length; i++) {
        console.log(true);
        const country = this.attacks[i];
        attackCount += country.length;
      }
      for (let i = 0; i < Object.keys(this.attacks).length; i++) {
        const country = this.attacks[i];
        const radius = (maxCircleRadius / attackCount) * country.length;
        radius;
        const colorDestination = sketch.color(255, 0, 0); // Define color 'c'
        sketch.noStroke(); // Don't draw a stroke around shapes
        sketch.fill(colorDestination); // Use color variable 'c' as fill color
        sketch.circle(country[0].OriginCoords[0], country[0].OriginCoords[1], 10);
      }
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
