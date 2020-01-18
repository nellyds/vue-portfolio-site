import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueResource from 'vue-resource';
import vuetify from './plugins/vuetify';
import VuePaginate from 'vue-paginate';
Vue.use(VueResource);
Vue.use(VuePaginate);
Vue.config.productionTip = false;
require('./components');
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');
