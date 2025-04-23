import mongoose from "mongoose";

const connectDB = async (url) => {
  try {
    await mongoose.connect(url);
    console.log("db connected");
  } catch (error) {
    console.log(error.message);
    console.log("connection failed");
  }
};
export { connectDB };
