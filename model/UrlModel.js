const mongoose = require("mongoose");

const UrlSchema = mongoose.Schema(
  {
    shortID: {
      type: String,
      require: true,
      unique: true,
    },

    redirectURL: {
      type: String,
      required: true,
    },

    visitHistory: [{ timestamp: { type: Number } }],
  },
  { timestamp: true }
);

const URL = mongoose.model("url", UrlSchema);

module.exports = URL;
