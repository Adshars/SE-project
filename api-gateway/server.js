import express, { response } from 'express';
import dotenv from 'dotenv';
import axios from 'axios';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { verifyToken } from './middleware/verifyToken.js';
import authProxy from './routes/authProxy.js';

dotenv.config();
const app = express();
app.use(express.json());

// Obsługa logowania - proxy do Auth Service
app.use('/', authProxy);

// Proxy do kyc-service z weryfikacją tokena

app.post('/search', verifyToken, async (req, res) => {
  try {
    const response = await axios.post('http://kyc-service:8000/search', req.body);
      res.json(response.data);
    } catch (error) {
      console.error('[API-GATEWAY] Błąd komunikacji z kyc-service:', err.message);
      res.status(500).json({ error: 'Internal server error' });
    }
});

// Stat serwera

app.listen(3000, () => {
  console.log('API Gateway on port 3000');
});
