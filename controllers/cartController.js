import { cartModel } from "../models/cartModel.js";

// Controller to add a new item to the cart
const postCart = async (req, res) => {
  try {
    // Extract cart item data from request body
    const cartItem = req.body;

    // Create and save new cart item in the database
    await cartModel.create(cartItem);

    // Send success response with status code 201 (Created)
    res.status(201).json({ message: "sucessfully added to cart", cartItem });
  } catch (error) {
    // Log and handle server error
    console.error("Error posting cart:", error.message);
    res.status(500).json({ message: "Server Error" });
  }
};

// Controller to update an existing cart item
const updateCart = async (req, res) => {
  try {
    // Get product ID from request parameters
    const id = req.params.id;

    // Find and update the cart item by productId
    const updatedCartItem = await cartModel.updateOne(
      { productId: id },
      req.body
    );

    // Send success response with updated result
    res.status(200).json({ message: "updated sucessfully", updatedCartItem });
  } catch (error) {
    // Log and handle server error
    console.error("Error updating cart:", error.message);
    res.status(500).json({ message: "Server Error" });
  }
};

// Controller to delete a cart item
const deleteCart = async (req, res) => {
  try {
    // Get product ID from request parameters
    const id = req.params.id;

    // Delete the cart item by productId
    const deletedItem = await cartModel.deleteOne({ productId: id });

    // Send success response with delete result
    res.status(200).json({ message: "deleted sucessfully", deletedItem });
  } catch (error) {
    // Log and handle server error
    console.error("Error deleting item in cart:", error.message);
    res.status(500).json({ message: "Server Error" });
  }
};

// Exporting all cart-related controller functions
export { updateCart, deleteCart, postCart };
