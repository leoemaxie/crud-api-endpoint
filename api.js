const createServer = require('./server');
const connectDB = require('./database/database');
const app = createServer();

require('dotenv').config();

app.get('/', (req, res) => {
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>CRUD API Endpoint</title>
      <style>
        body {
          font-family: 'Arial', sans-serif;
          background-color: #f7f7f7;
          text-align: center;
          padding: 50px;
          margin: 0;
        }
        .container {
          background-color: #ffffff;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          padding: 20px;
        }
        h1 {
          color: #333;
        }
        p {
          color: #555;
        }
        a {
          text-decoration: none;
          color: #007bff;
          font-weight: bold;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>CRUD API Endpoint</h1>
        <p>An API endpoint that performs CRUD operation on a person resource</p>
        <p>To get started, click on the link below:</p>
        <p><a href="/api-docs">API Documentation</a></p>
      </div>
    </body>
    </html>
  `;

  res.send(htmlContent);
});

(async () => {
  const PORT = process.env.PORT || 3000;
  await connectDB(process.env.MONGO_URI);
  app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
  });
})();
