import Vue from 'vue'
import App from './App.vue'

import BaseInput from './components/BaseInput'
import BaseSelect from './components/BaseSelect'

import VueMask from 'v-mask'
Vue.use(VueMask)

Vue.config.productionTip = false
Vue.component('BaseInput', BaseInput)
Vue.component('BaseSelect', BaseSelect)

new Vue({
  render: h => h(App)
}).$mount('#app')
