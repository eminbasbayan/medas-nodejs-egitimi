const usersDB = {
  users: require("../models/users.json"),
  setUsers: function (data) {
    this.users = data;
  },
};

const path = require("node:path");
const fsPromises = require("node:fs/promises");

const handleLogout = async (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(204); // No content

  const refreshToken = cookies.jwt;

  // Is refreshToken in DB?
  const foundUser = usersDB.users.find((person) => {
    return person.refreshToken === refreshToken;
  });

  if (!foundUser) {
    res.clearCookie("jwt", { httpOnly: true });
    return res.sendStatus(204);
  }

  // Delete refreshToken in DB
  const otherUsers = usersDB.users.filter((person) => {
    return person.refreshToken !== foundUser.refreshToken;
  });
  const currentUser = { ...foundUser, refreshToken: "" };
  usersDB.setUsers([...otherUsers, currentUser]);
  await fsPromises.writeFile(
    path.join(__dirname, "..", "models", "users.json"),
    JSON.stringify(usersDB.users)
  );
  res.clearCookie("jwt", { httpOnly: true });
  res.sendStatus(204);
};

module.exports = { handleLogout };
