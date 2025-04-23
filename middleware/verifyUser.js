import { generateJWT } from "../jwt/userJWT.js";
import { userModel } from "../models/userModel.js";
import "dotenv/config";

async function verifyUser(req, res, next) {
  try {
    const errors = [];
    const { username, password } = req.body;

    // Validate inputs
    if (!username) errors.push("Username required");
    if (!password) errors.push("Password required");

    // Check if there are validation errors
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    // If no validation errors, find the user
    const data = await userModel.find({ username, password });

    // Check if user exists
    if (!data || data.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    const token = generateJWT(data[0], process.env.SECRET_KEY);
    return res.json({ data, token });
  } catch (error) {
    console.error("Authentication error:", error);
    return res.status(500).json({ error: "Server error occurred" });
  }
}

export { verifyUser };
