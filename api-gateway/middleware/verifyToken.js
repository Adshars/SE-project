import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'supersecret';

export function verifyToken(req, res, next) {
    const authHeader = req.headers['authorization'];

    if(!authHeader) {
        return res.status(401).json({ error: 'Brak tokena autoryzacyjnego' });
    }

    const token = authHeader.split(' ')[1];
    if(!token) {
        return res.status(401).json({ error: 'Nieprawidłowy format nagłówka Authorization' });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded; // możemy dalej przekazać  usera
        next();
    } catch (err) {
        return res.status(403).json({ error: 'Nieprawidłowy token lub token wygasł' });
    }
}