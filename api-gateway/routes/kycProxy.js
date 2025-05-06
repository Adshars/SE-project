import express from 'express';
import axios from 'axios';
import { verifyToken } from '../middleware/verifyToken.js';

const router = express.Router();

// Wszystkie requesty do /search będą obsługiwane z tokenem
router.post('/search', verifyToken, async (req, res) => {
  try {
    const response = await axios.post('http://kyc-service:8000/search', req.body, {
      headers: {
        Authorization: req.headers.authorization // przekazanie tokena dalej, opcjonalne
      }
    });

    res.json(response.data);
  } catch (error) {
    console.error('[API-GATEWAY] Błąd komunikacji z kyc-service:', error.message);
    res.status(500).json({ error: 'Błąd podczas łączenia z KYC Service' });
  }
});

export default router;