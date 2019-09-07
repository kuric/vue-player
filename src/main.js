import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import App from './App.vue';
Vue.use(Vuetify);

export default new Vuetify({ })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  components: { App },
  template: '<App/>'
})