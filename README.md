# 💻 Workshop Web Programming — Registration Page

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![jQuery](https://img.shields.io/badge/jQuery-3.7.1-0769AD?style=for-the-badge&logo=jquery&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 📌 Deskripsi

**Workshop Web Programming Registration Page** adalah sebuah halaman pendaftaran workshop yang dibuat menggunakan **HTML, CSS, JavaScript, dan jQuery**.

Project ini dibuat sebagai implementasi materi **jQuery**, khususnya:

- Selector
- Event
- Manipulasi DOM
- Validasi Form
- Menampilkan pesan error
- Membuat elemen HTML secara dinamis
- Menampilkan kartu konfirmasi setelah pendaftaran berhasil

Halaman dirancang dengan tampilan dashboard sederhana dan responsif sehingga dapat digunakan pada desktop maupun perangkat dengan ukuran layar lebih kecil.

---

## 🎯 Skenario Tugas

Sekolah akan mengadakan **Workshop Web Programming**.

Peserta diminta mengisi data pendaftaran yang terdiri dari:

1. Nama Lengkap
2. Email
3. Nomor HP
4. Pilihan Sesi
5. Persetujuan mengikuti workshop

Sistem akan melakukan validasi terhadap data yang dimasukkan.

Apabila terdapat data yang tidak valid, sistem akan menampilkan **pesan error yang jelas** dan memberikan tanda pada input yang bermasalah.

Apabila seluruh data valid dan persetujuan telah diberikan, sistem akan menampilkan **kartu konfirmasi pendaftaran secara langsung pada halaman**.

---

## ✨ Fitur

### 1. Form Pendaftaran

Form menyediakan input:

- Nama lengkap
- Email
- Nomor HP
- Pilihan sesi workshop
- Checkbox persetujuan

Contoh pilihan sesi:

```text
Sesi Pagi  : 08.00 - 12.00
Sesi Siang : 13.00 - 17.00
Sesi Malam : 19.00 - 21.00
```

Pilihan sesi tersebut tersedia langsung pada elemen `<select>` pada halaman.

---

## 🔍 Validasi Form

Sistem melakukan validasi pada setiap data sebelum pendaftaran diproses.

### Nama

Nama tidak boleh kosong.

Jika nama kurang dari 3 karakter, sistem akan memberikan pesan:

```text
Nama minimal 3 karakter!
```

Contoh:

```text
Input:
Ab

Output:
Nama minimal 3 karakter!
```

---

### Email

Email wajib diisi dan harus memiliki:

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

### Nomor HP

Nomor HP bersifat **opsional**.

Apabila diisi, nomor harus diawali salah satu format berikut:

```text
08
62
+62
```

Contoh valid:

```text
081234567890
6281234567890
+6281234567890
```

Sistem juga memastikan nomor hanya terdiri dari angka.

Pesan error:

```text
Nomor HP harus diawali 08, 62, atau +62!
```

atau:

```text
Nomor HP hanya boleh berisi angka!
```

---

### Pilihan Sesi

Peserta wajib memilih sesi workshop.

Apabila belum memilih sesi, sistem akan menampilkan:

```text
Silakan pilih sesi workshop!
```

---

### Persetujuan

Peserta harus mencentang checkbox persetujuan sebelum melakukan pendaftaran.

Pesan error:

```text
Kamu harus menyetujui pendaftaran!
```

---

## ⚡ Implementasi jQuery

Project ini menggunakan **jQuery 3.7.1** melalui CDN:

```html
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
```

Kemudian file JavaScript utama dipanggil menggunakan:

```html
<script src="script.js"></script>
```

Struktur pemanggilan library terdapat pada bagian akhir HTML.

---

# 🧩 Konsep jQuery yang Digunakan

## 1. Selector

Selector digunakan untuk memilih elemen HTML berdasarkan ID.

Contoh:

```javascript
$("#nama")
$("#email")
$("#nohp")
$("#sesi")
$("#formPendaftaran")
```

Contoh penggunaan:

```javascript
$("#nama").val();
```

Kode tersebut digunakan untuk mengambil nilai dari input dengan ID `nama`.

---

## 2. Event

Project menggunakan beberapa event jQuery.

### `focus()`

Event ini berjalan ketika input mendapatkan fokus.

Contoh:

```javascript
$("#nama").focus(function () {
    $("#errorNama").text("");
    $("#nama").removeClass("error");
});
```

Fungsinya adalah menghapus pesan error ketika pengguna kembali memperbaiki input.

Event yang digunakan:

```text
focus()
blur()
submit()
```

---

## 3. Event `blur()`

Event `blur()` dijalankan ketika pengguna meninggalkan sebuah input.

Contoh:

```javascript
$("#email").blur(function () {
    var email = $("#email").val().trim();

    if (email == "") {
        $("#errorEmail").text("Email wajib diisi!");
        $("#email").addClass("error");
    }
});
```

Dengan demikian, validasi tidak hanya dilakukan ketika tombol submit ditekan, tetapi juga dapat dilakukan ketika pengguna berpindah dari suatu field.

---

## 4. Event `submit()`

Event `submit()` digunakan untuk menangani proses ketika form dikirim.

Contoh:

```javascript
$("#formPendaftaran").submit(function (event) {

    event.preventDefault();

    // proses validasi
});
```

`event.preventDefault()` digunakan agar halaman tidak melakukan reload secara otomatis.

---

# 🛠️ Manipulasi DOM

Salah satu bagian utama project adalah **manipulasi DOM menggunakan jQuery**.

Contohnya:

```javascript
$("#errorNama").text("Nama wajib diisi!");
```

Digunakan untuk mengubah isi pesan error.

Menambahkan class:

```javascript
$("#nama").addClass("error");
```

Menghapus class:

```javascript
$("#nama").removeClass("error");
```

Menghapus isi elemen:

```javascript
$("#hasilPendaftaran").empty();
```

Menambahkan elemen:

```javascript
$("#hasilPendaftaran").append(kartu);
```

---

# 🪪 Kartu Konfirmasi Pendaftaran

Ketika seluruh data valid, sistem akan membuat kartu konfirmasi secara dinamis menggunakan jQuery.

Contoh pembuatan elemen:

```javascript
var kartu = $("<div>");
var judul = $("<h3>")
    .text("✓ Pendaftaran Berhasil!");
```

Kemudian data peserta dimasukkan ke dalam kartu:

```text
Nama
Email
No. HP
Sesi
```

Sistem juga membuat nomor pendaftaran secara otomatis:

```javascript
var nomor =
    "WP" + Math.floor(Math.random() * 1000);
```

Contoh hasil:

```text
Nomor Pendaftaran: WP572
```

Setelah kartu selesai dibuat, elemen ditampilkan ke halaman:

```javascript
$("#hasilPendaftaran")
    .append(kartu)
    .addClass("show");
```

---

# 🖥️ Tampilan Halaman

Halaman terdiri dari beberapa bagian utama.

### Sidebar

Berisi:

```text
School Event
Workshop Center

MENU UTAMA
▦ Pendaftaran
◫ Informasi Workshop
✓ Jadwal

LAINNYA
ℹ Bantuan
```

Sidebar dibuat sebagai navigasi utama halaman.

### Header

Bagian header menampilkan:

```text
▦ / Pendaftaran Workshop
```



### Informasi Workshop

Terdapat informasi:

```text
Workshop : Web Programming
Durasi   : 1 Hari
Peserta  : Mahasiswa
```



### Formulir

Bagian formulir digunakan untuk memasukkan data peserta.

### Informasi Workshop

Bagian informasi workshop menampilkan:

```text
Tanggal : 10 Oktober 2026
Tempat  : Lab Komputer Sekolah
Kuota   : 30 Peserta
```



---

# 📁 Struktur Project

Project dapat disusun seperti berikut:

```text
workshop-web-programming/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

### `index.html`

Berisi struktur halaman dan form pendaftaran.

### `style.css`

Berisi seluruh pengaturan tampilan halaman seperti:

- Layout
- Sidebar
- Form
- Button
- Card
- Error state
- Responsive design

### `script.js`

Berisi seluruh logika:

- Selector
- Event handling
- Validasi
- Manipulasi DOM
- Kartu konfirmasi

### `README.md`

Berisi dokumentasi project.

---

# 🚀 Cara Menjalankan Project

## 1. Clone Repository

```bash
git clone https://github.com/username/workshop-web-programming.git
```

Masuk ke folder:

```bash
cd workshop-web-programming
```

## 2. Buka Project

Buka folder project menggunakan **Visual Studio Code**.

Kemudian buka:

```text
index.html
```

Project dapat dijalankan langsung melalui browser.

Kamu juga dapat menggunakan extension **Live Server** pada VS Code.

---

# 🧪 Contoh Pengujian

## Data Tidak Valid

Masukkan:

```text
Nama  : Ab
Email : mahasiswa
No HP : 123456
Sesi  : -
```

Hasil:

```text
Nama minimal 3 karakter!
Email harus memiliki @ dan titik!
Nomor HP harus diawali 08, 62, atau +62!
Silakan pilih sesi workshop!
Kamu harus menyetujui pendaftaran!
```

---

## Data Valid

Masukkan:

```text
Nama  : Raihan Ikram
Email : raihan@gmail.com
No HP : 081234567890
Sesi  : Sesi Pagi
Setuju: ✓
```

Hasil:

```text
✓ Pendaftaran Berhasil!

Data kamu berhasil didaftarkan.

Nomor Pendaftaran: WP123

Nama   : Raihan Ikram
Email  : raihan@gmail.com
No. HP : 081234567890
Sesi   : Sesi Pagi
```

---

# 📚 Materi yang Diimplementasikan

Project ini menggabungkan beberapa konsep dasar web programming dan jQuery:

```text
HTML
  ↓
Membuat struktur halaman dan form

CSS
  ↓
Mengatur tampilan dan responsive layout

jQuery
  ↓
Selector
  ↓
Event
  ↓
Validasi
  ↓
Manipulasi DOM
  ↓
Kartu Konfirmasi
```

Dengan demikian, project tidak hanya berfungsi sebagai halaman pendaftaran, tetapi juga menjadi contoh penerapan konsep **front-end programming menggunakan jQuery**.

---

# 🎓 Tujuan Pembelajaran

Setelah menyelesaikan project ini, siswa diharapkan mampu:

- Memahami penggunaan selector jQuery.
- Menggunakan event pada elemen HTML.
- Mengambil dan mengubah nilai input.
- Melakukan validasi data form.
- Menampilkan pesan error secara dinamis.
- Menambahkan dan menghapus class CSS menggunakan jQuery.
- Membuat elemen HTML menggunakan jQuery.
- Menampilkan hasil input pengguna tanpa melakukan reload halaman.
- Menggabungkan HTML, CSS, JavaScript, dan jQuery menjadi sebuah aplikasi web sederhana.

---

# 💡 Kesimpulan

**Workshop Web Programming Registration Page** merupakan implementasi sederhana dari sistem pendaftaran berbasis web.

Project ini menerapkan empat konsep utama:

> **Selector + Event + Manipulasi DOM + Validasi**

Alur kerja aplikasi:

```text
User mengisi form
       ↓
Event dijalankan
       ↓
Data divalidasi
       ↓
Apakah valid?
   ↙         ↘
 Tidak       Ya
  ↓           ↓
Pesan Error   Generate Nomor
              ↓
        Buat Kartu Konfirmasi
              ↓
       Tampilkan ke halaman
```

Project ini menunjukkan bagaimana **jQuery dapat digunakan untuk membuat halaman web menjadi interaktif** tanpa harus melakukan refresh halaman setiap kali pengguna melakukan validasi atau pendaftaran.

---

## 👨‍💻 Author

**Raihan Ikram Maulana**

Information Systems Student  
Universitas Tanjungpura

---

## 📄 License

Project ini dibuat untuk keperluan **pembelajaran dan tugas akademik** pada materi Web Programming.

© 2026 — Workshop Web Programming
