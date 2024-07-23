const generateShortId = require("ssid");
const URL = require("../model/UrlModel");
// const shortid = require("shortid");

async function handleCreateNewShortID(req, res) {
  const body = req.body;
  if (!body.url) {
    return res.status(400).json({ err: "Url Not found" });
  }
  const shortID = generateShortId();
  await URL.create({
    shortID: shortID,
    redirectURL: body.url,
    visitHistory: [],
  });
  return res.render("Home", { ID: shortID });
}

async function handleRedirectURL(req, res) {
  const shortID = req.params.shortid;
  const entry = await URL.findOneAndUpdate(
    { shortID },
    {
      $push: {
        visitHistory: { timestamp: Date.now() },
      },
    }
  );
  res.redirect(entry.redirectURL);
}

async function handleGetAnlytics(req, res) {
  const shortID = req.params.shortid;
  console.log(typeof shortID);
  const result = await URL.findOne({ shortID });
  // if (!result) {
  //   return res.json({ message: "Enter a valid ShortURL" });
  // }
  // console.log(result);
  return res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
}

// async function handleALLUrls(req,res) {
//   const URLS = await URL.find({ })
//   console.log(URLS)
//   return res.render("Home",{
//     urls: URLS,
//   });

// }

module.exports = {
  handleCreateNewShortID,
  handleRedirectURL,
  handleGetAnlytics,
  // handleALLUrls
};
