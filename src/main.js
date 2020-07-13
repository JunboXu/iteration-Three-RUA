/*!

=========================================================
* Vue Argon Design System - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md)

* Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Vue from "vue";
import App from "./App.vue";
import router from "./router"
import Argon from "./plugins/argon-kit";
import './registerServiceWorker'

import VueRouter from 'vue-router'

// LightBootstrap plugin
// import LightBootstrap from './light-bootstrap-main'
import VueDirectiveImagePreviewer from 'vue-directive-image-previewer'
import 'vue-directive-image-previewer/dist/assets/style.css'

// router setup
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import echarts from 'echarts'


// plugin setup
Vue.use(VueDirectiveImagePreviewer)
Vue.prototype.$echarts = echarts //引入组件
Vue.prototype.$axios = axios;
Vue.prototype.$http = axios;
Vue.prototype.$echarts = echarts;
Vue.use(VueRouter)
// Vue.use(LightBootstrap)
Vue.use(ElementUI)


Vue.config.productionTip = false;
Vue.use(Argon);
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import App from './App.vue'
// import Argon from "./plugins/argon-kit"
// import './registerServiceWorker'

// // LightBootstrap plugin
// import LightBootstrap from './light-bootstrap-main'
// import VueDirectiveImagePreviewer from 'vue-directive-image-previewer'
// import 'vue-directive-image-previewer/dist/assets/style.css'

// // router setup
// import router from './router'
// import './registerServiceWorker'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// import axios from 'axios'
// import echarts from 'echarts'


// // plugin setup
// Vue.use(VueDirectiveImagePreviewer)
// Vue.prototype.$echarts = echarts //引入组件
// Vue.prototype.$axios = axios;
// Vue.prototype.$http = axios;
// Vue.prototype.$echarts = echarts;
// Vue.use(VueRouter)
// Vue.use(LightBootstrap)
// Vue.use(ElementUI)

// // configure router
// // const router = new VueRouter({
// //   mode:'history',
// //   // base: '/dist/',
// //   router, // short for routes: routes
// //   linkActiveClass: 'nav-item active',
// //   scrollBehavior: (to) => {
// //     if (to.hash) {
// //       return {selector: to.hash}
// //     } else {
// //       return { x: 0, y: 0 }
// //     }
// //   }
// // })

// /* eslint-disable no-new */

// Vue.config.productionTip = false;
// Vue.use(Argon);
// new Vue({
//   render: h => h(App),
//   router
// }).$mount("#app");
