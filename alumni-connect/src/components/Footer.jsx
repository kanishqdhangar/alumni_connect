import React, { useState } from 'react';
import chatIcon from "./chat_icon.png";
import socialHandle from "./socialHandle.png";
// import insta from './instaIcon.png';
import insta from "./instagram.jpeg.jpeg";
import linkd from "./linkedin.jpeg.jpeg";
import fb from "./facebook.jpeg.jpeg";
import twitr from "./twitter.jpeg.jpeg";

const Footer = () => (
    <footer className="footer">
      <p className="head">AlumniConnect</p>
      <p className="last">AlumniConnect Proudly created by ByteCode Learners</p>
      <h3 className="about--head">ABOUT US</h3>
      <p className="about--content">ALUMNICONNECT is a website to enhance the interactions and connections between the alumni and the current students of the University. It helps you to enhance your connections in the corporate society by connecting with alumni by different modes.<br /><br />Phone No. : 9527815678 <br /><br /> E-mail : xyz@gmail.com</p>
      <h3 className="follow--head">FOLLOW US</h3>
      <div className="follow--content">
        <a href="#insta.com"><img className="icons" src={insta} width="30px" alt="instagram icon" /></a>
        <a href="#facebook.com"><img className="icons" src={fb} width="30px" alt="facebook icon" /></a>
        <a href="#twitter.com"><img className="icons" src={twitr} width="30px" alt="twitter icon" /></a>
        <a href="#linkedin.com"><img className="icons" id="linkedin" src={linkd} width="30px" alt="linkedin icon" /></a>
      </div>
      <p className="copyright">Copyright &copy; AlumniConnect 2024  | Terms | Privacy Policy</p>
      <button className="chat" name="chatbox"><img className="chat_icon" src={chatIcon} alt="chat icon"></img><h2>Let's Chat!</h2></button>
      </footer>)
  
export default Footer;
