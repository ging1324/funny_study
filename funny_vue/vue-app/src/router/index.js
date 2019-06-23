import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../components/account/login.vue'
import join from '../components/account/join.vue'
Vue.use(VueRouter)

const Home = { template: '<div>Home</div>'}
const NotFound = { template: '<div>Not Found</div>'}


const router = new VueRouter({
    mode: 'history',
    routes: [
      { path: '/home', component: Home },
      { path: '/test', component: NotFound },
      { path: '/login', component: login },
      { path: '/join', component: join }
    ]
  })
  
  export default router