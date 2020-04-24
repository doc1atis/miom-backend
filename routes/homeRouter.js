const express = require("express");

const router = express.Router();
router.post("/", (req, res) => {
  res.json({ olgy: "I receive olgy" });
});
module.exports = router;
