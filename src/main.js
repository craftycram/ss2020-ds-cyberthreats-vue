import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import VueSocketIO from 'vue-socket.io'
import { BootstrapVueIcons } from 'bootstrap-vue'
import VueI18n from 'vue-i18n';
import messages from './lang';

Vue.use(BootstrapVueIcons)

Vue.use(new VueSocketIO({
  debug: true,
  connection: 'https://cyberthreats.marcrufeis.de:3001/',
  options: {}
}))

Vue.use(VueI18n);
export const i18n = new VueI18n({
  locale: 'de',
  fallbackLocale: 'de',
  messages
});

Vue.config.productionTip = false

new Vue({
  i18n,
  render: h => h(App),
}).$mount('#app')
