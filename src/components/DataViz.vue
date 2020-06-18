<template>
  <div>
    <h1>Cyberthreats</h1>
    <h2>Datenvisualisierung</h2>
    <div class="controls">
      {{rangeMin}} / {{rangeMax}} | {{attacks.length}}
      Minimum <input type="range" min="0" :max="attacks.length" v-model="rangeMin" id="rangeStart">
      Maximum <input type="range" min="0" :max="attacks.length" v-model="rangeMax" id="rangeEnd">
    </div>
    <div class="attacks">
      <div
      class="attack"
      v-for="attack in rangeOfAttacks"
      :key="attack.id"
      :style="{ width: attack.id+'px' }"
      >
      {{attack.Origin}}
    </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data: function () {
    return {
      attacks: Array,
      rangeMin: 0,
      rangeMax: 50,
    }
  },
  mounted() {
    axios.get('http://localhost:3000')
      .then(response => {
        this.attacks = response.data;
        console.log(this.attacks[0]);
      })
      .catch(err => {
        console.log(err)
      });
  },
  computed: {
    rangeOfAttacks: function() {
      return this.attacks.slice(this.rangeMin, this.rangeMax)
    }
  }
}
</script>

<style>
.attack{
  background-color: grey;
  /*display: inline-block*/
}
</style>