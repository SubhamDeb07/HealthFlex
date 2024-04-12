const express = require("express");
const router = express.Router();
const authentication = require("../middleware/authentication");

const { createTweet } = require("../controllers/tweet");

router.post("/create", authentication, createTweet);

module.exports = router;
