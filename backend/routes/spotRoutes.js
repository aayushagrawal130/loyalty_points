const express = require("express");

const {
  getSpots,
  getAvailableSpots,
} = require("../controllers/spotController");

const router = express.Router();

router.get("/", getSpots);
router.get("/availability", getAvailableSpots);

module.exports = router;