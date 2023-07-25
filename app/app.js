import Vue from 'nativescript-vue';
import RadSideDrawer from 'nativescript-ui-sidedrawer/vue';
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.use(RadSideDrawer);

import App from './components/App';
import store from './store/counter';

Vue.config.silent = !__DEV__;

const message = {
  created() {
    console.log('bonjour');
  },
};

new Vue({
  render: (h) => h(App),
  mixins: [message],
  computed: {
    count(){
      return store.state.count
    }
  },
  methods: {
    increment() {
      store.commit('increment')
    },
    decrement() {
      store.commit('decrement')
    }
  }
}).$start();
