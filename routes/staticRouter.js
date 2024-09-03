const express = require("express");

const URL = require("../model/UrlModel");

router = express.Router();

router.route("/").get(async (req, res) => {
  const allUrl = await URL.find({});
  return res.render("Home", { urls: allUrl });
});

router.route("/signup").get((req, res) => {
  return res.render("signup");
});

router.route("/login").get((req, res) => {
  return res.render("login");
});

module.exports = router;
