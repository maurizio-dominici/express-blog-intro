// imports
const express = require("express");
const { posts } = require("../variables");

// express posts.js config
const router = express.Router();

// root ==== welcome
router.get("/", (req, res) => {
  res.json("Welcome user");
});

// root ==== bacheca
router.get("/bacheca", (req, res) => {
  res.json({ posts });
});

// router.get("/posts", (req, res) => {
//   res.json("lettura della lista dei post");
// });

// router.get("/posts/:id", (req, res) => {
//   const id = parseInt(req.params.id);
//   res.json("lettura della lista dei post" + id);
// });

// exports
module.exports = router;
