import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/example-background',
      name: 'background',
      component: () => import(/* webpackChunkName: "background" */ './views/the-background-image.vue'),
    },
    {
      path: '/example-even',
      name: 'even',
      component: () => import(/* webpackChunkName: "even" */ './views/the-even-image.vue'),
    },
    {
      path: '/example-odd',
      name: 'odd',
      component: () => import(/* webpackChunkName: "odd" */ './views/the-odd-image.vue'),
    },
  ],
});
