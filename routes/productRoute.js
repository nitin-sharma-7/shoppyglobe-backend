import express from "express";
import { getProducts } from "../controllers/productController.js";

const router = express.Router();

// GET /products -> Fetch a list of all products
// Calls the getProducts controller which will return all products if no ID is provided
router.get("/products", getProducts);

// GET /products/:id -> Fetch details of a single product by its ID
// Calls the getProducts controller with an ID to fetch a specific product
router.get("/products/:id", getProducts);

export default router;
