
import Vue from 'vue'
import router from './router'
import App from './App'
  import $ from 'jquery'
import { mokuais} from '@/public'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
axios.defaults.baseURL = 'api/'
Vue.prototype.axios = axios;
Vue.use(mokuais)
Vue.use(ElementUI);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
