const express = require("express");

const router = express.Router();
router.get("/", (req, res) => {
  res.json({ olgy: "I receive olgy" });
});
module.exports = router;
