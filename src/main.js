import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

import axios from 'axios'
// use
Vue.use(mavonEditor)
Vue.use(axios)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
