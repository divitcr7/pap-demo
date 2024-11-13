const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const cors = require('cors');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());


app.use(express.json());
connectDB();

app.use("/", authRoutes);

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
