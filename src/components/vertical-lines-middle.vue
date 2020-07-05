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
      startX: 10,
      attacks: []
    }
  },
  mounted() {
    this.sockets.subscribe('attack', (data) => {
      console.log(data);
      this.attack = data;
      const distance = Math.sqrt(Math.pow((data.DestinationCoords[0] - data.OriginCoords[0]), 2) +  Math.pow((data.DestinationCoords[1] - data.OriginCoords[1]), 2));
      this.attacks.push(distance);
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
      sketch.clear();
      sketch.background(230, 230, 230);
      sketch.stroke(0);
      for (let i = 0; i < this.attacks.length; i++) {
        const attack = this.attacks[i];
        const spacing = 10;
        const posX = ((sketch.canvas.width / 2) - ((this.attacks.length * spacing) / 2)) + spacing * i;
        sketch.line(posX, sketch.canvas.height / 2 + attack / 2, posX, sketch.canvas.height / 2 - attack / 2);
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
