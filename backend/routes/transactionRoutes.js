const express = require("express");

const {
    earnPoints,
    redeemPoints,
    getTransactions
} = require("../controllers/transactionController");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/earn", authMiddleware, earnPoints);
router.post("/redeem", authMiddleware, redeemPoints);
router.get("/", authMiddleware, getTransactions);

module.exports = router;
