import express from "express";
import "dotenv/config";
import { connectDB } from "./database/connectDB.js";
import cartRouter from "./routes/cartRoute.js";
import { statusLogger } from "./middleware/statusLogger.js";
import { errorHandler } from "./middleware/errorHandler.js";
import productRouter from "./routes/productRoute.js";
import userRouter from "./routes/userRoute.js";
// import fetchData from "./database/products.js"; // Optionally, to seed data

const app = express();

// Connect to MongoDB using environment variable or local URL
connectDB(process.env.MONGO_URL || "mongodb://localhost:27017");

// Middleware to parse incoming JSON data
app.use(express.json());

// Middleware to log request statuses (e.g., HTTP methods, response status)
app.use(statusLogger);

// Use the routes for handling cart, products, and user-related requests
app.use(cartRouter);
app.use(productRouter);
app.use(userRouter);

// Error handler middleware to handle any errors that occur in the routes
app.use(errorHandler);

// Set the port for the server to listen on
const port = process.env.PORT || 2000;

// Optionally, to seed the MongoDB database with product data
// fetchData();

// Start the server and log the message
app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
