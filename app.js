const { generatePostsArr } = require("./variables.js");
console.log(generatePostsArr);

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.json("ciao");
});

app.get("/bacheca", (req, res) => {
  res.json(generatePostsArr());
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:` + port);
});
