import * as barangModel from '../models/barangModel.js';

const fail = (res, message, status = 400) => res.status(status).json({ success: false, message });

function validate(data) {
  if (!data || typeof data !== 'object' || Array.isArray(data)) return 'Request body harus berupa object JSON.';
  if (typeof data.kode_barang !== 'string' || !data.kode_barang.trim()) return 'Kode barang wajib berupa string dan tidak boleh kosong.';
  if (typeof data.nama_barang !== 'string' || !data.nama_barang.trim()) return 'Nama barang wajib berupa string dan tidak boleh kosong.';
  if (data.kode_barang.trim().length > 50) return 'Kode barang maksimal 50 karakter.';
  if (data.nama_barang.trim().length > 150) return 'Nama barang maksimal 150 karakter.';
  if (data.kategori !== undefined && data.kategori !== null && typeof data.kategori !== 'string') return 'Kategori harus berupa string atau null.';
  if (typeof data.kategori === 'string' && data.kategori.trim().length > 100) return 'Kategori maksimal 100 karakter.';
  if (data.satuan !== undefined && typeof data.satuan !== 'string') return 'Satuan harus berupa string.';
  if (typeof data.satuan === 'string' && data.satuan.trim().length > 20) return 'Satuan maksimal 20 karakter.';
  if (typeof data.harga !== 'number' || !Number.isFinite(data.harga) || data.harga < 0) return 'Harga wajib berupa angka finite dan tidak negatif.';
  if (typeof data.stok !== 'number' || !Number.isInteger(data.stok) || data.stok < 0) return 'Stok wajib berupa bilangan bulat tidak negatif.';
  return {
    kode_barang: data.kode_barang.trim(),
    nama_barang: data.nama_barang.trim(),
    kategori: typeof data.kategori === 'string' && data.kategori.trim() ? data.kategori.trim() : null,
    harga: data.harga,
    stok: data.stok,
    satuan: typeof data.satuan === 'string' && data.satuan.trim() ? data.satuan.trim() : 'pcs',
  };
}

export async function getAll(req, res) {
  try { res.json({ success: true, data: await barangModel.getAllBarang() }); }
  catch (error) { console.error(error); fail(res, 'Gagal mengambil data barang.', 500); }
}

export async function getOne(req, res) {
  try {
    const data = await barangModel.getBarangById(req.params.id);
    if (!data) return fail(res, 'Barang tidak ditemukan.', 404);
    res.json({ success: true, data });
  } catch (error) { console.error(error); fail(res, 'Gagal mengambil data barang.', 500); }
}

export async function create(req, res) {
  const data = validate(req.body);
  if (typeof data === 'string') return fail(res, data);
  try { res.status(201).json({ success: true, data: await barangModel.createBarang(data) }); }
  catch (error) { if (error.code === 'ER_DUP_ENTRY') return fail(res, 'Kode barang sudah digunakan.', 409); console.error(error); fail(res, 'Gagal menambahkan barang.', 500); }
}

export async function update(req, res) {
  const data = validate(req.body);
  if (typeof data === 'string') return fail(res, data);
  try {
    const updated = await barangModel.updateBarang(req.params.id, data);
    if (!updated) return fail(res, 'Barang tidak ditemukan.', 404);
    res.json({ success: true, data: updated, message: 'Barang berhasil diperbarui.' });
  } catch (error) { if (error.code === 'ER_DUP_ENTRY') return fail(res, 'Kode barang sudah digunakan.', 409); console.error(error); fail(res, 'Gagal memperbarui barang.', 500); }
}

export async function remove(req, res) {
  try {
    if (!await barangModel.deleteBarang(req.params.id)) return fail(res, 'Barang tidak ditemukan.', 404);
    res.json({ success: true, message: 'Barang berhasil dihapus.' });
  } catch (error) { console.error(error); fail(res, 'Gagal menghapus barang.', 500); }
}
