const express = require('express');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
//const specs = require('./swaggerConfig');
const app = express();

const del = require('./routes/delete');
const get = require('./routes/get');
const patch = require('./routes/patch');
const post = require('./routes/post');
const put = require('./routes/put');
const connectDB = require('./database/database');

require('dotenv').config();

// Serve Swagger documentation
//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// API endpoints
app.use('/api', del);
app.use('/api', get);
app.use('/api', patch);
app.use('/api', post);
app.use('/api', patch);

(async () => {
  await connectDB(process.env.MONGO_URI);

  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
  });
})();

