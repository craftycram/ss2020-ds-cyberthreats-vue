<template>
      <div>
        Attack from {{attack.Origin}} to {{attack.DestinationName}}
      </div>
</template>

<script>
// import axios from 'axios'

export default {
  data: function () {
    return {
      attack: Object
    }
  },
  mounted() {
    this.sockets.subscribe('attack', (data) => {
      this.attack = data;
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
