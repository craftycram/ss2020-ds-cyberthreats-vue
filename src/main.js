import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import VueSocketIO from 'vue-socket.io'
import { BootstrapVueIcons } from 'bootstrap-vue'

Vue.use(BootstrapVueIcons)

Vue.use(new VueSocketIO({
  debug: true,
  connection: 'https://cyberthreats.marcrufeis.de:3001/',
  options: {}
}))

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
