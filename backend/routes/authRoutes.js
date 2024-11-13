const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/register", upload.single("profilePic"), authController.register);
router.post("/login", authController.login);

module.exports = router;
