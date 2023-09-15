const request = require('supertest');
const expect = require('chai').expect;
const mongoose = require("mongoose")
const createServer = require('../server')

require('dotenv').config();

beforeEach((done) => {
  mongoose.connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true },
    () => done()
  )
});

afterEach((done) => {
  mongoose.connection.db.dropDatabase(() => {
    mongoose.connection.close(() => done())
  })
})

const app = createServer();

describe('API Endpoint Test', () => {

  it('should create a new resource', async () => {
    await request(app)
      .post('/api')
      .send({
        "name": "Leo Emaxie"
      })
      .expect(201)
      .end((err, res) => {
        if (err) done(err);
        done();
      });
  });

  it('should reject invalid content-Type', async () => {
    const response = await request(app).post('/api').send("<div></div");
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
