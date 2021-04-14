import Vue from 'vue'
import App from './App.vue'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './static/css/global.css'
// import FgcInstaller from './plugins/FgcInstaller'

import axios from 'axios'
Vue.prototype.$axios = axios

Vue.config.productionTip = false

Vue.use(MintUI)

// 引用自己写的插件
// Vue.use(FgcInstaller)

// 引入自己封装的9宫格组件
import Grid from './components/common/Grid'
Vue.component(Grid.name, Grid);

import NavBar from './components/common/NavBar'
Vue.component(NavBar.name, NavBar);

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
