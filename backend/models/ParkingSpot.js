const mongoose = require("mongoose");

const parkingSpotSchema = new mongoose.Schema(
  {
    spotNumber: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    level: {
      type: Number,
      required: true,
      min: 1,
    },

    type: {
      type: String,
      enum: ["compact", "standard", "ev"],
      required: true,
    },

    isOccupied: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("ParkingSpot", parkingSpotSchema);
