const mongoose = require("mongoose");
module.exports = async function() {
  try {
    await mongoose.connect(process.env.DB_URL || "mongodb://localhost/Miom", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Connected to MONGO DB Olgy");
  } catch (error) {
    console.log("there was an error connected to mongoDB olgy: ", error);
  }
};
