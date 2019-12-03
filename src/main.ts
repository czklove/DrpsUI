/*
 * @Description: button
 * @Version: 2.0
 * @Autor: czklove
 * @Date: 2019-11-11 10:07:17
 * @LastEditors: czklove
 * @LastEditTime: 2019-11-15 09:43:22
 */
import Vue, { CreateElement } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Swipe from './components/swipe'
Vue.config.productionTip = false
Vue.use(Swipe)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
