const request = require('supertest');

const server = require('./server.js');
const db = require('../data/dbConfig');



describe('the route handlers', () => {

  describe('get /', () => {
    it('responds with 200', async () => {
      const response = await request(server).get('/');

      expect(response.status).toBe(200);
    })

    it('responds with json', async () => {
      const response = await request(server).get('/');

      expect(response.type).toMatch(/json/i);
    })

    it('sends correct response object', async () => {
      const response = await request(server).get('/');

      expect (response.body).toEqual({ API: 'Working' });
    })
  });

})

describe('get /pets', () => {

  it('responds with 200', async () => {
   
    const response = await request(server).get('/pets');

    expect(response.status).toBe(200);
  })

  it('sends correct response object', async () => {
    const response = await request(server).get('/pets');

    expect(response.body.length).toBe(0);
  })

})


describe('post /pets', () => {

  afterEach(async () => {
    await db('pets').truncate();
  });

  it('responds with 201 when body is correct', async () => {
    const body = { name: 'Jazzy' };
    const response = await request(server).post('/pets').send(body);

    expect(response.status).toBe(201);
  })

  it('responds with 400, when body is missing data', async () => {
    const body = {};
    const response = await request(server).post('/pets').send(body);

    expect(response.status).toBe(400);
  })

})


