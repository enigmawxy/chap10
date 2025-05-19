import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/graph-build',
    name: 'GraphBuild',
    component: () => import('../views/GraphBuild.vue')
  },
  {
    path: '/graph-query',
    name: 'GraphQuery',
    component: () => import('../views/GraphQuery.vue')
  },
  {
    path: '/knowledge-graph',
    name: 'KnowledgeGraph',
    component: () => import('../views/KnowledgeGraph.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/thinking-map',
    name: 'ThinkingMap',
    component: () => import('../views/ThinkingMap.vue')
  },
  {
    path: '/organization-chart',
    name: 'OrganizationChart',
    component: () => import('../views/OrganizationChart.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
