import { createRouter, createWebHistory } from 'vue-router';
import SearchPage from '../components/SearchPage.vue';

// Create placeholder components for other routes
const ChatPage = { template: '<div class="p-8"><h1 class="text-2xl font-bold">Chat Page</h1><p class="mt-4">This is a placeholder for the Chat functionality.</p></div>' };
const DocumentsPage = { template: '<div class="p-8"><h1 class="text-2xl font-bold">Documents Page</h1><p class="mt-4">This is a placeholder for the Documents functionality.</p></div>' };
const ConnectPage = { template: '<div class="p-8"><h1 class="text-2xl font-bold">Connect Page</h1><p class="mt-4">This is a placeholder for the Connect functionality.</p></div>' };
const MonitorPage = { template: '<div class="p-8"><h1 class="text-2xl font-bold">Monitor Page</h1><p class="mt-4">This is a placeholder for the Monitor functionality.</p></div>' };
const ProfilePage = { template: '<div class="p-8"><h1 class="text-2xl font-bold">Profile Page</h1><p class="mt-4">This is a placeholder for the Profile functionality.</p></div>' };
const SettingsPage = { template: '<div class="p-8"><h1 class="text-2xl font-bold">Settings Page</h1><p class="mt-4">This is a placeholder for the Settings functionality.</p></div>' };

const routes = [
  {
    path: '/',
    redirect: '/search'
  },
  {
    path: '/chat',
    name: 'Chat',
    component: ChatPage
  },
  {
    path: '/documents',
    name: 'Documents',
    component: DocumentsPage
  },
  {
    path: '/search',
    name: 'Search',
    component: SearchPage
  },
  {
    path: '/connect',
    name: 'Connect',
    component: ConnectPage
  },
  {
    path: '/monitor',
    name: 'Monitor',
    component: MonitorPage
  },
  {
    path: '/profile',
    name: 'Profile',
    component: ProfilePage
  },
  {
    path: '/settings',
    name: 'Settings',
    component: SettingsPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
