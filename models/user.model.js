const mongoose = require("mongoose");
const validator = require("validator");
const userRoles = require("../utils/userRoles");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validator.isEmail, "field must be a valid email address"],
  },
  password: {
    type: String,
    require: true,
  },
  token: {
    type: String,
  },
  role: {
    type: String, //["USER", "ADMIN", "MANGER"]
    enum: [userRoles.USER, userRoles.ADMIN, userRoles.MANGER],
    default: userRoles.USER,
  },
  avatar: {
    type: String,
    default: "uploads/profile.jpeg",
  },
});

module.exports = mongoose.model("User", userSchema);
