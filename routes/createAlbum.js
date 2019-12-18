const express = require("express");
const uId = require("uuid/v4");
const multer = require("multer");
const Album = require("../models/AlbumModel");
const requireAuth = require("../controllers/authentication/passportConfig");
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "albumcovers");
  },
  filename: function(req, file, cb) {
    cb(null, `${uId()}-olgy-${file.originalname}`);
  }
});
const router = express.Router();
const upload = multer({ storage });
router.post(
  "/",
  requireAuth("jwt"),
  upload.single("cover"),
  async (req, res) => {
    console.log(req.user);
    let album = new Album(req.body);
    album.songs = [];
    album.cover = req.file.filename;
    album = await album.save();
    req.user.albums.push(album._id);
    await req.user.save();
    res.status(200).json(album);
  }
);
module.exports = router;
