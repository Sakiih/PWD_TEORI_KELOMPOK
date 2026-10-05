<div align="center">

# 🌌 Workshop Web Programming

### ✦ Student Registration System ✦

*Explore the web, one line of code at a time.*

🌑 • ✦ • 🪐 • ✦ • 🌙 • ✦ • ⭐ • ✦ • 🌌

</div>

---

## 🌙 About The Project

**Workshop Web Programming** adalah halaman registrasi mahasiswa untuk kegiatan workshop pemrograman web.

Project ini dibuat sebagai simulasi penerapan **jQuery** dalam pembuatan form interaktif dengan fokus pada:

> ✦ Selector  
> ✦ Event  
> ✦ Manipulasi DOM  
> ✦ Validasi Form

Halaman dirancang dengan konsep **night sky**, menggunakan nuansa langit malam, bintang, bulan, dan benda langit sebagai inspirasi visual.

---

## 🪐 Features

### 🌟 Form Registration

Form pendaftaran terdiri dari:

- Nama Lengkap
- Email
- Nomor HP
- Pilihan Sesi
- Persetujuan Pendaftaran

### 🌙 Form Validation

Sistem melakukan validasi sebelum data diproses.

| Data | Aturan |
|---|---|
| 👤 Nama | Wajib diisi dan minimal 3 karakter |
| ✉️ Email | Wajib memiliki `@` dan `.` |
| 📱 Nomor HP | Boleh kosong, jika diisi harus angka dan diawali `08`, `62`, atau `+62` |
| 🕐 Sesi | Wajib memilih sesi |
| ✅ Persetujuan | Wajib dicentang |

### ✦ Interactive Form

Menggunakan event jQuery:

- `focus`
- `blur`
- `submit`

### 🌌 Confirmation Card

Setelah data valid, sistem akan langsung menampilkan **kartu konfirmasi pendaftaran** pada halaman.

Informasi yang ditampilkan:

- Nomor pendaftaran
- Nama
- Email
- Nomor HP
- Sesi workshop

---

## ☄️ Technologies

<div align="center">

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)

![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

![jQuery](https://img.shields.io/badge/jQuery-3.7.1-0769AD?style=for-the-badge&logo=jquery&logoColor=white)

</div>

---

## 🌠 Project Structure

```text
workshop-registration/
│
├── index.html
├── style.css
├── script.js
└── README.md
