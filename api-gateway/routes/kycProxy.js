import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { verifyToken } from '../middleware/verifyToken';

const router = express.Router();

router.use(
    '/',
    verifyToken,
    createProxyMiddleware({
        target: 'http://kyc-service:8000',
        changeOrigin: true,
    })
);

export default router;