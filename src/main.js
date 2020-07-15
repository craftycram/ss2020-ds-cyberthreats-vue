import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import VueSocketIO from 'vue-socket.io'

Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://82.165.116.159:3001/',
  options: {}
}))

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
