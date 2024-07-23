const express = require("express");

const URL = require("../model/UrlModel");

router = express.Router();

router.route("/").get(async (req, res) => {
  const allUrl = await URL.find({});
  return res.render("Home", { urls: allUrl });
});

module.exports = router;
