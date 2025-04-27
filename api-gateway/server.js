import express from 'express';
import dotenv from 'dotenv';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { verifyToken } from './middleware/verifyToken.js';

dotenv.config();
const app = express();

app.use('/sanctions', verifyToken, createProxyMiddleware({
  target: 'http://sanctions-service:8000',
  changeOrigin: true,
  pathRewrite: { '^/sanctions': '/' }
}));

app.listen(3000, () => {
  console.log('API Gateway on port 3000');
});