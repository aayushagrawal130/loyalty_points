const express = require("express");

const {
  checkIn,
  checkOut,
  getSessions,
  searchSessions,
} = require("../controllers/parkingController");

const router = express.Router();

// Get all sessions with pagination and sorting
router.get("/", getSessions);

// Search sessions by plate number
router.get("/search", searchSessions);

// Check-in
router.post("/check-in", checkIn);

// Check-out
router.post("/:id/check-out", checkOut);

module.exports = router;