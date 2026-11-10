import api from './api.js';
export default {
  async getAll() { return (await api.get('/barang')).data; },
  async getById(id) { return (await api.get(`/barang/${id}`)).data; },
  async create(data) { return (await api.post('/barang', data)).data; },
  async update(id, data) { return (await api.put(`/barang/${id}`, data)).data; },
  async remove(id) { return (await api.delete(`/barang/${id}`)).data; },
};
