import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3,
    maxlength: 30,
  },
  password: {
    type: String,
    required: true,
    minlength: 4,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: [/.+\@.+\..+/, "Please enter a valid email address"],
  },
  mobileNo: {
    type: String,
    required: true,
    trim: true,
    match: [/^[0-9]{10}$/, "Please enter a valid 10-digit mobile number"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const userModel = model("user", UserSchema);
