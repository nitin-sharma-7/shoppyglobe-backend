import mongoose from "mongoose";

// Define a Mongoose model for products with a flexible schema
const productsModel = mongoose.model(
  "product",
  new mongoose.Schema({}, { strict: false }) // Accept any structure by disabling schema strictness
);

// Fetch product data from an external API and insert it into the MongoDB database
async function fetchData() {
  // Fetch data from DummyJSON API
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  const products = data.products;

  // Insert each product into the database
  for (const product of products) {
    await productsModel.create(product);
  }
}

export { productsModel };
export default fetchData;
