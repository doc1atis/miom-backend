const mongoose = require("mongoose");
const albumSchema = new mongoose.Schema({
  artist: {
    type: String,
    required: true
  },
  songs: [{ type: mongoose.Schema.Types.ObjectId, ref: "song" }],
  cover: { type: String, required: true },
  title: { type: String, required: true }
});
module.exports = mongoose.model("Album", albumSchema);
