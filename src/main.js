import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//导入Elementui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//导入Buef
import Buefy from  'buefy'
import 'buefy/dist/buefy.css'
//导入全局css样式
import '@/assets/app.css'


Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(Buefy)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
