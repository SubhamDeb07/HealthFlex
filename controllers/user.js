const User = require("../database/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Article = require("../database/article");
require("dotenv").config();

exports.createdUser = async (req, res) => {
  try {
    const findUser = await User.findOne({
      email: req.body.email.toLowerCase(),
    });
    if (findUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const password = await bcrypt.hash(req.body.password, 10);
    const userName = req.body.userName;
    const email = req.body.email.toLowerCase();
    const newUser = await User.create({
      email,
      userName,
      password,
    });
    res.status(201).json({
      message: "User created successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email: email.toLowerCase() });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        message: "Incorrect password",
      });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({
      message: "User logged in successfully",
      token,
    });
  } catch (error) {
    res.status(400).json({
      message: "User could not be logged in",
      error: error.message,
    });
  }
};

exports.getArticle = async (req, res) => {
  try {
    const findUser = await User.findOne({ _id: req.params.id });
    if (!findUser) {
      return res.status(404).json({
        message: "User not found",
      });
    }
    const article = await User.aggregate([
      {
        $match: {
          _id: findUser._id,
        },
      },
      {
        $lookup: {
          from: "articles",
          localField: "_id",
          foreignField: "userId",
          as: "articles",
        },
      },
      {
        $project: {
          _id: 0,
          userName: 1,
          articles: 1,
        },
      },
    ]);
    res.status(200).json({
      message: "Articles retrieved successfully",
      data: article,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};
