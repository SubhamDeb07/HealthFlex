const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema(
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

ArticleSchema.index({ text: "text" });

module.exports = mongoose.model("Article", ArticleSchema);
