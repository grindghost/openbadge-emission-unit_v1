import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import { auth } from '../firebase'
import { useUserStore } from '@/store'

const routes = [
/*   {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true
    }
  }, */
/*   {
    path: '/:projectId',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue'),
    meta: {
      requiresAuth: true
    }
  }, */
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue'),
    meta: {
      requiresAuth: true
    }
  },

  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {

  // const projectId = to.params.projectId;
  const projectId = to.query.projectId
  const store = useUserStore();
  
  console.log('Current URL:', to.fullPath);
  console.log('Captured projectId:', projectId);
  console.log('Initial stored projectId:', store.projectId);

  // Redirect to project if logged in (previous)
  if (to.path === '/login' && auth.currentUser) {
    // next('/' + store.projectId)
    next('/?projectId=' + store.projectId)
    return;
  }

  if (to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser) {
    if (projectId !== undefined) {
      store.projectId = projectId;
    } 
    
    next('/login')
    return;
  }

  next();
})

export default router