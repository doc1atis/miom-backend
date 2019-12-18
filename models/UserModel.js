const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  albums: [{ type: mongoose.Schema.Types.ObjectId, ref: "Album" }]
});

userSchema.methods.generateToken = function() {
  const token = jwt.sign({ sub: this._id }, process.env.JWT_SECRET, {
    expiresIn: 3600
  });
  return token;
};
module.exports = mongoose.model("User", userSchema);
