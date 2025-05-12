import { h } from 'vue'
import BuildKg from '@/views/BuildKg.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: { render: () => h('div', '首页内容') }
  },
  {
    path: '/graph',
    name: 'Graph',
    component: BuildKg
  },
  {
    path: '/network',
    name: 'Network',
    component: { render: () => h('div', '网络拓扑编辑') }
  },
  {
    path: '/topo',
    name: 'Topo',
    component: { render: () => h('div', '拓扑图编辑器') }
  },
  {
    path: '/relation',
    name: 'Relation',
    component: { render: () => h('div', '关系图谱') }
  },
  {
    path: '/mind',
    name: 'Mind',
    component: { render: () => h('div', '思维脑图') }
  },
  {
    path: '/org',
    name: 'Org',
    component: { render: () => h('div', '组织架构图') }
  }
]

export default routes 