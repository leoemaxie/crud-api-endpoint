const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);

const deleteHandler = require('./routes/delete');
const getHandler = require('./routes/get');
const patchHandler = require('./routes/patch');
const postHandler = require('./routes/post');
const putHandler = require('./routes/put');
const connectDB = require('./database/database');

const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const specs = require('./swaggerConfig');

require('dotenv').config();

// Parse JSON content-Type
app.use(express.json());

// API endpoints
app.use('/', deleteHandler);
app.use('/', getHandler);
app.use('/', patchHandler);
app.use('/', postHandler);
app.use('/', putHandler);

// Serve Swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

module.exports = {
  start: async () => {
    const PORT = process.env.PORT || 3000;
    await connectDB(process.env.MONGO_URI);
    server.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    });
  },

  stop: () => {
    server.close(() => {
      console.log('Server is closed');
    });
  },
};
