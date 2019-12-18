const mongoose = require("mongoose");
// before saving the song, create an artist, before saving an artist create an album.
const songSchema = new mongoose.Schema({
  title: { type: String, required: true },
  album: {
    type: String,
    required: true
  },
  cover: { type: String, required: true },
  sound: { type: String, required: true },
  artists: {
    type: [String],
    required: true
  }
});

module.exports = mongoose.model("Song", songSchema);
