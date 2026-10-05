# 💻 Workshop Web Programming — Registration Page

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![jQuery](https://img.shields.io/badge/jQuery-3.7.1-0769AD?style=for-the-badge&logo=jquery&logoColor=white)

## 📌 Deskripsi

**Workshop Web Programming Registration Page** adalah sebuah halaman pendaftaran workshop berbasis web yang dibuat menggunakan **HTML, CSS, JavaScript, dan jQuery**.

Project ini dibuat sebagai implementasi materi **Pemrograman Web Dasar**, khususnya penerapan **jQuery** untuk membuat halaman web menjadi interaktif.

Konsep utama yang diterapkan meliputi:

- Selector jQuery
- Event handling
- Manipulasi DOM
- Validasi form
- Penanganan pesan error
- Manipulasi class CSS
- Pembuatan elemen HTML secara dinamis
- Menampilkan hasil pendaftaran tanpa reload halaman
- Responsive web design

---

## 🎯 Tujuan Project

Project ini bertujuan untuk membuat sebuah sistem pendaftaran workshop sederhana yang dapat:

1. Menerima data peserta.
2. Memvalidasi data yang dimasukkan.
3. Memberikan pesan error apabila data tidak valid.
4. Menampilkan informasi workshop.
5. Menampilkan kartu konfirmasi apabila pendaftaran berhasil.
6. Menerapkan konsep dasar jQuery pada halaman web.

---

## 🏫 Skenario Workshop

Sekolah/kampus mengadakan sebuah **Workshop Web Programming**.

Peserta harus mengisi beberapa data sebelum melakukan pendaftaran:

| Data | Keterangan |
|---|---|
| Nama Lengkap | Wajib diisi |
| Email | Wajib diisi |
| Nomor HP | Opsional |
| Pilihan Sesi | Wajib dipilih |
| Persetujuan | Wajib dicentang |

Setelah seluruh data dinyatakan valid, sistem akan membuat **nomor pendaftaran otomatis** dan menampilkan kartu konfirmasi langsung pada halaman.

---

## ✨ Fitur Utama

### 📝 1. Form Pendaftaran

Form menyediakan beberapa input:

- Nama Lengkap
- Email
- Nomor HP
- Pilihan Sesi
- Checkbox Persetujuan

Pilihan sesi workshop:

```text
Sesi Pagi  : 08.00 - 12.00
Sesi Siang : 13.00 - 17.00
Sesi Malam : 19.00 - 21.00
```

---

### 🔍 2. Validasi Nama

Nama peserta:

- Tidak boleh kosong.
- Minimal terdiri dari 3 karakter.
- Tidak boleh mengandung angka.

Contoh tidak valid:

```text
R2
```

Pesan yang ditampilkan:

```text
Nama tidak boleh mengandung angka!
```

Validasi nama dilakukan baik ketika form dikirim maupun melalui event pada input.

---

### 📧 3. Validasi Email

Email wajib diisi.

Sistem memeriksa apakah email memiliki:

```text
@
.
```

Contoh valid:

```text
mahasiswa@gmail.com
```

Contoh tidak valid:

```text
mahasiswa
```

Pesan error:

```text
Email harus memiliki @ dan titik!
```

---

### 📱 4. Validasi Nomor HP

Nomor HP bersifat **opsional**.

Jika diisi, nomor harus diawali dengan salah satu format:

```text
08
62
+62
```

Contoh:

```text
081234567890
6281234567890
+6281234567890
```

Sistem juga memeriksa agar nomor hanya berisi angka.

Pesan error yang dapat muncul:

```text
Nomor HP harus diawali 08, 62, atau +62!
```

atau:

```text
Nomor HP hanya boleh berisi angka!
```

---

### 🕐 5. Validasi Pilihan Sesi

Peserta wajib memilih salah satu sesi workshop.

Jika belum memilih sesi:

```text
Silakan pilih sesi workshop!
```

Input sesi juga
