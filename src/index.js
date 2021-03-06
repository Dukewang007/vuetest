// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

import App from "./App.vue";

import router from "./routers";
import 'bootstrap/dist/css/bootstrap.css';

Vue.config.productionTip = false
Vue.config.devtools = true
var  app = new Vue({
  el:'#app',
  router,
  template: '<App/>',
  components:{App}
})

