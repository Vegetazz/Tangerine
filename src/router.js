import Vue from 'vue';
import Router from 'vue-router';
import VueRouter from 'vue-router';

const Home = () => import('views/home/Home.vue');
const Category = () => import('views/category/Category.vue');
const Cart = () => import('views/cart/Cart.vue');
const Profile = () => import('views/profile/Profile.vue');
const Degitl = () => import('views/degitl/Degitl.vue');

Vue.use(Router);

const routes = [
  {
    path: '',
    redirect: '/home',
  },
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/category',
    component: Category,
  },
  {
    path: '/cart',
    component: Cart,
  },
  {
    // path: '/degitl/:iid',
    path: '/degitl',
    component: Degitl,
  },
  {
    path: '/profile',
    component: Profile,
  },
];
const router = new VueRouter({
  routes,
  mode: 'history',
});

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};
export default router;
