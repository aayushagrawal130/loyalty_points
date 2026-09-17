const mongoose = require("mongoose");

const rateCardSchema = new mongoose.Schema(
  {
    spotType: {
      type: String,
      enum: ["compact", "standard", "ev"],
      required: true,
      unique: true,
    },

    firstHourRate: {
      type: Number,
      required: true,
      min: 0,
    },

    additionalHourRate: {
      type: Number,
      required: true,
      min: 0,
    },

    dailyCap: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("RateCard", rateCardSchema);
