const usersDB = {
  users: require("../models/users.json"),
};

const bcrypt = require("bcrypt");

const handleLogin = async (req, res) => {
  const { user: newUsername, pwd } = req.body;

  if (!newUsername || !pwd) {
    return res.status(400).json({
      message: "Username and password are required!",
    });
  }

  const foundUser = usersDB.users.find(
    (person) => person.username === newUsername
  );

  if (!foundUser) {
    return res.status(401).json({
      message: "Böyle bir kullanıcı bulunamadı!",
    });
  }
  const match = await bcrypt.compare(pwd, foundUser.password);
  if (match) {
    return res.status(200).json({
      success: `user ${newUsername} is login in!`,
    });
  }

  res.status(401).json({
    message: "Şifre yanlış!",
  });
};

module.exports = {
  handleLogin,
};
