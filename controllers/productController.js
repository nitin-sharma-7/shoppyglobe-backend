// GET /products -> Fetch all products
// GET /products/:id -> Fetch a single product by ID

import { productsModel } from "../database/products.js";

async function getProducts(req, res) {
  try {
    const id = req.params.id;

    // If ID is provided, fetch the specific product by _id
    if (id) {
      const data = await productsModel.find({ _id: id });

      // Return the product data (even if empty)
      return res.status(200).json(data);
    } else {
      // If no ID is provided, fetch all products
      const data = await productsModel.find();

      // Return the list of all products
      return res.status(200).json(data);
    }
  } catch (error) {
    // Log the error and send internal server error response
    console.error("Error getting products:", error.message);
    res.status(500).json({ message: "Server Error" });
  }
}

export { getProducts };
