<script setup>
import { computed, reactive, ref, watch } from 'vue';

const props = defineProps({ initialData: { type: Object, default: () => ({}) }, categories: { type: Array, default: () => [] }, loading: Boolean, submitLabel: { type: String, default: 'Simpan' } });
const emit = defineEmits(['submit']);
const newCategoryOption = '__new_category__';
const form = reactive({ kode_barang: '', nama_barang: '', kategori: '', harga: '', stok: '', satuan: 'pcs' });
const errors = reactive({});
const categorySelection = ref('');
const newCategory = ref('');
const addingCategory = ref(false);
const availableCategories = computed(() => {
  const values = [...props.categories, form.kategori].filter((value) => typeof value === 'string' && value.trim());
  return values.filter((value, index, list) => list.findIndex((item) => item.toLowerCase() === value.toLowerCase()) === index);
});

function setFormData(value = {}) {
  form.kode_barang = value.kode_barang || '';
  form.nama_barang = value.nama_barang || '';
  form.kategori = value.kategori || '';
  form.harga = value.harga ?? '';
  form.stok = value.stok ?? '';
  form.satuan = value.satuan || 'pcs';
  categorySelection.value = form.kategori;
  addingCategory.value = false;
  newCategory.value = '';
}

watch(() => props.initialData, setFormData, { immediate: true });

function selectCategory(value) {
  if (value === newCategoryOption) {
    addingCategory.value = true;
    newCategory.value = '';
    form.kategori = '';
    return;
  }
  addingCategory.value = false;
  form.kategori = value;
}

function updateNewCategory(value) {
  newCategory.value = value;
  form.kategori = value.trim();
}

function validate() {
  Object.keys(errors).forEach((key) => delete errors[key]);
  const kode = typeof form.kode_barang === 'string' ? form.kode_barang.trim() : '';
  const nama = typeof form.nama_barang === 'string' ? form.nama_barang.trim() : '';
  const kategori = typeof form.kategori === 'string' ? form.kategori.trim() : '';
  if (!kode) errors.kode_barang = 'Kode barang wajib diisi.';
  else if (kode.length > 50) errors.kode_barang = 'Kode barang maksimal 50 karakter.';
  if (!nama) errors.nama_barang = 'Nama barang wajib diisi.';
  else if (nama.length > 150) errors.nama_barang = 'Nama barang maksimal 150 karakter.';
  if (addingCategory.value && !kategori) errors.kategori = 'Nama kategori baru wajib diisi.';
  else if (kategori.length > 100) errors.kategori = 'Kategori maksimal 100 karakter.';
  else if (addingCategory.value && props.categories.some((item) => item.toLowerCase() === kategori.toLowerCase())) errors.kategori = 'Kategori tersebut sudah tersedia.';
  if (form.harga === '' || !Number.isFinite(Number(form.harga)) || Number(form.harga) < 0) errors.harga = 'Harga harus angka tidak negatif.';
  if (form.stok === '' || !Number.isInteger(Number(form.stok)) || Number(form.stok) < 0) errors.stok = 'Stok harus bilangan bulat tidak negatif.';
  if (typeof form.satuan !== 'string' || form.satuan.trim().length > 20) errors.satuan = 'Satuan maksimal 20 karakter.';
  return !Object.keys(errors).length;
}

function submit() {
  if (!validate()) return;
  emit('submit', { kode_barang: form.kode_barang.trim(), nama_barang: form.nama_barang.trim(), kategori: form.kategori.trim() || null, harga: Number(form.harga), stok: Number(form.stok), satuan: form.satuan.trim() || 'pcs' });
}
</script>

<template>
  <form class="space-y-5" @submit.prevent="submit">
    <div class="grid gap-5 sm:grid-cols-2">
      <label class="block text-sm font-medium">Kode Barang<input v-model="form.kode_barang" class="input" :class="{ 'border-red-500': errors.kode_barang }" placeholder="BRG-006" /> <span v-if="errors.kode_barang" class="text-xs text-red-600">{{ errors.kode_barang }}</span></label>
      <label class="block text-sm font-medium">Nama Barang<input v-model="form.nama_barang" class="input" :class="{ 'border-red-500': errors.nama_barang }" placeholder="Nama barang" /> <span v-if="errors.nama_barang" class="text-xs text-red-600">{{ errors.nama_barang }}</span></label>
      <label class="block text-sm font-medium">Kategori<select v-model="categorySelection" class="input" :class="{ 'border-red-500': errors.kategori }" @change="selectCategory(categorySelection)"><option value="">Pilih kategori</option><option v-for="item in availableCategories" :key="item" :value="item">{{ item }}</option><option :value="newCategoryOption">+ Tambah kategori baru...</option></select><input v-if="addingCategory" :value="newCategory" maxlength="100" class="input" placeholder="Nama kategori baru" @input="updateNewCategory($event.target.value)" /><span v-if="errors.kategori" class="text-xs text-red-600">{{ errors.kategori }}</span></label>
      <label class="block text-sm font-medium">Harga<input v-model="form.harga" type="number" min="0" class="input" :class="{ 'border-red-500': errors.harga }" /> <span v-if="errors.harga" class="text-xs text-red-600">{{ errors.harga }}</span></label>
      <label class="block text-sm font-medium">Stok<input v-model="form.stok" type="number" min="0" step="1" class="input" :class="{ 'border-red-500': errors.stok }" /> <span v-if="errors.stok" class="text-xs text-red-600">{{ errors.stok }}</span></label>
      <label class="block text-sm font-medium">Satuan<input v-model="form.satuan" maxlength="20" class="input" placeholder="pcs" /><span v-if="errors.satuan" class="text-xs text-red-600">{{ errors.satuan }}</span></label>
    </div>
    <div class="flex justify-end gap-3"><RouterLink to="/" class="rounded-lg border px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-800">Batal</RouterLink><button :disabled="loading" class="rounded-lg bg-indigo-600 px-5 py-2 font-semibold text-white hover:bg-indigo-700 disabled:opacity-60">{{ loading ? 'Menyimpan...' : submitLabel }}</button></div>
  </form>
</template>

<style scoped>
.input { @apply mt-1 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 dark:border-slate-700 dark:bg-slate-800; }
</style>
