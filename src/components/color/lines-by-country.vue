<template>
  <vue-p5 class="p5" @setup="setup" @draw="draw" @click="$emit('click-event')"></vue-p5>
</template>

<script>
// import axios from 'axios'
import VueP5 from 'vue-p5';
import axios from 'axios';

export default {
  components: {
    "vue-p5": VueP5
  },
  data: function () {
    return {
      attack: Object,
      zoom: 4,
      yOffset: 100,
      countrys: [],
      lines: [],
      finalCountrys: [],
      sketchWidth: 0,
    }
  },
  mounted() {
    axios.get('https://cyberbackend.glados.itmr-dev.de/')
      .then(response => {
        this.countrys = response.data.countrys;
      })
      .catch(err => {
        console.log(err)
      });
    this.sockets.subscribe('attack', (data) => {
      this.attack = data;
      const spacing = this.sketchWidth / (this.countrys.length + 2);
      for (let i = 0; i < this.countrys.length; i++) {
        const country = this.countrys[i];
        const tmpObj = {
          name: country,
          xPos: spacing * i + 1,
        }
        this.finalCountrys.push(tmpObj)
      }
      const xPosOrigin = this.finalCountrys.find((country) => data.OriginCode == country.name).xPos;
      const xPosDestination = this.finalCountrys.find((country) => data.Destination == country.name).xPos;
      this.lines.push({x1: xPosOrigin, y1: 0, x2: xPosDestination, y2: 'sketch.height'});
    });
  },
  methods: {
    setup(sketch) {
      sketch.createCanvas(sketch.displayWidth, sketch.displayHeight);
      this.sketchWidth = sketch.displayWidth;
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
      for (let i = 0; i < this.lines.length; i++) {
        const line = this.lines[i];
        sketch.line(line.x1, 0, line.x2, sketch.height);
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
