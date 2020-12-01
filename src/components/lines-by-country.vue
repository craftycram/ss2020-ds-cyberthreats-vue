<template>
      <div>
          Attack from {{attack.Origin}} to {{attack.DestinationName}}
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
    axios.get('https://cyberbackend.glados.itmr-dev.de/')
      .then(response => {
        this.countrys = response.data.countrys;
      })
      .catch(err => {
        console.log(err)
      });
  },
  methods: {
    setup(sketch) {
      sketch.createCanvas(1800, 1000);
      sketch.background(230, 230, 230);
      //sketch.translate(sketch.width / 2, sketch.height / 2);
      // sketch.scale(1, 1);
    },
    draw(sketch) {      
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
      sketch.line(xPosOrigin, 0, xPosDestination, sketch.height);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
