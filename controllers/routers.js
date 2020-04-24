const registerRouter = require("../routes/registerRouter");
const loginRouter = require("../routes/loginRouter");
const homeRouter = require("../routes/homeRouter");
module.exports = (App) => {
  App.use("/api", homeRouter);
  App.use("/api/register", registerRouter);
  App.use("/api/login", loginRouter);
  App.use("/api/createalbum", require("../routes/createAlbum"));
  App.use("/api/useralbums", require("../routes/userAlbums"));
  App.use("/api/addsong", require("../routes/addSong"));
};
