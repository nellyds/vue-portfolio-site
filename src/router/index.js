import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Entry from '../views/Entry.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/art',
    name: 'art',
    component: () => import('../views/Art.vue')
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('../views/Blog.vue')
  },
  {
    path: '/work',
    name: 'work',
    component: () => import('../views/Work.vue')
  },
  {
    path: '/entry/:id',
    name: 'entry',
    component: () => import('../views/Entry.vue')
  }


];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
