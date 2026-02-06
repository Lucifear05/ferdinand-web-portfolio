import IndexView from '@/views/home/IndexView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'home',
      path: '/',
      component: IndexView,
      meta: {
        title: 'Home | Ferdinand',
      },
    },
  ],
})

const DEFAULT_TITLE = 'My Website' // Fallback title

router.afterEach((to) => {
  // Use the title from the meta field, or fall back to a default title
  const title = (to.meta as { title?: string }).title || DEFAULT_TITLE
  document.title = title
})

export default router
