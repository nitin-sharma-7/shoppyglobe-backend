// Middleware to validate user registration data in the request body
export const userValidate = (req, res, next) => {
  const { username, password, email, mobileNo } = req.body;
  const errors = [];

  // Check if each required field is provided
  if (!username) errors.push("username required");
  if (!password) errors.push("password required");
  if (!email) errors.push("email required");
  if (!mobileNo) errors.push("mobileNo required");

  // If there are any validation errors, create an error object and pass it to the next middleware
  if (errors.length > 0) {
    const err = new Error(errors.join(", "));
    err.statuscode = 400; // Custom status code for client-side error
    return next(err);
  }

  // Proceed to the next middleware if validation passes
  next();
};
