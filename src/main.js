// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Hooper from 'hooper';
import 'hooper/dist/hooper.css';
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'




import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faJs, faVuejs, faFacebookF } from '@fortawesome/free-brands-svg-icons'
library.add(faFacebookF)
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
library.add(faFacebook)
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
library.add(faInstagram)
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
library.add(faTwitter)





Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
