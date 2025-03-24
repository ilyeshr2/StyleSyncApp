// app/main.js or app.js
import Vue from 'nativescript-vue'
import HomePage from './views/client/HomePage'

// Uncomment the following to see NativeScript-Vue output logs
Vue.config.silent = false

new Vue({
  render: h => h('frame', [h(HomePage)])
}).$start()
