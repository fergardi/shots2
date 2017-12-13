import Vue from 'vue'
import App from './App'
import router from './router/router'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'

Vue.config.productionTip = false

Vue.use(ElementUI, { size: 'small' })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
