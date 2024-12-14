import { defineAsyncComponent } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Loading from '@/components/loader.vue'
 
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component:defineAsyncComponent({loader:()=> import ('../views/HomeView.vue'), loadingComponent:Loading})
    },
    {
      path: '/about',
      name: 'about',
      component:defineAsyncComponent({loader:()=> import ('../views/HomeView.vue'), loadingComponent:Loading})
    },
  ],
})

export default router
