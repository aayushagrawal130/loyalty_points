const ParkingSession = require("../models/ParkingSession");
const ParkingSpot = require("../models/ParkingSpot");
const RateCard = require("../models/RateCard");

const calculateFee = require("../utils/feeCalculator");

// ===============================
// VEHICLE CHECK-IN
// ===============================
const checkIn = async (req, res) => {
  try {
    const {
      plateNumber,
      vehicleType,
      spotNumber,
      entryTime,
    } = req.body;

    if (!plateNumber || !vehicleType || !spotNumber) {
      return res.status(400).json({
        success: false,
        message: "plateNumber, vehicleType and spotNumber are required",
      });
    }

    const normalizedPlate = plateNumber.trim().toUpperCase();

    const allowedTypes = ["compact", "standard", "ev"];

    if (!allowedTypes.includes(vehicleType)) {
      return res.status(400).json({
        success: false,
        message: "Invalid vehicle type",
      });
    }

    const existingSession = await ParkingSession.findOne({
      plateNumber: normalizedPlate,
      status: "active",
    });

    if (existingSession) {
      return res.status(409).json({
        success: false,
        message: "This vehicle already has an active parking session",
      });
    }

    const spot = await ParkingSpot.findOne({
      spotNumber: spotNumber.trim(),
    });

    if (!spot) {
      return res.status(404).json({
        success: false,
        message: "Parking spot not found",
      });
    }

    if (spot.type !== vehicleType) {
      return res.status(400).json({
        success: false,
        message: `${vehicleType.toUpperCase()} vehicle cannot use a ${spot.type.toUpperCase()} spot`,
      });
    }

    const reservedSpot = await ParkingSpot.findOneAndUpdate(
      {
        _id: spot._id,
        isOccupied: false,
      },
      {
        $set: {
          isOccupied: true,
        },
      },
      {
        new: true,
      }
    );

    if (!reservedSpot) {
      return res.status(409).json({
        success: false,
        message: "Parking spot is already occupied",
      });
    }

    try {
      const session = await ParkingSession.create({
        plateNumber: normalizedPlate,
        vehicleType,
        spot: reservedSpot._id,
        entryTime: entryTime ? new Date(entryTime) : new Date(),
        status: "active",
      });

      const populatedSession = await session.populate("spot");

      return res.status(201).json({
        success: true,
        message: "Vehicle checked in successfully",
        session: populatedSession,
      });
    } catch (error) {
      await ParkingSpot.findByIdAndUpdate(reservedSpot._id, {
        $set: {
          isOccupied: false,
        },
      });

      throw error;
    }
  } catch (error) {
    console.error("Check-in error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to check in vehicle",
      error: error.message,
    });
  }
};

// ===============================
// VEHICLE CHECK-OUT
// ===============================
const checkOut = async (req, res) => {
  try {
    const { id } = req.params;

    const session = await ParkingSession.findById(id).populate("spot");

    if (!session) {
      return res.status(404).json({
        success: false,
        message: "Parking session not found",
      });
    }

    if (session.status !== "active") {
      return res.status(400).json({
        success: false,
        message: "Parking session is already closed",
      });
    }

    const exitTime = req.body.exitTime
      ? new Date(req.body.exitTime)
      : new Date();

    if (Number.isNaN(exitTime.getTime())) {
      return res.status(400).json({
        success: false,
        message: "Invalid exit time",
      });
    }

    if (exitTime <= session.entryTime) {
      return res.status(400).json({
        success: false,
        message: "Exit time must be after entry time",
      });
    }

    // Find rate for the vehicle's spot type.
    const rate = await RateCard.findOne({
      spotType: session.vehicleType,
    });

    if (!rate) {
      return res.status(404).json({
        success: false,
        message: `Rate card not found for ${session.vehicleType}`,
      });
    }

    const fee = calculateFee(
      session.entryTime,
      exitTime,
      rate
    );

    session.exitTime = exitTime;
    session.fee = fee;
    session.status = "completed";

    await session.save();

    // Release the parking spot.
    if (session.spot) {
      await ParkingSpot.findByIdAndUpdate(session.spot._id, {
        $set: {
          isOccupied: false,
        },
      });
    }

    const completedSession = await session.populate("spot");

    return res.status(200).json({
      success: true,
      message: "Vehicle checked out successfully",
      billing: {
        plateNumber: session.plateNumber,
        vehicleType: session.vehicleType,
        entryTime: session.entryTime,
        exitTime: session.exitTime,
        fee: session.fee,
      },
      session: completedSession,
    });
  } catch (error) {
    console.error("Check-out error:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to check out vehicle",
      error: error.message,
    });
  }
};

module.exports = {
  checkIn,
  checkOut,
};
