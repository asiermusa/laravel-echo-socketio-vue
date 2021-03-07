import Vue from 'vue'
import Echo from 'laravel-echo'

window.io = require('socket.io-client')

import store from './store'

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

export default Vue
