import { cartModel } from "../models/cartModel.js";

const duplicate = async (req, res, next) => {
  const { productId, quantity } = req.body;
  const cartCheck = await cartModel.find({ productId });
  if (cartCheck.length != 0) return res.json("cart item already exist");
  next();
};

export { duplicate };
