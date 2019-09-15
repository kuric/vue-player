import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import Player from './Player.vue';
import {Howl, Howler} from 'howler';
Vue.use(Vuetify);

export default new Vuetify({ })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  vuetify: new Vuetify({
    theme: {
      dark: true
    }
  }),
  components: { Player },
  template: '<Player/>'
})
