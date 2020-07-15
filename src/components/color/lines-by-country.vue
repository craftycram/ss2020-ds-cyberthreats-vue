<template>
      <div>
          <!--Attack from {{attack.Origin}} to {{attack.DestinationName}}-->
          <vue-p5 v-on="this"></vue-p5>
      </div>
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
      finalCountrys: []
    }
  },
  mounted() {
    this.sockets.subscribe('attack', (data) => {
      this.attack = data;
    });
    axios.get('http://82.165.116.159:3000/countrys')
      .then(response => {
        this.countrys = response.data.countrys;
      })
      .catch(err => {
        console.log(err)
      });
  },
  methods: {
    setup(sketch) {
      //sketch.createCanvas(1800, 1000);
      sketch.createCanvas(sketch.displayWidth, sketch.displayHeight);
      sketch.background(0);
      //sketch.translate(sketch.width / 2, sketch.height / 2);
      // sketch.scale(1, 1);
    },
    draw(sketch) {      
      sketch.stroke(255);
      const spacing = sketch.width / (this.countrys.length + 2);
      
      for (let i = 0; i < this.countrys.length; i++) {
        const country = this.countrys[i];
        const tmpObj = {
          name: country,
          xPos: spacing * i + 1,
        }
        this.finalCountrys.push(tmpObj)
      }
      const xPosOrigin = this.finalCountrys.find((country) => this.attack.OriginCode == country.name).xPos;
      const xPosDestination = this.finalCountrys.find((country) => this.attack.Destination == country.name).xPos;
      console.log(xPosOrigin);
      console.log(xPosDestination);
      sketch.line(xPosOrigin, 0, xPosDestination, sketch.height);
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
