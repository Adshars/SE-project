import express from 'express';
import axios from 'axios';

const router = express.Router();

// Endpoint do logowania
router.post('/login', async (req, res) => {
  try {
    const response = await axios.post('http://localhost:4000/login', {
      email: req.body.email,
      password: req.body.password,
    });

    // Jeśli wszystko OK, zwróć token
    res.status(200).json({ token: response.data.token });
  } catch (error) {
    if (error.response) {
      // Jeśli Auth Service zwrócił błąd (np. 401, 404)
      res.status(error.response.status).json({ message: error.response.data.message });
    } else {
      // Inne błędy (np. brak połączenia)
      res.status(500).json({ message: 'Błąd komunikacji z Auth Service' });
    }
  }
});

export default router;
