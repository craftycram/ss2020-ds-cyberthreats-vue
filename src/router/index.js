import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App.vue'
import RouterView from "../views/RouterView.vue";
import { i18n } from "../main.js";

Vue.use(VueRouter)

  const routes = [
    {
      path: "/:lang",
      component: RouterView,
      beforeEnter(to, from, next) {
        const lang = to.params.lang;
        if (!["en", "de"].includes(lang)) return next("de");
        if (i18n.locale !== lang) {
          i18n.locale = lang;
        }
        return next();
      },
      children: [
        {
          path: "home",
          name: "home",
          component: App
        },
      ]
    },
    {
      path: "*",
      redirect: "/de"
    }
  ]

const router = new VueRouter({
  mode: 'history',
  base: '/ss2020-ds-cyberthreats-vue/',
  //base: process.env.BASE_URL,
  routes
})

export default router
