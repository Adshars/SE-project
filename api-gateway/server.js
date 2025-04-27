import express from 'express';
import dotenv from 'dotenv';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { verifyToken } from './middleware/verifyToken.js';
import authProxy from './routes/authProxy.js';

dotenv.config();
const app = express();
app.use(express.json());

// Obsługa logowania - proxy do Auth Service
app.use('/', authProxy);

// Obsługa /sanctions - proxy do Sanctions Service
// app.use('/sanctions', verifyToken, createProxyMiddleware(...))

app.listen(3000, () => {
  console.log('API Gateway on port 3000');
});
