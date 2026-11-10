import pool from '../config/db.js';

export async function getAllBarang() {
  const [rows] = await pool.query('SELECT * FROM barang ORDER BY id DESC');
  return rows;
}

export async function getBarangById(id) {
  const [rows] = await pool.query('SELECT * FROM barang WHERE id = ?', [id]);
  return rows[0];
}

export async function createBarang(data) {
  const [result] = await pool.query(
    'INSERT INTO barang (kode_barang, nama_barang, kategori, harga, stok, satuan) VALUES (?, ?, ?, ?, ?, ?)',
    [data.kode_barang, data.nama_barang, data.kategori || null, data.harga, data.stok, data.satuan || 'pcs'],
  );
  return getBarangById(result.insertId);
}

export async function updateBarang(id, data) {
  const [result] = await pool.query(
    'UPDATE barang SET kode_barang = ?, nama_barang = ?, kategori = ?, harga = ?, stok = ?, satuan = ? WHERE id = ?',
    [data.kode_barang, data.nama_barang, data.kategori || null, data.harga, data.stok, data.satuan || 'pcs', id],
  );
  return result.affectedRows ? getBarangById(id) : null;
}

export async function deleteBarang(id) {
  const [result] = await pool.query('DELETE FROM barang WHERE id = ?', [id]);
  return result.affectedRows > 0;
}
