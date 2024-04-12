const express = require("express");
const router = express.Router();
const authentication = require("../middleware/authentication");

const { createdUser, loginUser, getTweets } = require("../controllers/user");

router.post("/register", authentication, createdUser);

router.post("/login", authentication, loginUser);

router.get("/:id/timeline", authentication, getTweets);

module.exports = router;
