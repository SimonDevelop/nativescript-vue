import Vue from 'nativescript-vue';
import Vuex from 'vuex';

import counter from './modules/counter';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    counter,
  },
});

Vue.prototype.$store = store;

export default store;
