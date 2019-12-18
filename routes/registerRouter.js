const express = require("express");
const registerAuth = require("../controllers/authentication/register");
const router = express.Router();
router.post("/", registerAuth);
module.exports = router;
