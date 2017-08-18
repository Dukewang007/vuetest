import Vue from 'vue'
import VueRouter from 'vue-router'
import App from "./App.vue"
import Hello from "./components/Hello.vue"
import Home from "./components/Home.vue"
import Work from "./components/Work.vue"
import Logtime from "./components/Logtime.vue"
import Lunbo from "./components/Lunbo.vue"
Vue.use(VueRouter)
const routes = [{
  path:'/',
  component:Home
},{
  path:'/hello',
  component:Hello
},{
  path:'/home',
  component:Home
},{
  path:'/app',
  component: App
},{
  path:'/work',
  component: Work
},{
  path:'/logtime',
  component: Logtime
},{
  path:'/lunbo',
  component: Lunbo
}]
const router = new VueRouter({
  routes
})
export default router; //将路由器导出
