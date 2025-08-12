import express from 'express';

import { connectDB, getDBConnection } from './db/db_config.js';

const app = express();


connectDB()
.then(() => {
  app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on port ${process.env.PORT || 3000}`);
  });
})
.catch((error) => {
  console.error('Failed to connect to the database:', error.message);
  process.exit(1);
});

/*
(async () => {
  await connectDB(); // connect and store in variable

  // Example: use stored connection
  const db = getDBConnection();
  console.log(`Connected to database: ${db.name}`);

  app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on port ${process.env.PORT || 3000}`);
  });
})();
*/
