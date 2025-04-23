import mongoose from "mongoose";

const productsModel = mongoose.model(
  "product",
  new mongoose.Schema({}, { strict: false })
);
async function fetchData() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  const products = data.products;

  for (const product of products) {
    await productsModel.create(product);
  }
}
export { productsModel };
export default fetchData;
