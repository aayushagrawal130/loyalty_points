const express = require("express");

const {
  checkIn,
  checkOut,
} = require("../controllers/parkingController");

const router = express.Router();

router.post("/check-in", checkIn);
router.post("/:id/check-out", checkOut);

module.exports = router;
