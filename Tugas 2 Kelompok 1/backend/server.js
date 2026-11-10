import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import barangRoutes from './routes/barangRoutes.js';

const app = express();
const allowedOrigins = (process.env.FRONTEND_ORIGIN || 'http://localhost:5173')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(cors({
  origin(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) return callback(null, true);
    const error = new Error('Origin tidak diizinkan.');
    error.status = 403;
    return callback(error);
  },
}));
app.use(express.json());
app.get('/', (req, res) => res.json({ success: true, message: 'API Inventaris Barang aktif.' }));
app.use('/api/barang', barangRoutes);

app.use((req, res) => res.status(404).json({ success: false, message: 'Endpoint tidak ditemukan.' }));

app.use((error, req, res, next) => {
  if (res.headersSent) return next(error);
  if (error instanceof SyntaxError && error.status === 400 && error.type === 'entity.parse.failed') {
    return res.status(400).json({ success: false, message: 'JSON request tidak valid.' });
  }
  console.error(error);
  return res.status(error.status === 403 ? 403 : 500).json({
    success: false,
    message: error.status === 403 ? 'Origin tidak diizinkan.' : 'Terjadi kesalahan internal server.',
  });
});

const PORT = Number(process.env.PORT || 3000);
app.listen(PORT, () => console.log(`Backend berjalan di http://localhost:${PORT}`));
