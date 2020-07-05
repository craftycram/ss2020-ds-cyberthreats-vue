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
      yOffset: 100,
      attacks: {},
      maxCircleRadius: 100,
    }
  },
  mounted() {
    this.sockets.subscribe('attack', (data) => {
      this.attack = data;
      const country = data.OriginCode;
      if (this.attacks[country] !== undefined) {
        this.attacks[country].push(data);
      } else {
        this.attacks[country] = [];
        this.maxCircleRadius += 20;
        this.attacks[country].push(data);
      }
    });
  },
  methods: {
    setup(sketch) {
      sketch.createCanvas(1800, 1000);
      sketch.background(230, 230, 230);
    },
    draw(sketch) {
      sketch.translate(sketch.width / 2, sketch.height / 2);
      sketch.scale(1, 1);
      sketch.clear();
      sketch.background(230, 230, 230);
      const color = sketch.color(255, 0, 0); // Define color 'c'
      sketch.noStroke(); // Don't draw a stroke around shapes
      sketch.fill(color); // Use color variable 'c' as fill color
      
      let attackCount = 0;

      for (const key in this.attacks) {
        const country = this.attacks[key];
        attackCount += country.length;
      }

      for (const key in this.attacks) {
        const country = this.attacks[key];
        const radius = (this.maxCircleRadius / attackCount) * country.length;
        sketch.circle(country[0].OriginCoords[1] * this.zoom, -country[0].OriginCoords[0] * this.zoom * 2 + this.yOffset, radius);
        //sketch.fill(0);
        //sketch.text(country[0].OriginCode, country[0].OriginCoords[1] * this.zoom, -country[0].OriginCoords[0] * this.zoom * 2 + this.yOffset);
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
