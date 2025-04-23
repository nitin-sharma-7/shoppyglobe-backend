export const cartValidate = (req, res, next) => {
  const { productId, quantity } = req.body;
  const errors = [];

  if (!productId) errors.push("product id required");
  if (!quantity) errors.push("quantity  required");

  if (errors.length > 0) {
    const err = new Error(errors.join(", "));
    err.statuscode = 400;
    return next(err);
  }

  next();
};
