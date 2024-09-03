const { getUser } = require("../service/Auth");

async function restrictToLoggedinUserOnly(req, res, next) {
  //   console.log(req);
  const userId = req.cookies?.uid;
  console.log(userId);

  if (!userId) return res.redirect("/login");

  const user = getUser(userId);
  console.log(user);
  if (!user) return res.redirect("/login");

  req.user = user;
  next();
}

module.exports = {
  restrictToLoggedinUserOnly,
};
