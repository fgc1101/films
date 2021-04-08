import Vue from 'vue'
import Router from 'vue-router'
import Home from "../components/Home/Home"
import Member from "../components/Member/Member"
import ShopCart from "../components/ShopCart/ShopCart"
import Search from "../components/Search/Search"

Vue.use(Router)

const VueRouterPush = Router.prototype.push

Router.prototype.push = function push(to){
  return VueRouterPush.call(this, to).catch(err => err)
}
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
      path: '/Member',
      name: 'Member',
      component: Member
    },{
      path: '/ShopCart',
      name: 'ShopCart',
      component: ShopCart
    },{
      path: '/Search',
      name: 'Search',
      component: Search
    }
  ]
})
