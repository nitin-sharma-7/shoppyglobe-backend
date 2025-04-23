import express from "express";
import {
  deleteCart,
  postCart,
  updateCart,
} from "../controllers/cartController.js";
import { cartValidate } from "../middleware/cartValidate.js";
import { jwtAtuh } from "../jwt/userJWT.js";
import { duplicate } from "../middleware/checkDuplicate.js";

const router = express.Router();

// POST /cart -> Add an item to the cart
// The route is protected by JWT authentication, validates the request body,
// and checks for duplicates in the cart before adding the item
router.post("/cart", jwtAtuh, cartValidate, duplicate, postCart);

// PUT /cart/:id -> Update the quantity of an item in the cart
// The route is protected by JWT authentication and allows updating cart items
router.put("/cart/:id", jwtAtuh, updateCart);

// DELETE /cart/:id -> Remove an item from the cart
// The route is protected by JWT authentication and removes the specified cart item
router.delete("/cart/:id", jwtAtuh, deleteCart);

export default router;
