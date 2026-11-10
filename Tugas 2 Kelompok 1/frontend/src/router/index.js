import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: () => import('../views/BarangListView.vue') },
    { path: '/barang/create', component: () => import('../views/BarangCreateView.vue') },
    { path: '/barang/edit/:id', component: () => import('../views/BarangEditView.vue') },
  ],
});
export default router;
