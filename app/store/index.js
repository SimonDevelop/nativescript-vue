import Vue from 'nativescript-vue';
import Vuex from 'vuex';

import counter from './modules/counter';
import connected from './modules/connected';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    counter,
    connected,
  },
});

Vue.prototype.$store = store;

export default store;
