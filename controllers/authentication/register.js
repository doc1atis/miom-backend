const bcrypt = require("bcryptjs");
const User = require("../../models/UserModel");
module.exports = async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        success: false,
        message: "user is already registered"
      });
    }

    user = new User({ email, password });
    const salt = await bcrypt.genSalt(12);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();
    const token = user.generateToken();
    res.status(200).json({ email, success: true, token });
  } catch (error) {
    res.status(400).json({ error, success: false });
  }
};
