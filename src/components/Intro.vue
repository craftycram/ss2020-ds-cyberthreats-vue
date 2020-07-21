<template>
  <div class="main">
    <b-dropdown variant="secondary">
      <template v-slot:button-content>
        <b-icon icon="flag" aria-hidden="true"></b-icon> {{$t('lang')}}
      </template>

      <b-dropdown-item-button @click="changeLang('de')">Deutsch</b-dropdown-item-button>
      <b-dropdown-item-button @click="changeLang('en')">English</b-dropdown-item-button>
    </b-dropdown>

    <b-jumbotron bg-variant="dark" header="Cyberthreats" :lead="$t('lead')">
    <p>
      <b-icon icon="cursor" class="h2 mb-2" shift-v="-6"></b-icon>
      {{$t('tut-click')}}
    </p>
    <p>
      <b-icon icon="arrows-move" class="h2 mb-2" shift-v="-6"></b-icon>
      {{$t('tut-move1')}}
      {{$t('tut-move2')}}
    </p>
    <br>
    <b-button style="margin-right: 10px;" variant="primary" @click="$emit('start-event')">{{$t('btn-start')}}</b-button>
    <b-button style="margin-right: 70%;" variant="secondary" href="https://projects.hfg-gmuend.de/iot/2020ss-iot2-darstellensimulation/dokumentation-darstellen-simulation-viktoria-galver-marc-rufeis/einfuhrung">{{$t('btn-docu')}}</b-button>
  </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: 'Intro',
  methods: {
    changeLang(lang) {
      this.$i18n.locale = lang;
      this.$router.push(lang)
    }
  }
}
</script>

<style>
  .main {
    width: 100vw;
    height: 100vh;
    padding: 100px;
    background-image: url("../assets/canvas-merged.png")
  }

  .btn-group.dropdown.b-dropdown{
    position: absolute;
    right: 20px;
    top: 20px;
  }
</style>