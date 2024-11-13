const cloudinary = require("../config/cloudinary");

const uploadProfilePic = (file) => {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream(
            { folder: "profile_pics" },
            (error, result) => {
                if (error) reject(error);
                else resolve(result);
            }
        ).end(file.buffer);
    });
};

module.exports = { uploadProfilePic };
