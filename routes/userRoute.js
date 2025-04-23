import { Router } from "express";
import { registerUser } from "../controllers/userController.js";
import { userValidate } from "../middleware/userValidate.js";
import { verifyUser } from "../middleware/verifyUser.js";

const router = Router();

// POST /register -> Register a new user
// Validates user data using userValidate middleware and then calls registerUser to add the user
router.post("/register", userValidate, registerUser);

// POST /login -> Login an existing user
// Verifies the user credentials using verifyUser middleware, and if successful, generates a JWT token
router.post("/login", verifyUser);

export default router;
