<template>
  <div>
    <h1>Cyberthreats</h1>
    <h2>Datenvisualisierung</h2>
    <div class="controls">
      {{rangeMin}} / {{rangeMax}} | {{attacks.length}}
      Minimum <input type="range" min="0" :max="attacks.length" v-model="rangeMin" id="rangeStart">
      Maximum <input type="range" :min="rangeMin" :max="attacks.length" v-model="rangeMax" id="rangeEnd">
    </div>
    <div class="attacks">
      <table>
        <tr>
          
        <th>Ursprung</th>
        <th>Ziel</th>
        </tr>
      <tr
      class="attack"
      v-for="attack in rangeOfAttacks"
      :key="attack.id"
      >
      <td>
        {{attack.Origin}}
      </td>
      <td>
        {{attack.DestinationName}}
      </td>
    </tr>
      </table>
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
    axios.get('http://craftycram.goip.de:3000')
      .then(response => {
        this.attacks = response.data;
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
th, td {
  text-align: left;
}
</style>