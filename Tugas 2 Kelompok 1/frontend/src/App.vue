<script setup>
import { ref, onMounted } from 'vue';
const dark = ref(localStorage.getItem('darkMode') === 'true');
function toggleDark() { dark.value = !dark.value; document.documentElement.classList.toggle('dark', dark.value); localStorage.setItem('darkMode', dark.value); }
onMounted(() => document.documentElement.classList.toggle('dark', dark.value));
</script>

<template>
  <div class="min-h-screen bg-slate-50 text-slate-800 transition-colors dark:bg-slate-950 dark:text-slate-100">
    <nav class="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
      <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
        <RouterLink to="/" class="text-xl font-bold text-indigo-600">Inventaris Barang</RouterLink>
        <div class="flex items-center gap-2 text-sm"><RouterLink to="/" class="rounded-lg px-3 py-2 font-semibold">Daftar Barang</RouterLink><button class="rounded-lg px-3 py-2 hover:bg-slate-100 dark:hover:bg-slate-800" @click="toggleDark">{{ dark ? '☀️' : '🌙' }}</button></div>
      </div>
    </nav>
    <main class="mx-auto max-w-7xl px-4 py-8 sm:px-6"><RouterView /></main>
  </div>
</template>
