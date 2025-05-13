// imports
const express = require("express");
// const { posts } = require("../variables");

// express posts.js config
const router = express.Router();

// root ==== welcome
// router.get("/", (req, res) => {
//   res.json("Welcome user");
// });

// root ==== bacheca
// router.get("/bacheca", (req, res) => {
//   res.json({ posts });
// });

// root ==== view posts list (INDEX)
router.get("/", (req, res) => {
  res.json("lettura della lista dei post");
});

// root ==== view single post (SHOW)
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  res.json(`lettura del post ${id}`);
});

// root ==== create new post (STORE)
router.post("/", (req, res) => {
  res.json("Creazione di un nuovo post");
});

// root ==== complete fix post (UPDATE)
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  res.json(`Modifica parziale del post ${id}`);
});

// root ==== complete fix post (MODIFY)
router.patch("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  res.json(`Modifica totale del post ${id}`);
});

// root ==== complete fix post (DESTROY)
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  res.json(`Rimozione del post ${id}`);
});

// exports
module.exports = router;
