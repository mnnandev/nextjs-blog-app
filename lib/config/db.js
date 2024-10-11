import mongoose from 'mongoose';

const url = process.env.MONGODB_URL;

if (!url) {
  throw new Error('Please define the MONGODB_URL environment variable in .env.local');
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectToDatabase() {
  if (cached.conn) {
    console.log("Using cached MongoDB connection");
    return cached.conn;
  }

  if (!cached.promise) {
    // Create a new connection to the database
    console.log("Connecting to MongoDB");
    cached.promise = mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then((mongoose) => {
      console.log("MongoDB Connected");
      return mongoose;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectToDatabase;
