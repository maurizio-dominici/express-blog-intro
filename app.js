const { posts } = require("./variables.js");
console.log(posts);

const express = require("express");
const app = express();
const appPort = 3000;
const appUrl = `http://localhost:` + appPort;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.json("Welcome user");
});

app.get("/bacheca", (req, res) => {
  res.json({ posts });
});

app.listen(appPort, () => {
  console.log(`Server listening on ${appUrl}`);
});
