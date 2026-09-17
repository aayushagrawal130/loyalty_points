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
// Get transactions with search, pagination and sorting
const getTransactions = async (req, res) => {
    try {
        const {
            page = 1,
            limit = 10,
            search = "",
            sortBy = "createdAt",
            order = "desc"
        } = req.query;

        const pageNumber = Math.max(Number(page), 1);
        const limitNumber = Math.min(Math.max(Number(limit), 1), 100);

        const allowedSortFields = [
            "createdAt",
            "points",
            "type",
            "description"
        ];

        const sortField = allowedSortFields.includes(sortBy)
            ? sortBy
            : "createdAt";

        const sortOrder = order === "asc" ? 1 : -1;

        const filter = {
            user: req.user.userId
        };

        // Search by description
        if (search.trim()) {
            filter.description = {
                $regex: search.trim(),
                $options: "i"
            };
        }

        // Total matching transactions
        const total = await Transaction.countDocuments(filter);

        // Get transactions
        const transactions = await Transaction.find(filter)
            .sort({ [sortField]: sortOrder })
            .skip((pageNumber - 1) * limitNumber)
            .limit(limitNumber);

        res.json({
            count: transactions.length,
            total,
            page: pageNumber,
            limit: limitNumber,
            totalPages: Math.ceil(total / limitNumber),
            sortBy: sortField,
            order: order === "asc" ? "asc" : "desc",
            search,
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
