// db.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error('MONGODB_URI not set in .env file');
  process.exit(1);
}

let dbConnection = null;

export const connectDB = async () => {
  try {
    const connection = await mongoose.connect(MONGODB_URI);
    dbConnection = connection.connection; // store the actual connection
    console.log('Connected to MongoDB');
    return dbConnection;
  } catch (error) {
    console.error('Database connection error:', error.message);
    process.exit(1);
  }
};

export const getDBConnection = () => {
  if (!dbConnection) {
    throw new Error('Database not connected. Call connectDB() first.');
  }
  return dbConnection;
};
