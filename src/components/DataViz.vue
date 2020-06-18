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
      loadedData: undefined
    }
  },
  mounted() {
    axios.get('http://localhost:3000')
      .then(response => {
        this.loadedData = response.data;
        console.log(this.loadedData.attacks[0]);
      })
      .catch(err => {
        console.log(err)
      });
  }
}
</script>

<style>

</style>