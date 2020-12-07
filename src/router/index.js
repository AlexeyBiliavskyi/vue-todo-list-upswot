import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login.vue'
import Todo from '@/views/Todo.vue'
import { store } from '@/store/store.js'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/todo/:userId',
    name: 'Todo',
    component: Todo
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/login'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !store.isAuthorized) {
    next({ name: 'Login' })
  } else {
    next()
  }
})

export default router
