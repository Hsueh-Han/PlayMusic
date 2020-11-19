import Vue from 'vue';
import VueRouter from 'vue-router';

import index from '@/views/index.vue';
import guide from '@/views/guide.vue';
import score from '@/views/score.vue';
import playGround from '@/views/playground.vue';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '*',
      redirect: '/',
    },
    {
      name: 'index',
      path: '/',
      component: index,
    },
    {
      name: 'guide',
      path: '/guide',
      component: guide,
    },
    {
      name: 'playground',
      path: '/playground',
      component: playGround,
    },
    {
      name: 'score',
      path: '/score',
      component: score,
    },
  ],
});
