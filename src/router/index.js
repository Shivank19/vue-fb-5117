import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import TestingView from '../views/TestView.vue'
import TestParam from '@/views/TestParam.vue'
import FlashCards from '@/components/FlashCards.vue'
import FlashCardRouting from '@/components/FlashCardRouting.vue'
import NotFound from '@/components/NotFound.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutView,
    },
    {
      path: '/testing',
      name: 'testing',
      component: TestingView,
    },

    {
      path: '/testing/:id',
      name: 'testParam',
      component: TestParam,
    },
    {
      path: '/cards',
      name: 'cards',
      component: FlashCards,
    },
    {
      path: '/cards/:id',
      name: 'card_with_id',
      component: FlashCardRouting,
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: NotFound,
    },
  ],
})

export default router
