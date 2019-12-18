const mongoose = require("mongoose");
const artistSchema = new mongoose.Schema({
  name: { type: String, required: true },
  albums: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "album" }],
    required: true
  }
});
module.exports = mongoose.model("Artist", artistSchema);
