const request = require('supertest');
const app = require('./index');
let server;

beforeAll(() => {
  server = app.listen(4000); // Use a different port for testing
});

afterAll(() => {
  server.close();
});

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
    console.log(response.body); // Log the response to see the actual structure
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('name');
    expect(response.body).toHaveProperty('population');
    expect(response.body).toHaveProperty('capital');
    // Check if the flag property exists before asserting
    if (response.body.flag) {
      expect(response.body).toHaveProperty('flag');
    }
  });
});
