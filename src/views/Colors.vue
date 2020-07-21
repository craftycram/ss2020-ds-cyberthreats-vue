<template>
  <div style="width: 100vw; height: 100vh;">
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
      class="alert"
    >
      <p>{{$t('alert1')}}</p>
      <p>{{$t('alert2')}}</p>
      <p>{{$t('alert3')}}</p>
      <p>{{$t('alert4.1')}} {{ dismissCountDown }} {{$t('alert4.2')}}</p>
      <b-progress
        variant="danger"
        :max="dismissSecs"
        :value="dismissCountDown"
        height="4px"
      ></b-progress>
    </b-alert>

    <intro class="viz" @start-event="showAlert" v-show="id==0"></intro>
    <data-viz1 class="viz" v-on:click.native="count" v-show="id==1"></data-viz1>
    <data-viz2 class="viz" v-on:click.native="count" v-show="id==2"></data-viz2>
    <data-viz3 class="viz" v-on:click.native="count" v-show="id==3"></data-viz3>
    <data-viz4 class="viz" v-on:click.native="count" v-show="id==4"></data-viz4>
    <data-viz5 class="viz" v-on:click.native="count" v-show="id==5"></data-viz5>
    <data-viz6 class="viz" v-on:click.native="count" v-show="id==6"></data-viz6>
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
        dismissSecs: 10,
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
  
  .alert {
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 2;
  }
  .viz {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0px;
    left: 0px;
    z-index: 1;
  }
</style>