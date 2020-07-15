<template>
  <div>
    <div>
      <b-button v-on:click="count">Ansicht wechseln</b-button>
      {{id}}
    </div>
    <br>
    <div>
      <data-viz1></data-viz1>
      <data-viz2></data-viz2>
      <data-viz3></data-viz3>
      <data-viz4></data-viz4>
      <data-viz5></data-viz5>
      <data-viz6></data-viz6>
    </div>
  </div>
</template>

<script>

import DataViz1 from '../components/color/circles-by-destination.vue';
import DataViz2 from '../components/color/circles-by-origin.vue';
import DataViz3 from '../components/color/lines-by-country.vue';
import DataViz4 from '../components/color/vertical-lines-equal.vue';
import DataViz5 from '../components/color/vertical-lines-middle.vue';
import DataViz6 from '../components/color/vertical-lines-from-left.vue';

export default {
  name: 'Colors',
  components: {
    DataViz1,
    DataViz2,
    DataViz3,
    DataViz4,
    DataViz5,
    DataViz6,
  },
  data: function () {
    return {
      id: 1,
    }
  },
  methods: {
    count() {
      if(this.id < 6) {
        this.id++;
      } else {
        this.id = 1;
      }
    }
  }
}
</script>

<style>
</style>