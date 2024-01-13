import * as VueRouter from 'vue-router'
import HomePage from "./views/HomePage.vue";

const routes = [
    { path: '/', component: HomePage },
    { path: '/services',  component: () => import('./views/ServicePage.vue')  },
    { path: '/portfolio',  component: () => import('./views/PortfolioPage.vue')  },
    { path: '/blog',  component: () => import('./views/BlogPage.vue')  },
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes,
})

export default router