const express = require('express');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
//const specs = require('./swaggerConfig');
const app = express();

require('dotenv').config();
connectDB();

// Connect to MongoDB using Mongoose
async function connectDB()
{
  await mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch(err => {
      console.error('Error connecting to MongoDB:', err);
    });
}

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to database');
});
// Serve Swagger documentation
//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// API endpoints
const del = require('./routes/delete');
const get = require('./routes/get');
const patch = require('./routes/patch');
const post = require('./routes/post');
const put = require('./routes/put');

/*app.use('/api', del);
app.use('/api', get);
app.use('/api', patch);
app.use('/api', post);
app.use('/api', patch);*/

app.use('/api', get);
// Listens to incoming requests
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

