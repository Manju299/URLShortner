const express = require("express");
const app = express();
const urlRoute = require("./routes/urlRouter");
const { connectMongoDB } = require("./connection");
const address = require("./config")

const PORT = 8001;
app.use(express.json());

connectMongoDB(address)
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.log("Error connecting DB", err);
  });

app.use("/url", urlRoute);
app.listen(PORT, () => {
  console.log("Server Listening on port", PORT);
});
