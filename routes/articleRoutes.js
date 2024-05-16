const express = require("express");
const router = express.Router();
const authentication = require("../middleware/authentication");

const { createArticle } = require("../controllers/article");

router.post("/create", authentication, createArticle);

module.exports = router;
