import jwt from "jsonwebtoken";
import "dotenv/config";

// Middleware to authenticate JWT token
const jwtAtuh = (req, res, next) => {
  const Authorization = req.headers.authorization;

  // Check if Authorization header exists
  if (!Authorization) return res.json("Authorization not found");

  // Extract the token from the "Bearer <token>" format
  const token = Authorization.split(" ")[1];
  if (!token) return res.json("token not found");

  try {
    // Verify the token using the secret key
    // if token secret key is different then this line will not run  it throw an error
    const decode = jwt.verify(token, process.env.SECRET_KEY);

    // Attach decoded user info to request object
    req.user = decode;

    // Proceed to the next middleware or route
    next();
  } catch (error) {
    // Handle token verification errors
    res.json({ err: error.message });
  }
};

// Function to generate a JWT for given user data and secret key
const generateJWT = (userdata, key) => {
  return jwt.sign(JSON.stringify(userdata), key);
};

export { generateJWT, jwtAtuh };
