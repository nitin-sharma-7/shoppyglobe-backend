import { cartModel } from "../models/cartModel.js";

const postCart = async (req, res) => {
  try {
    const cartItem = req.body;
    await cartModel.create(cartItem);
    res.json({ message: "sucessfully added to cart", cartItem });
  } catch (error) {
    console.error("Error posting cart:", error.message);
    res.status(500).json({ message: "Server Error" });
  }
};

const updateCart = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedCartItem = await cartModel.updateOne(
      { productId: id },
      req.body
    );
    res.json({ message: "updated sucessfully", updatedCartItem });
  } catch (error) {
    console.error("Error updating cart:", error.message);
    res.status(500).json({ message: "Server Error" });
  }
};

const deleteCart = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedItem = await cartModel.deleteOne({ productId: id });
    res.json({ message: "deleted sucessfully", deletedItem });
  } catch (error) {
    console.error("Error deleting item in cart:", error.message);
    res.status(500).json({ message: "Server Error" });
  }
};

export { updateCart, deleteCart, postCart };
