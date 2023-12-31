const usersDB = {
  users: require("../models/users.json"),
  setUsers: function (data) {
    this.users = data;
  },
};

const fsPromises = require("node:fs/promises");
const path = require("node:path");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

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
    // create JWT
    const accessToken = jwt.sign(
      { username: foundUser.username },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "2m",
      }
    );
    const refreshToken = jwt.sign(
      { username: foundUser.username },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: "1d",
      }
    );

    // Saving refreshToken with current user
    const otherUsers = usersDB.users.filter((person) => {
      return person.username !== foundUser.username;
    });
    const currentUser = { ...foundUser, refreshToken };
    usersDB.setUsers([...otherUsers, currentUser]);
    await fsPromises.writeFile(
      path.join(__dirname, "..", "models", "users.json"),
      JSON.stringify(usersDB.users)
    );

    res.cookie("jwt", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, // one day
    });

    return res.status(200).json({
      accessToken,
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
