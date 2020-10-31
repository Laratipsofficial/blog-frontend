import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home/index.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About/index.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact/index.vue')
  },
  {
    path: '/articles',
    name: 'articles.index',
    component: () => import(/* webpackChunkName: "articles" */ '../views/Articles/index.vue')
  },
  {
    path: '/articles/:slug',
    name: 'articles.show',
    component: () => import(/* webpackChunkName: "articles-detail" */ '../views/Articles/show.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
