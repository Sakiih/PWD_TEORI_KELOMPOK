<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import BarangForm from '../components/BarangForm.vue';
import barangService from '../services/barangService.js';
const router = useRouter(); const loading = ref(false); const error = ref(''); const categories = ref([]);
async function loadCategories() { try { const response = await barangService.getAll(); categories.value = [...new Set(response.data.map((item) => item.kategori).filter(Boolean))]; } catch { categories.value = []; } }
async function save(data) { loading.value = true; error.value = ''; try { await barangService.create(data); localStorage.setItem('inventarisToast', 'Barang berhasil ditambahkan.'); router.push('/'); } catch (e) { error.value = e.response?.data?.message || 'Gagal menyimpan barang.'; } finally { loading.value = false; } }
onMounted(loadCategories);
</script>
<template><div class="mx-auto max-w-3xl space-y-6"><div><h1 class="text-3xl font-bold">Tambah Barang</h1><p class="mt-1 text-slate-500">Masukkan informasi barang baru.</p></div><div v-if="error" class="rounded-lg bg-red-50 p-4 text-red-700">{{ error }}</div><div class="rounded-xl bg-white p-6 shadow dark:bg-slate-900"><BarangForm :categories="categories" :loading="loading" @submit="save" /></div></div></template>
