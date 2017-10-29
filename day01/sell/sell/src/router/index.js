import Vue from 'vue';
import Router from 'vue-router';
import VueResource from 'vue-resource';
import goods from '../components/goods/goods.vue';
import ratings from '../components/ratings/ratings.vue';
import seller from '../components/seller/seller.vue';
import '../common/stylus/index.styl';
// 引入相应的组件
Vue.use(Router);
Vue.use(VueResource);
export default new Router({
  // 设置路由状态机
  routes: [
    {
      path: '/goods', component: goods
    },
    {
      path: '/ratings', component: ratings
    },
    {
      path: '/seller', component: seller
    },
    {
      path: '/', component: goods
    }
  ],
  linkActiveClass: 'active'
  // 设置选中路由时的样式必须空一格
});
