const { posts } = require("./variables.js");
console.log(posts);

const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.json("Welcome user");
});

app.get("/bacheca", (req, res) => {
  res.json({ posts });
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:` + port);
});
