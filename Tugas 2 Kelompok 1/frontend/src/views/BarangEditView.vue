<script setup>
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import BarangForm from '../components/BarangForm.vue';
import barangService from '../services/barangService.js';
const route = useRoute(); const router = useRouter(); const data = ref({}); const categories = ref([]); const loading = ref(true); const saving = ref(false); const error = ref('');
async function load() { try { const itemResponse = await barangService.getById(route.params.id); data.value = itemResponse.data; try { const listResponse = await barangService.getAll(); categories.value = [...new Set(listResponse.data.map((item) => item.kategori).filter(Boolean))]; } catch { categories.value = []; } } catch (e) { error.value = e.response?.data?.message || 'Barang tidak ditemukan.'; } finally { loading.value = false; } }
async function save(value) { saving.value = true; error.value = ''; try { await barangService.update(route.params.id, value); localStorage.setItem('inventarisToast', 'Barang berhasil diperbarui.'); router.push('/'); } catch (e) { error.value = e.response?.data?.message || 'Gagal memperbarui barang.'; } finally { saving.value = false; } }
onMounted(load);
</script>
<template><div class="mx-auto max-w-3xl space-y-6"><div><h1 class="text-3xl font-bold">Edit Barang</h1><p class="mt-1 text-slate-500">Perbarui informasi barang.</p></div><div v-if="loading" class="rounded-xl bg-white p-8 text-center shadow dark:bg-slate-900">Memuat data...</div><div v-else-if="error" class="rounded-lg bg-red-50 p-4 text-red-700">{{ error }} <RouterLink to="/" class="font-semibold underline">Kembali</RouterLink></div><div v-else class="rounded-xl bg-white p-6 shadow dark:bg-slate-900"><div class="mb-5 rounded-lg bg-amber-50 p-3 text-sm text-amber-800">ID barang: {{ data.id }}</div><BarangForm :initial-data="data" :categories="categories" :loading="saving" submit-label="Simpan Perubahan" @submit="save" /></div></div></template>
