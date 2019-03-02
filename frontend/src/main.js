import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Login from './components/login/login.vue'
import Shipping from './components/shipping/shipping.vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default-dark.css'

Vue.use(VueMaterial)

Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  { path: '/login' , component: Login},
  { path: '/shipping', component: Shipping },
  { path: '**' , redirect : '/login'}
]
const router = new VueRouter({
  routes
})
new Vue({
  render: h => h(App),
  router,
}).$mount('#shipping-app')
