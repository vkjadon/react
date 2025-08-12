require('dotenv').config();
const express = require("express");
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World using Watch!");
});

app.get("/git", (req, res) => {
  res.send("Message from Git to vkjadon");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port} with --watch `);
});
