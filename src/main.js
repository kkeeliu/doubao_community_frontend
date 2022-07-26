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
import {deleteRequest, getRequest, postRequest, putRequest} from "./utills/api";
import NProgress from "nprogress"
import 'nprogress/nprogress.css'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(Buefy)


router.beforeEach((to, from, next) => {
  NProgress.start()
  if (window.sessionStorage.getItem('tokenStr')){
    //判断用户信息是否存在，如果不存在
    if (!window.sessionStorage.getItem('user')){
      return getRequest('/user/info').then(resp=>{
        if (resp){
          //存入用户信息
          window.sessionStorage.setItem('user',JSON.stringify(resp));
          next();
        }
      })
    }
    next();
    NProgress.done()
  } else {
    if (to.path=='/'){
      next();
      NProgress.done()
    }else{
      next('/?redirect='+to.path);
      NProgress.done()
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
