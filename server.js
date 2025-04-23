import express from "express";
import "dotenv/config";
import { connectDB } from "./database/connectDB.js";
import cartRouter from "./routes/cartRoute.js";

import { statusLogger } from "./middleware/statusLogger.js";
import { errorHandler } from "./middleware/errorHandler.js";
import productRouter from "./routes/productRoute.js";

import userRouter from "./routes/userRoute.js";
// import fetchData from "./database/products.js";

const app = express();
connectDB(process.env.MONGO_URL || "mongodb://localhost:27017");
app.use(express.json());
app.use(statusLogger);
app.use(cartRouter);
app.use(productRouter);
app.use(userRouter);

app.use(errorHandler);
const port = process.env.PORT || 2000;
// to store api data to moongodb
// fetchData();
app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});
