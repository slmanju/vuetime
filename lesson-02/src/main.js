import 'babel-polyfill'
import './global-components'
import Vue from 'vue'

import router from './router'
import AppLayout from './components/AppLayout.vue'

new Vue({
    el: '#app',
    render: h => h(AppLayout),
    router,
})