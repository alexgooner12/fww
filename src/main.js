import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Home from './components/Home';
import Statistics from './components/Statistics';

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use('svg-to-vue-component/loader');

const router = new VueRouter({
  routes: [
    {
      path: '/', component: Home,
    },
    {
      path: '/statistics', component: Statistics,
    }
  ],
  mode: 'history',
  linkExactActiveClass: "exact-active",
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
