const request = require('supertest');
const app = require('./index');

test('GET / returns a welcome message', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Hello from CI/CD Lab! - v2');
});

test('GET /health returns healthy status', async () => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
    expect(response.body.status).toBe('healthy');
});

test('GET /add/3/4 returns 7', async () => {
    const response = await request(app).get('/add/3/4');
    expect(response.status).toBe(200);
    expect(response.body.result).toBe(7);
});