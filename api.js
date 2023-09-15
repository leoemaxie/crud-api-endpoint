const createServer = require('./server');
const connectDB = require('./database/database');

require('dotenv').config();

(async () => {
  const app = createServer();
  const PORT = process.env.PORT || 3000;

  await connectDB(process.env.MONGO_URI);
  app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
  });
})();
