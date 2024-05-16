const User = require("../database/user");
const Article = require("../database/article");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.createArticle = async (req, res) => {
  const { text } = req.body;

  try {
    const newArticle = await Article.create({
      userId: req.user.id,
      text,
    });
    res.status(201).json({
      message: "Article created successfully",
      article: newArticle,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};
