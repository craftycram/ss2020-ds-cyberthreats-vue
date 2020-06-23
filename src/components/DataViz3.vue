<template>
      <div>
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
    this.sockets.subscribe('', (data) => {
      console.log(data);
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
