<template>
  <div>
    <h1>Cyberthreats</h1>
    <h2>Datenvisualisierung</h2>
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
        this.attacks = response.data.attacks;
        console.log(this.attacks[0]);
      })
      .catch(err => {
        console.log(err)
      });
  }
}
</script>

<style>

</style>