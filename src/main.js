import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import echarts from 'echarts'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import VueAwesomeSwiper from 'vue-awesome-swiper'
 
// import style
import 'swiper/css/swiper.css'
Vue.config.productionTip = false
Vue.directive('click',{
  bind(el,binding,vnode){
    el.onclick=() =>{
    // el.parentNode.parentNode.style.display='none'}
    vnode.context[binding.expression] = false
 
   
}}})
Vue.prototype.$echarts = echarts
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
// Vue.prototype.$swiper = VueAwesomeSwiper
Vue.use(ElementUI)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
