import { Router } from "express";
import { registerUser } from "../controllers/userController.js";
import { userValidate } from "../middleware/userValidate.js";
import { verifyUser } from "../middleware/verifyUser.js";
const router = Router();
router.post("/register", userValidate, registerUser);
router.post("/login", verifyUser);

export default router;
