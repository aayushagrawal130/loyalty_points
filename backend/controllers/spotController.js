const ParkingSpot = require("../models/ParkingSpot");

// Get all parking spots
const getSpots = async (req, res) => {
  try {
    const spots = await ParkingSpot.find().sort({
      level: 1,
      spotNumber: 1,
    });

    res.status(200).json({
      success: true,
      count: spots.length,
      spots,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch parking spots",
      error: error.message,
    });
  }
};

// Get available spots
const getAvailableSpots = async (req, res) => {
  try {
    const { type, level } = req.query;

    const filter = {
      isOccupied: false,
    };

    if (type) {
      const allowedTypes = ["compact", "standard", "ev"];

      if (!allowedTypes.includes(type.toLowerCase())) {
        return res.status(400).json({
          success: false,
          message: "Invalid spot type",
        });
      }

      filter.type = type.toLowerCase();
    }

    if (level) {
      filter.level = Number(level);
    }

    const spots = await ParkingSpot.find(filter).sort({
      level: 1,
      spotNumber: 1,
    });

    res.status(200).json({
      success: true,
      count: spots.length,
      spots,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch available spots",
      error: error.message,
    });
  }
};

module.exports = {
  getSpots,
  getAvailableSpots,
};