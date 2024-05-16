const express = require("express");
const router = express.Router();
const authentication = require("../middleware/authentication");

const { createdUser, loginUser, getArticle } = require("../controllers/user");

router.post("/register", authentication, createdUser);

router.post("/login", authentication, loginUser);

router.get("/:id/retrieveArticles", authentication, getArticle);

module.exports = router;
