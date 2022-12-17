const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const olp = require("./data/olp.json");

app.get("/", (req, res) => {
  res.send("Educational Server is Running");
});

app.get("/olp", (req, res) => {
  res.send(olp);
});

app.listen(port, () => {
  console.log(`Educational server is running on the port, ${port}`);
});
