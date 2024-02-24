import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";
import { FaSquarePhoneFlip } from "react-icons/fa6";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import axios from "axios";
import axios from "axios";
import "./Signup.css";

// import emailjs from "@emailjs/browser";

export default function Signup() {
const [username,setusername]=useState("");
const [email,setemail]=useState("");
const [phone,setPhone]=useState("");
const [password,setpassword]=useState("");
const [department,setdepartment]=useState("");
const [program,setpogram]=useState("")
const [semester,setsemester]=useState("");





const handleSubmit = async (e) => {
  e.preventDefault();

//   if (!username || !email || !phone || !password || !department || !program || !semester) {
//     alert("Please fill out all fields");
//     return;
//   }
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!emailRegex.test(email)) {
//     alert("Please enter a valid email address");
//     return;
//   }
//   const phoneRegex = /^\d{10}$/;
//   if (!phoneRegex.test(phone)) {
//     alert("Please enter a valid phone number");
//     return;
//   }


    console.log(username);
    // Register the user
    const res = await axios.post("http://localhost:7000/register", {
      username,
      email,
      phone,
      password,
      department,
      program,
      semester,
    });
    console.log("User registered successfully", res.data);

    // Reset form fields
    setusername("");
    setemail("");
    setPhone("");
    setpassword("");
    setdepartment("");
    setpogram("");
    setsemester("");
  } 

  return (
    <div className="wraper">
      <form method="POST" onSubmit={handleSubmit} className="reg-form">
        <h1>Register Form</h1>
        <div className="profile">
          <AccountCircleIcon
            style={{
              fontSize: "6rem",
              background: "linear-gradient(green, white)",
              borderRadius: "70px",
            }}
          />
        </div>
        <div className="input-box">
          <input type="text"
          id="username"
          name="username"
           placeholder="username"
           required
           value={username}
           onChange={(e)=>setusername(e.target.value)} />
           
        </div>
        <div className="input-box">
          <input type="email"
          id="email"
          name="email"
          value={email}
          required
          onChange={(e)=>{setemail(e.target.value)}} placeholder="example123@gmail.com" />
        </div>
        <div className="input-box">
          <input type="text"
          id="phone"
          name="phone"
          value={phone}
          onChange={(e)=>{setPhone(e.target.value)}}
          required
           placeholder="936997xxxx" />
        </div>
        <div className="input-box">
          <input type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e)=>{setpassword(e.target.value)}}
          required
           placeholder="password" />
        </div>
        <div className="input-box">
          <input type="text"
          id="department"
          name="department"
          value={department}
          onChange={((e)=>{setdepartment(e.target.value)})}
          required
           placeholder="Department" />
        </div>
        <div className="input-box">
          <input type="text"
          id="program"
          name="program"
          value={program}
          onChange={(e)=>setpogram(e.target.value)} 
          required
          placeholder="Program" />
        </div>
        <div className="input-box">
          <input type="text"
          id="semester"
          name="semester"
          value={semester}
          onChange={(e)=>{setsemester(e.target.value)}}
          required
           placeholder="Semester" />
        </div>
        {/* <div className="remember-forgot">
          <label>
            <input type="checkbox" />
            Remember me
          </label> */}
        {/* </div> */}
        <button type="submit" className="submit-button">
          Register
        </button>
        <div className="login-link">
          <p>Have an account?</p>
          <Link to="/login">Login</Link>
        </div>
        {/* <div className="login-link">
          <p>Are you an admin?</p>
          <Link to="/admin_login">Admin Login</Link>
        </div> */}
      </form>
    </div>
  );
}
