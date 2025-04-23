export const userValidate = (req, res, next) => {
  const { username, password, email, mobileNo } = req.body;
  const errors = [];

  if (!username) errors.push("username required");
  if (!password) errors.push("password  required");
  if (!email) errors.push("email  required");
  if (!mobileNo) errors.push("mobileNo  required");

  if (errors.length > 0) {
    const err = new Error(errors.join(", "));
    err.statuscode = 400;
    return next(err);
  }

  next();
};
