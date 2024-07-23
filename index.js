const express = require("express");
const app = express();
const Path =  require("path")
const urlRoute = require("./routes/urlRouter");
const staticRoute = require("./routes/staticRouter")
const { connectMongoDB } = require("./connection");
const address = require("./config")

const PORT = 8001;
app.use(express.json());
app.use(express.urlencoded({extends: false}))

app.set("view engine", "ejs")
app.set("views", Path.resolve("./views"))

connectMongoDB(address)
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.log("Error connecting DB", err);
  });

app.use("/url", urlRoute);
app.use("/", staticRoute);


app.listen(PORT, () => {
  console.log("Server Listening on port", PORT);
});
