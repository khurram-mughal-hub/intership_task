const mongoose = require("mongoose");

const ServiceSchema = new mongoose.Schema(
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
    icon: {
      type: String,
      default: "https://via.placeholder.com/100",
    },
    price: {
      type: Number,
      required: true,
    },
    duration: {
      type: String,
      default: "Not specified",
    },
    features: [
      {
        type: String,
      },
    ],
    order: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Service", ServiceSchema);
