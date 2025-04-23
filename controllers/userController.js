import { userModel } from "../models/userModel.js";

const registerUser = async (req, res) => {
  const user = req.body;
  await userModel.create(user);
  res.json({ message: "user sucessfully added", user });
};

export { registerUser };
