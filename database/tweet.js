const mongoose = require("mongoose");

const TweetSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      index: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

TweetSchema.index({ text: "text" });

module.exports = mongoose.model("Tweet", TweetSchema);
