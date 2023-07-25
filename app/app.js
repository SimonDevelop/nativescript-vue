import Vue from 'nativescript-vue';
import RadSideDrawer from 'nativescript-ui-sidedrawer/vue';

Vue.use(RadSideDrawer);

import App from './components/App';

Vue.config.silent = !__DEV__;

const message = {
  created() {
    console.log('bonjour');
  },
};

new Vue({
  render: (h) => h(App),
  mixins: [message],
}).$start();
