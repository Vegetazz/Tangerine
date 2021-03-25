import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import FastClick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'
// import { Swipe, SwipeItem } from 'vant';
// Vue.use(Swipe);
// Vue.use(SwipeItem);

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
Vue.use(VueLazyLoad,{
  loading: require("./assets/img/other/loading.jpg")//懒加载时图片未加载的占位图
})

FastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
