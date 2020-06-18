<template>
  <div>
    <h1>Cyberthreats</h1>
    <h2>Datenvisualisierung</h2>
    <div>
      <div
      class="attack"
      v-for="attack in attacks"
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
      attacks: undefined
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
  }
}
</script>

<style>
.attack{
  background-color: grey;
  display: inline-block
}
</style>