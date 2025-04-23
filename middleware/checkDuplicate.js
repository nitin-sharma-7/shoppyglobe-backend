import { cartModel } from "../models/cartModel.js";

// Middleware to check if the product already exists in the cart
const duplicate = async (req, res, next) => {
  const { productId, quantity } = req.body;

  // Check if a cart item with the given productId already exists
  const cartCheck = await cartModel.find({ productId });

  // If product is already in the cart, return a message and stop further processing
  if (cartCheck.length !== 0) return res.json("Cart item already exists");

  // Proceed to the next middleware if product does not exist in the cart
  next();
};

export { duplicate };
