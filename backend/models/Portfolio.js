const mongoose = require("mongoose");

const PortfolioSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: "https://via.placeholder.com/300x200",
    },
    category: {
      type: String,
      required: true,
    },
    technologies: [
      {
        type: String,
      },
    ],
    link: {
      type: String,
      default: "#",
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Portfolio", PortfolioSchema);
