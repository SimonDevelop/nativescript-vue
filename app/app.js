import Vue from 'nativescript-vue';
import RadSideDrawer from 'nativescript-ui-sidedrawer/vue';

Vue.use(RadSideDrawer);

import App from './components/App';
import Store from './store';

Vue.config.silent = !__DEV__;

const message = {
  created() {
    console.log('bonjour');
  },
};

new Vue({
  Store,
  render: (h) => h(App),
  mixins: [message],
}).$start();
