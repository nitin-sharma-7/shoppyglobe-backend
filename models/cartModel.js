import { Schema, model } from "mongoose";

const cartSchema = new Schema({
  productId: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: [1, "Quantity cannot be less than 1"],
    default: 1,
  },
});

export const cartModel = model("cart", cartSchema);
