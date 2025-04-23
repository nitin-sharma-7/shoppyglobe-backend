// GET /products: Fetch a list of products from MongoDB.
// ○ GET /products/
// : Fetch details of a single product by its ID.

import { productsModel } from "../database/products.js";

async function getProducts(req, res) {
  try {
    const id = req.params.id;
    if (id) {
      const data = await productsModel.find({ _id: id });
      return res.json(data);
    } else {
      const data = await productsModel.find();
      return res.json(data);
    }
  } catch (error) {
    console.error("Error geting products:", error.message);
    res.status(500).json({ message: "Server Error" });
  }
}

export { getProducts };
