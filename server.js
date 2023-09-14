const express = require('express');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
//const specs = require('./swaggerConfig');
const app = express();

const deleteHandler = require('./routes/delete');
const getHandler = require('./routes/get');
const patchHandler = require('./routes/patch');
const postHandler = require('./routes/post');
const putHandler = require('./routes/put');
const connectDB = require('./database/database');

require('dotenv').config();

// Serve Swagger documentation
//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.use(express.json());

// API endpoints
app.use('/', deleteHandler);
app.use('/', getHandler);
app.use('/', patchHandler);
app.use('/', postHandler);
app.use('/', putHandler);

(async () => {
  await connectDB(process.env.MONGO_URI);

  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
  });
})();

