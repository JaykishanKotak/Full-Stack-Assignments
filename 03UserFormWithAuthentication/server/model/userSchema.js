const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  number: Number,
});

const UserSchema = mongoose.model("UserSchema", userSchema);

module.exports = UserSchema;
