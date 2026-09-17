const User = require("../models/User");
const Transaction = require("../models/Transaction");

// Earn points
const earnPoints = async (req, res) => {
    try {
        const { points, description } = req.body;

        if (!points || points <= 0) {
            return res.status(400).json({
                message: "Points must be greater than 0"
            });
        }

        if (!description) {
            return res.status(400).json({
                message: "Description is required"
            });
        }

        const user = await User.findById(req.user.userId);

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        user.points += Number(points);
        await user.save();

        const transaction = await Transaction.create({
            user: user._id,
            type: "earned",
            points: Number(points),
            description
        });

        res.status(201).json({
            message: "Points earned successfully",
            balance: user.points,
            transaction
        });
    } catch (error) {
        res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
};

// Redeem points
const redeemPoints = async (req, res) => {
    try {
        const { points, description } = req.body;

        if (!points || points <= 0) {
            return res.status(400).json({
                message: "Points must be greater than 0"
            });
        }

        if (!description) {
            return res.status(400).json({
                message: "Description is required"
            });
        }

        const user = await User.findById(req.user.userId);

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        if (user.points < Number(points)) {
            return res.status(400).json({
                message: "Insufficient points balance"
            });
        }

        user.points -= Number(points);
        await user.save();

        const transaction = await Transaction.create({
            user: user._id,
            type: "redeemed",
            points: Number(points),
            description
        });

        res.status(201).json({
            message: "Points redeemed successfully",
            balance: user.points,
            transaction
        });
    } catch (error) {
        res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
};

// Get transactions
const getTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.find({
            user: req.user.userId
        }).sort({ createdAt: -1 });

        res.json({
            count: transactions.length,
            transactions
        });
    } catch (error) {
        res.status(500).json({
            message: "Server error",
            error: error.message
        });
    }
};

module.exports = {
    earnPoints,
    redeemPoints,
    getTransactions
};
