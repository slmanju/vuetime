import 'babel-polyfill'
import './global-components'
import Vue from 'vue'

import router from './router'
import AppLayout from './components/AppLayout.vue'

import VueFetch from './plugins/fetch'

Vue.use(VueFetch)

new Vue({
    el: '#app',
    render: h => h(AppLayout),
    router,
})