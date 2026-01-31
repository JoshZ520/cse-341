const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contacts API',
    description: 'API for managing contacts with MongoDB',
    version: '1.0.0'
  },
  host: 'localhost:3000',
  schemes: ['http', 'https'],
  tags: [
    {
      name: 'Contacts',
      description: 'Endpoints for managing contacts'
    }
  ]
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/contacts.js'];

// Generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);
