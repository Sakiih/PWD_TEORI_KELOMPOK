<script setup>
import { computed, onMounted, ref, watch } from 'vue';
import { RouterLink } from 'vue-router';
import barangService from '../services/barangService.js';
const items = ref([]); const loading = ref(true); const error = ref(''); const search = ref(''); const category = ref(''); const page = ref(1); const toast = ref(localStorage.getItem('inventarisToast') || '');
const categories = computed(() => [...new Set(items.value.map((item) => item.kategori).filter(Boolean))]);
const filtered = computed(() => items.value.filter((item) => `${item.kode_barang} ${item.nama_barang}`.toLowerCase().includes(search.value.toLowerCase()) && (!category.value || item.kategori === category.value)));
const pages = computed(() => Math.max(1, Math.ceil(filtered.value.length / 10)));
const visible = computed(() => filtered.value.slice((page.value - 1) * 10, page.value * 10));
function normalizePage() { page.value = Math.min(page.value, pages.value); }
const totalValue = computed(() => items.value.reduce((sum, item) => sum + Number(item.harga) * Number(item.stok), 0));
const rupiah = (value) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(value);
async function load() { loading.value = true; error.value = ''; try { const response = await barangService.getAll(); items.value = response.data; normalizePage(); } catch (e) { error.value = e.response?.data?.message || 'Tidak dapat terhubung ke server.'; } finally { loading.value = false; } }
async function remove(id) { if (!confirm('Hapus barang ini?')) return; try { await barangService.remove(id); toast.value = 'Barang berhasil dihapus.'; await load(); setTimeout(() => { toast.value = ''; }, 3000); } catch (e) { error.value = e.response?.data?.message || 'Gagal menghapus barang.'; } }
watch(filtered, normalizePage);
onMounted(() => { localStorage.removeItem('inventarisToast'); load(); if (toast.value) setTimeout(() => { toast.value = ''; }, 3000); });
</script>

<template>
  <div class="space-y-6">
    <div class="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p class="text-sm font-semibold uppercase tracking-wider text-indigo-600">Dashboard</p><h1 class="mt-1 text-3xl font-bold">Daftar Inventaris</h1><p class="mt-1 text-slate-500">Kelola stok barang gudang dengan mudah.</p></div><RouterLink to="/barang/create" class="rounded-lg bg-indigo-600 px-4 py-2 text-center font-semibold text-white hover:bg-indigo-700">+ Tambah Barang</RouterLink></div>
    <div class="grid gap-4 sm:grid-cols-2"><div class="rounded-xl bg-indigo-600 p-5 text-white shadow"><p class="text-sm opacity-80">Jumlah Barang</p><p class="mt-2 text-3xl font-bold">{{ items.length }}</p></div><div class="rounded-xl bg-white p-5 shadow dark:bg-slate-900"><p class="text-sm text-slate-500">Total Nilai Stok</p><p class="mt-2 text-2xl font-bold text-slate-800 dark:text-white">{{ rupiah(totalValue) }}</p></div></div>
    <div v-if="toast" class="rounded-lg bg-emerald-100 px-4 py-3 text-emerald-800">{{ toast }}</div>
    <div class="flex flex-col gap-3 rounded-xl bg-white p-4 shadow dark:bg-slate-900 sm:flex-row"><input v-model="search" @input="page = 1" class="input flex-1" placeholder="Cari kode atau nama barang..." /><select v-model="category" @change="page = 1" class="input sm:max-w-xs"><option value="">Semua kategori</option><option v-for="item in categories" :key="item">{{ item }}</option></select></div>
    <div v-if="loading" class="rounded-xl bg-white p-10 text-center text-slate-500 shadow dark:bg-slate-900">Memuat data...</div>
    <div v-else-if="error" class="rounded-xl bg-red-50 p-5 text-red-700">{{ error }} <button class="ml-2 font-semibold underline" @click="load">Coba lagi</button></div>
    <div v-else-if="!visible.length" class="rounded-xl bg-white p-10 text-center text-slate-500 shadow dark:bg-slate-900">Data barang tidak ditemukan.</div>
    <div v-else class="overflow-x-auto rounded-xl bg-white shadow dark:bg-slate-900"><table class="w-full min-w-[720px] text-left text-sm dark:text-slate-200"><thead class="bg-slate-100 text-xs uppercase text-slate-500 dark:bg-slate-800 dark:text-slate-200"><tr><th class="px-5 py-4">Kode</th><th class="px-5 py-4">Nama Barang</th><th class="px-5 py-4">Kategori</th><th class="px-5 py-4">Harga</th><th class="px-5 py-4">Stok</th><th class="px-5 py-4">Aksi</th></tr></thead><tbody class="divide-y divide-slate-100 dark:divide-slate-700"><tr v-for="item in visible" :key="item.id" class="hover:bg-slate-50 dark:hover:bg-slate-800"><td class="px-5 py-4 font-semibold text-indigo-600 dark:text-indigo-300">{{ item.kode_barang }}</td><td class="px-5 py-4 dark:text-slate-100">{{ item.nama_barang }}</td><td class="px-5 py-4 dark:text-slate-200">{{ item.kategori || '-' }}</td><td class="px-5 py-4 dark:text-slate-200">{{ rupiah(item.harga) }}</td><td class="px-5 py-4 dark:text-slate-200">{{ item.stok }} {{ item.satuan }}</td><td class="space-x-3 whitespace-nowrap px-5 py-4"><RouterLink :to="`/barang/edit/${item.id}`" class="font-semibold text-indigo-600 hover:underline dark:text-indigo-300">Edit</RouterLink><button class="font-semibold text-red-600 hover:underline dark:text-red-300" @click="remove(item.id)">Hapus</button></td></tr></tbody></table></div>
    <div v-if="pages > 1" class="flex items-center justify-center gap-3"><button :disabled="page === 1" class="rounded border px-3 py-1 disabled:opacity-40" @click="page--">Sebelumnya</button><span>Halaman {{ page }} / {{ pages }}</span><button :disabled="page === pages" class="rounded border px-3 py-1 disabled:opacity-40" @click="page++">Berikutnya</button></div>
  </div>
</template>

<style scoped>.input { @apply rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-slate-700 dark:bg-slate-800; }</style>
