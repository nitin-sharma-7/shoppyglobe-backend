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
router.post("/cart", jwtAtuh, cartValidate, duplicate, postCart);
router.put("/cart/:id", jwtAtuh, updateCart);
router.delete("/cart/:id", jwtAtuh, deleteCart);

export default router;
