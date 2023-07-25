import Vue from 'nativescript-vue';
import Vuex from 'vuex';
import * as ApplicationSettings from 'application-settings';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    increment: (state) => state.count++,
    decrement: (state) => state.count--,
  },
});

Vue.prototype.$store = store;

module.exports = store;
