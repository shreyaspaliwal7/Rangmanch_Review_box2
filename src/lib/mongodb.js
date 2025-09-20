import mongoose from "mongoose";

// const MONGODB_URI = process.env.MONGODB_URI; // put this in .env.local
 const MONGODB_URI="mongodb+srv://shahidkapoor31122005_db_user:lfrchRWbRCijBEus@rangmanch.3ut8zxj.mongodb.net/?retryWrites=true&w=majority&appName=Rangmanch"

if (!MONGODB_URI) {
  throw new Error("Please add your Mongo URI to .env.local");
}

// Global is used here to prevent multiple connections during hot reloads in dev
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
    }).then((mongoose) => {
      return mongoose;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default dbConnect;
