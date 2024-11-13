const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cloudinary = require("../config/cloudinary");
const User = require("../models/userModel");
const cloudinaryService = require("../services/cloudinaryService");
const authService = require("../services/authService");
const constants = require("../utils/constants");

const register = async (req, res) => {
    const { name, email, password } = req.body;
    const profilePic = req.file;

    if (!profilePic) {
        return res.status(400).json({ message: "Profile picture is required" });
    }

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ message: "User already exists" });

        const hashedPassword = await authService.hashPassword(password);

        const cloudinaryResponse = await cloudinaryService.uploadProfilePic(profilePic);
        
        const user = new User({
            name,
            email,
            password: hashedPassword,
            profilePic: cloudinaryResponse.secure_url
        });

        await user.save();

        const token = jwt.sign({ email: user.email, id: user._id }, constants.JWT_SECRET_KEY);
        res.status(200).json({ user: { name, email, profilePic: user.profilePic }, token });
    } catch (error) {
        console.log("Error during registration:", error);
        res.status(500).json({ message: "Error registering user", error });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(401).json({ message: "User not found" });

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) return res.status(401).json({ message: "Invalid password" });

        const token = jwt.sign({ email: user.email, id: user._id }, constants.JWT_SECRET_KEY);
        res.json({ user: { name: user.name, email, profilePic: user.profilePic }, token });
    } catch (error) {
        res.status(500).json({ message: "Error logging in", error });
    }
};

module.exports = { register, login };
