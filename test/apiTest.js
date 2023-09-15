const request = require('supertest');
const server = require('../server');
const expect = require('chai').expect;

describe('API Endpoint Test', () => {

  before((done) => {
    server.start()
      .then(() => done());
  });
  it('should create a new resource', async () => {
    const response = await request(server).post('/api').send({
      "name": "Leo Emaxie"
    });
    expect(response.status).toBe(201);
    done();
  });

  it('should reject invalid content-Type', async () => {
    const response = await request(server).post('/api').send("<div></div");
    expect(response.status).toBe(400);
    done();
  });

  it('should retrive a user', async () => {
    const response = await request(server).get('/api/Leo%Emaxie');
    expect(response.status).toBe(200);
    done();
  });

  it('should retrive a user with a name attribute', async () => {
    const response = await request(server).get('/api/Leo%Emaxie');
    expect(Object.keys(response.body).length).toBe(2);
    expect(response.body.name).toBe("Leo Emaxie");
    done();
  });

  it('should return a response object with the specified type', async () => {
    const response = await request(server).get('/api/Leo%Emaxie');
    expect(typeof response.body.id).toBe("number");
    expect(typeof response.body.name).toBe("string");
    done();
  });

  it('should update a user using PUT', async () => {
    const response = await request(server).put('/api/Leo%Emaxie').send({
      "name": "leoemaxie"
    });
    expect(response.status).toBe(200);
    done();
  });

  it('should update a user using PATCH', async () => {
    const response = await request(server).patch('/api/leoemaxie').send({
      "name": "leo"
    });
    expect(response.status).toBe(200);
    done();
  });

  it('should delete a user', async () => {
    await request(server).delete('/api/leo');
    const response = await request(server).get('/api/leo');
    expect(response.status).toBe(404);
    done();
  });

}); 
