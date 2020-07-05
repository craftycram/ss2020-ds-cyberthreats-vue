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
    }
  },
  mounted() {
    this.sockets.subscribe('attack', (data) => {
      console.log(data);
      this.attack = data;
      this.startX += 10;
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
      sketch.stroke(0);
      const distance = Math.sqrt(Math.pow((this.attack.OriginCoords[0] - this.attack.DestinationCoords[0]), 2) +  Math.pow((this.attack.OriginCoords[1] - this.attack.DestinationCoords[1]), 2));
      console.log(distance);
      sketch.line(this.startX, sketch.canvas.height / 2 + distance / 2, this.startX, sketch.canvas.height / 2 - distance / 2);
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
