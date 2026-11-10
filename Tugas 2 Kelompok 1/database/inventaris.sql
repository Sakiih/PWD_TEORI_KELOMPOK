CREATE DATABASE IF NOT EXISTS db_inventaris
  CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE db_inventaris;

CREATE TABLE IF NOT EXISTS barang (
  id INT AUTO_INCREMENT PRIMARY KEY,
  kode_barang VARCHAR(50) NOT NULL UNIQUE,
  nama_barang VARCHAR(150) NOT NULL,
  kategori VARCHAR(100) NULL,
  harga DECIMAL(12,2) NOT NULL,
  stok INT NOT NULL DEFAULT 0,
  satuan VARCHAR(20) DEFAULT 'pcs',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- INSERT IGNORE membuat seed aman dijalankan ulang: kode barang yang sudah ada diabaikan.
-- Konsekuensinya, error insert selain duplikasi juga dapat tersamarkan.
-- Setelah import, periksa hasilnya dengan: SELECT * FROM barang ORDER BY id;
INSERT IGNORE INTO barang (kode_barang, nama_barang, kategori, harga, stok, satuan) VALUES
('BRG-001', 'Laptop Asus Vivobook', 'Elektronik', 7500000, 10, 'unit'),
('BRG-002', 'Mouse Logitech M170', 'Aksesoris', 85000, 50, 'pcs'),
('BRG-003', 'Keyboard Mechanical', 'Aksesoris', 350000, 20, 'pcs'),
('BRG-004', 'Monitor LG 24 inch', 'Elektronik', 1800000, 5, 'unit'),
('BRG-005', 'Kabel HDMI 2m', 'Aksesoris', 45000, 100, 'pcs');
