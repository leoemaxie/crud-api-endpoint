const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Crud API Endpoint Documentation',
      version: '1.0.0',
      description: 'Documentation for the crud-api-endpoint for a Person Resource',
    },
  },
  apis: ['./routes/*.js'],
};

//module.exports = swaggerJsdoc(options);
