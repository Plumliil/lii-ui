import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
import Home from '../views/Home.vue'
import Button from '../views/Button.vue'
import Swiper from '../views/Swiper.vue'
import Tree from '../views/Tree.vue'
import About from '../views/About.vue'

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/button',
    name: 'Button',
    component: Button
  },
  {
    path: '/swiper',
    name: 'Swiper',
    component: Swiper
  },
  {
    path: '/tree',
    name: 'Tree',
    component: Tree
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router