import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueResource from 'vue-resource'
Vue.use(VueResource)

Vue.config.productionTip = false

window.onload = function(){
  var app = new Vue({
    el:'#app',
    router,
    // render: h => h(App)
    render:function(h){
      return h(App)
    }
  })
}