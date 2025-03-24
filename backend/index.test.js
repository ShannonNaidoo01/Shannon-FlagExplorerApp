const request = require('supertest');
const app = require('./index'); // Import the app instead of running it

describe('GET /countries', () => {
  it('should return a list of countries', async () => {
    const response = await request(app).get('/countries');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });
});

describe('GET /countries/:name', () => {
  it('should return details of a specific country', async () => {
    const response = await request(app).get('/countries/USA');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('name');
    expect(response.body).toHaveProperty('population');
    expect(response.body).toHaveProperty('capital');
    expect(response.body).toHaveProperty('flag');
  });
});
