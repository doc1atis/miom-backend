const registerRouter = require("../routes/registerRouter");
const loginRouter = require("../routes/loginRouter");
const homeRouter = require("../routes/homeRouter");
module.exports = (App) => {
  App.use("/", homeRouter);
  App.use("/register", registerRouter);
  App.use("/login", loginRouter);
  App.use("/createalbum", require("../routes/createAlbum"));
  App.use("/useralbums", require("../routes/userAlbums"));
  App.use("/addsong", require("../routes/addSong"));
};
