const express = require("express");
const requiresAuthStrategy = require("../controllers/authentication/passportConfig");
const router = express.Router();
router.post("/", requiresAuthStrategy("jwt"), (req, res) => {
  console.log(req.body);
  res.status(200).json({ getit: true });
});
module.exports = router;
