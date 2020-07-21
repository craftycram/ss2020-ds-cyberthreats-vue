<template>
  <div>
    <!--<div>
      <b-button v-on:click="count">Ansicht wechseln</b-button>
      {{id}}
    </div>
    <br>-->
    <b-alert
      :show="dismissCountDown"
      dismissible
      variant="danger"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged"
    >
      <p>This website contains fast flashing images.</p>
      <p>It may cause discomfort and trigger seizures for people with photosensitive epilepsy.</p>
      <p>Viewers discretion ist advised. Safety first!</p>
      <p>This alert will dismiss after {{ dismissCountDown }} seconds...</p>
      <b-progress
        variant="danger"
        :max="dismissSecs"
        :value="dismissCountDown"
        height="4px"
      ></b-progress>
    </b-alert>

    <intro @start-event="showAlert" v-show="id==0"></intro>
    <data-viz1 v-on:click.native="count" v-show="id==1"></data-viz1>
    <data-viz2 v-on:click.native="count" v-show="id==2"></data-viz2>
    <data-viz3 v-on:click.native="count" v-show="id==3"></data-viz3>
    <data-viz4 v-on:click.native="count" v-show="id==4"></data-viz4>
    <data-viz5 v-on:click.native="count" v-show="id==5"></data-viz5>
    <data-viz6 v-on:click.native="count" v-show="id==6"></data-viz6>
  </div>
</template>

<script>
  import Intro from '../components/Intro.vue';
  import DataViz1 from '../components/color/circles-by-destination.vue';
  import DataViz2 from '../components/color/circles-by-origin.vue';
  import DataViz3 from '../components/color/lines-by-country.vue';
  import DataViz4 from '../components/color/vertical-lines-equal.vue';
  import DataViz5 from '../components/color/vertical-lines-middle.vue';
  import DataViz6 from '../components/color/vertical-lines-from-left.vue';

  export default {
    name: 'Colors',
    components: {
      Intro,
      DataViz1,
      DataViz2,
      DataViz3,
      DataViz4,
      DataViz5,
      DataViz6,
    },
    data: function () {
      return {
        id: 0,
        dismissSecs: 20,
        dismissCountDown: 0,
      }
    },
    methods: {
      countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
      },
      showAlert() {
        this.dismissCountDown = this.dismissSecs
        this.count();
      },
      count() {
        console.log('click');
        if (this.id < 6) {
          this.id++;
        } else {
          this.id = 1;
        }
      },
      changeClass(value) {
        if (value === this.id) {
          return 'visible';
        } else {
          return 'invisible';
        }
      }
    }
  }
</script>
<style>
  * {
    margin: 0px;
    padding: 0px;
  }
  .visible {
    display: inline;
  }
  .invisible {
    display: none;
  }
</style>