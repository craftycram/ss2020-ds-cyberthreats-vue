import Vue from 'vue'
import App from './App.vue'
import VueSocketIO from 'vue-socket.io'

Vue.use(new VueSocketIO({
  debug: true,
  connection: 'wss://localhost:3000',
  options: {}
}))

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
