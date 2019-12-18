const registerRouter = require("../routes/registerRouter");
const loginRouter = require("../routes/loginRouter");
module.exports = App => {
  App.use("/register", registerRouter);
  App.use("/login", loginRouter);
  App.use("/createalbum", require("../routes/createAlbum"));
  App.use("/useralbums", require("../routes/userAlbums"));
  App.use("/addsong", require("../routes/addSong"));
};
