require("dotenv").config();
const express = require("express");
const bcrypt = require("bcryptjs");
// const crypto = require("crypto");
const cors = require("cors");
require("./connection")
const StudentData = require("./student-data");
const AlumniData = require("./alumni-data");
// const { accountSid, authToken, twilioPhoneNumber } = process.env;
// const client = require("twilio")(accountSid, authToken);

const app = express();
const port = 7000;

app.use(cors());
app.use(express.json());

// Registration Route
app.post("/register", async (req, res) => {
    try {
        const { username, email, phone, password, department, program, semester } = req.body;
        const hashedPass = await bcrypt.hash(password, 10);
        const studentData = new StudentData({ username, email, phone, password: hashedPass, department, program, semester });
        const doc = await studentData.save();
        res.status(200).send(doc);
    } catch (error) {
        console.error("Error in registration:", error);
        res.status(500).json({ error: "Failed to register user" });
    }
});

app.listen(port, ()=> {
    console.log("server is listening");
})
// Login Route
app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(email);
        const studentData = await StudentData.findOne({ email });
        if (!studentData) {
            return res.status(404).json({ error: "User not found" });
        }
        const isPasswordValid = await bcrypt.compare(password, studentData.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: "Incorrect password" });
        }
        res.status(200).json({ message: "correct" });
    } catch (error) {
        console.error("Error in login:", error);
        res.status(500).json({ error: "Failed to login" });
    }
});

app.get("/alumnus", async (req, res) => {
    try {
        console.log("hi");
        const cuh_members = await AlumniData.find();
        res.status(200).send(cuh_members);
        console.log(cuh_members); 
    } catch (e) {
        res.status(400).send(e);
        console.log("hello");
    }
})

app.post("/alumnus", async (req, res) => {
    try {
        const { name, email, phone, qualifications, currentworkplace, jobTitle, achivementResearch } = req.body;
        // const hashedPass = await bcrypt.hash(password, 10);
        const alumniData = new AlumniData({ name, email, phone, qualifications, currentworkplace, jobTitle, achivementResearch });
        const doc = await alumniData.save();
        res.status(200).send(doc);
    } catch (error) {
        console.error("Error in registration:", error);
        res.status(500).json({ error: "Failed to register user" });
    }
});
