import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Axios from 'axios'
import Echo from 'laravel-echo'
window.io = require('socket.io-client')

Vue.config.productionTip = false
Vue.prototype.$http = Axios;

if (store.state.token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = store.state.token
}

export var echo_instance = new Echo({
  broadcaster: "socket.io",
  host: 'http://127.0.0.1' + ':6001',
  // transports: ['websocket', 'polling', 'flashsocket'],
  auth: {
    headers: {
        Authorization: `Bearer ${store.state.token}`
    }
  }
})

Vue.prototype.$echo = echo_instance

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
