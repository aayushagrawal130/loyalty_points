const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const parkingRoutes = require("./routes/parkingRoutes");
const spotRoutes = require("./routes/spotRoutes");
dotenv.config();

const connectDB = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/sessions", parkingRoutes);
app.use("/api/spots", spotRoutes);

connectDB();

app.get("/", (req, res) => {
    res.json({
        message: "Parking Garage Management API is running"
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Parking API running on port ${PORT}`);
});
