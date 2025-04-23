import jwt from "jsonwebtoken";
import "dotenv/config";

const jwtAtuh = (req, res, next) => {
  const Authorization = req.headers.authorization;
  if (!Authorization) return res.json("Authorization not found");
  const token = Authorization.split(" ")[1];
  if (!token) return res.json("token not found");
  try {
    const decode = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decode;
    next();
  } catch (error) {
    res.json({ err: error.message });
  }
};

const generateJWT = (userdata, key) => {
  return jwt.sign(JSON.stringify(userdata), key);
};

export { generateJWT, jwtAtuh };
