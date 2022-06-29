import PokemonView from '@/views/PokemonView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PokemonView,
      meta: {
        title: `PokéSearch${
          import.meta.env.VITE_APP_VERSION
            ? ` v${import.meta.env.VITE_APP_VERSION}`
            : ''
        }`,
      },
    },
  ],
})

router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.title)

  const previousNearestWithMeta = from.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.metaTags)

  if (nearestWithTitle) {
    document.title = nearestWithTitle.meta.title as string
  } else if (previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title as string
  }
  next()
})

export default router
