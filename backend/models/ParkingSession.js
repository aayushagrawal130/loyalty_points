const mongoose = require("mongoose");

const parkingSessionSchema = new mongoose.Schema(
  {
    plateNumber: {
      type: String,
      required: true,
      trim: true,
      uppercase: true,
      index: true,
    },

    vehicleType: {
      type: String,
      enum: ["compact", "standard", "ev"],
      required: true,
    },

    spot: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ParkingSpot",
      required: true,
    },

    entryTime: {
      type: Date,
      required: true,
      default: Date.now,
    },

    exitTime: {
      type: Date,
      default: null,
    },

    fee: {
      type: Number,
      default: 0,
      min: 0,
    },

    status: {
      type: String,
      enum: ["active", "completed", "auto-closed"],
      default: "active",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "ParkingSession",
  parkingSessionSchema
);
