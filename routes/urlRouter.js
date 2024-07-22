const express = require("express");
const {
  handleCreateNewShortID,
  handleRedirectURL,
  handleGetAnlytics,
} = require("../Controller/urlController");

router = express.Router();

router.route("/").post(handleCreateNewShortID);

router.route("/:shortid").get(handleRedirectURL);
router.route("/analytics/:shortid").get(handleGetAnlytics);

module.exports = router;
