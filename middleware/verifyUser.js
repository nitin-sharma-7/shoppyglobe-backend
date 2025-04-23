import { generateJWT } from "../jwt/userJWT.js";
import { userModel } from "../models/userModel.js";
import "dotenv/config";

// Middleware to verify user during login
async function verifyUser(req, res, next) {
  try {
    const errors = [];
    const { username, password } = req.body;

    // Validate that both username and password are provided
    if (!username) errors.push("Username required");
    if (!password) errors.push("Password required");

    // If there are validation errors, return them with a 400 status
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    // If validation passes, check if the user exists in the database
    const data = await userModel.find({ username, password });

    // If no user is found, return a 404 status with a user not found message
    if (!data || data.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    // Generate JWT token for the found user
    const token = generateJWT(data[0], process.env.SECRET_KEY);

    // Return the user data along with the token
    return res.json({ data, token });
  } catch (error) {
    // Log error and send a 500 status in case of a server error
    console.error("Authentication error:", error);
    return res.status(500).json({ error: "Server error occurred" });
  }
}

export { verifyUser };
