const mongoose = require("mongoose");
const validator = require("validator");

const alumniSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email is already present"],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid email");
            }
        }
    },
    phone: {
        type: Number,
        min: 10,
        required: true,
    },
    qualifications: {
        type: String,
        required: true
    },
    currentworkplace: {
        type: String,
        required: true
    },
    jobTitle: {
        type: String,
        required: true
    },
    achivementResearch: {
        type: String,
        required: true
    }
});

const AlumniData = mongoose.model("AlumnniData", alumniSchema);

module.exports = AlumniData;

