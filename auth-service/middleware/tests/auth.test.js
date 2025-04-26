import request from 'supertest';
import app from '../server.js';

describe('Auth Service', () => {
    it('should register a new user', async () => {
        const res = await request(app).post('/register').send({
            email: 'test@example.com',
            password: '123456789',
            organisation: 'Test Org'
        });
        expect(res.statusCode).toBe(201);
    });

    it('should login an existing user and return token', async () => {
        const res = await request(app).post('/login').send({
            email: 'test@example.com',
            password: '123456789'
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.message).toBeDefined();
    });

    it('should reset password for existing user', async () => {
        const res = await request(app).post('/reset-password').send({
            email: 'test@example.com',
            password: 'newpassword123'
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.message).tomatch(/Password reset successful/);
    });
});
