const User = require("../database/user");
const Tweet = require("../database/tweet");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.createTweet = async (req, res) => {
  const { text } = req.body;

  try {
    const newTweet = await Tweet.create({
      userId: req.user.id,
      text,
    });
    res.status(201).json({
      message: "Tweet created successfully",
      tweet: newTweet,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};
