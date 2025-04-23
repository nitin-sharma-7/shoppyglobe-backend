// Middleware to validate cart data in the request body
export const cartValidate = (req, res, next) => {
  const { productId, quantity } = req.body;
  const errors = [];

  // Check if productId is provided
  if (!productId) errors.push("product id required");

  // Check if quantity is provided
  if (!quantity) errors.push("quantity required");

  // If there are any validation errors, create an error and pass it to the next middleware
  if (errors.length > 0) {
    const err = new Error(errors.join(", "));
    err.statuscode = 400; // Custom status code for client-side error
    return next(err);
  }

  // Proceed to next middleware if validation passes
  next();
};
