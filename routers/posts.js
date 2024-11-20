// All'interno creare le rotte per le operazioni CRUD (Index, Show, Create, Update e Delete)
// Tutte le risposte saranno dei testi che confermeranno l’operazione che il server deve eseguire, secondo le convenzioni REST.
const express = require("express");
const router = express.Router();

const posts = require("../db/posts");

// * INDEX
router.get("/", (req, res) => {
  const text = "ciao";
  res.json(text);
});

// * SHOW
router.get("/:id", (req, res) => {});

// * STORE
router.post("/", (req, res) => {});

// * UPDATE
router.put("/:id", (req, res) => {});

// * MODIFY
router.patch("/:id", (req, res) => {});

// * DESTROY
router.delete("/:id", (req, res) => {});

module.exports = router;
