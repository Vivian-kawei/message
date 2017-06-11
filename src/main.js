// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Axios from 'axios';
import App from './app';
import router from './common/js/router';
import rootStore from './store/root.js';

Vue.config.productionTip = false;
Vue.prototype.$http = Axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: rootStore,
  template: '<app/>',
  components: { App }
});
