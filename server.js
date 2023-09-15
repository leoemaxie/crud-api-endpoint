const swaggerUi = require('swagger-ui-express');
const specs = require('./swaggerConfig');

// Routes handlers
const deleteHandler = require('./routes/delete');
const getHandler = require('./routes/get');
const patchHandler = require('./routes/patch');
const postHandler = require('./routes/post');
const putHandler = require('./routes/put');

function createServer() {
  const express = require('express');
  const app = express();

  // Parse JSON content-Type
  app.use(express.json({ strict: true }));

  // API endpoints
  app.use('/', deleteHandler);
  app.use('/', getHandler);
  app.use('/', patchHandler);
  app.use('/', postHandler);
  app.use('/', putHandler);

  // Serve Swagger documentation
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

  return app;
}

module.exports = createServer;
