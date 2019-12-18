const express = require("express");
const User = require("../models/UserModel");
const requiresAuthStrategy = require("../controllers/authentication/passportConfig");
const router = express.Router();
router.get("/", requiresAuthStrategy("jwt"), async (req, res) => {
  const user = await User.findById(req.user._id).populate("albums");
  res.status(200).json({ albums: user.albums });
});
module.exports = router;
