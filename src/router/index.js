import Vue from 'vue'
import Router from 'vue-router'
import Home from "../components/Home/Home"
import Member from "../components/Member/Member"
import ShopCart from "../components/ShopCart/ShopCart"
import Search from "../components/Search/Search"
import NewsList from "../components/News/NewsList"
import NewsDetail from "../components/News/NewsDetail"

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
      path: '/member',
      name: 'Member',
      component: Member
    },{
      path: '/shop_cart',
      name: 'ShopCart',
      component: ShopCart
    },{
      path: '/search',
      name: 'Search',
      component: Search
    },{
      path: '/news/list',
      name:'NewsList',
      component:NewsList
    },{
      path: '/news/detail/:id',
      name:'NewsDetail',
      component:NewsDetail
    }
  ]
})
