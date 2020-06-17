import Vue from 'vue'
import App from './js/components/App.vue'
import store from './js/store/index'

Vue.config.productionTip = false

new Vue({  
  el: '#app',
  store: store,
  render: h => h(App),
})