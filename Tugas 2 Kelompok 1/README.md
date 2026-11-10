# CRUD Inventaris Barang

Aplikasi praktikum PWD Pertemuan 14 untuk mencatat, melihat, menambah, mengubah, dan menghapus inventaris barang.

## Teknologi
- MySQL 8+, Node.js, Express.js, mysql2/promise, CORS, dotenv
- Vue 3, Vite, Vue Router, Axios, Tailwind CSS 3

## Persyaratan dan instalasi
Pastikan Node.js/npm dan MySQL aktif. Jalankan SQL berikut dari folder proyek:

```bash
mysql -u root -p < database/inventaris.sql
cd backend && npm install
cd ../frontend && npm install
```

Sesuaikan `backend/.env` dengan MySQL lokal. Jangan membagikan file tersebut jika berisi password.

## Menjalankan
Terminal 1: `cd backend && npm run dev`  
Terminal 2: `cd frontend && npm run dev`

Frontend: http://localhost:5173  
API: http://localhost:3000/api/barang  
Health check: http://localhost:3000/


## Struktur
`database/` SQL, `backend/` REST API Express, `frontend/` Vue dan Tailwind, `docs/` dokumentasi teknis.
