import React, { useState } from 'react';
import "./About.css";
import instaIcon from "./instaIcon.png"
import login from "./login.jpeg";
import chatIcon from "./chat_icon.png";
import { Link } from "react-router-dom";
import { FiAlignRight, FiX } from "react-icons/fi";
import Navbar from './Navigation';
import Footer from './Footer';
 

 function MainContent() {
  return (
    <main className="container">
      <span className="content">
        <div className="about">
          <p>ABOUT OUR TECHNOLOGY <br /> COMMUNITY</p>
        </div>
        <div className="techies"><p>A Place for Techies</p></div>
        <div className="about_tech">
          From the beginning, AlumniConnect has been driven by the interests and involvement of our incredible community of passionate fans. We are focused on improving our collection of content and enhancing our online platform. We are a great source for tech support, offering opportunities for users to be active in a variety of topics and to engage with each other in an interesting and safe online environment.
        </div>
        <div className="guidelines">GUIDELINES</div>
        <div className="good"><p>Good to know</p></div>
      </span>
    </main>
  );
}

 function ImageSection() {
  return (
    <div className="images">
      <span className="image_container">
        <img src="https://static.wixstatic.com/media/547500af64d34b988bac05991a5fce61.jpg/v1/fill/w_970,h_600,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/547500af64d34b988bac05991a5fce61.jpg" alt="Playing on Tablet" width="326" height="480" fetchpriority="high" />
        <div className="image_content">
          <p className="guide">NO SPAMMING</p>
        </div>
      </span>
      <span className="image_container">
            <img src="https://static.wixstatic.com/media/f19660f6c6e0436e9d2f00362db46eef.jpg/v1/fill/w_973,h_600,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/f19660f6c6e0436e9d2f00362db46eef.jpg" alt="Student in Library" width="327" height="480" fetchpriority="high" />
            <div className="image_content">
                <p className="guide">NO HOSTILITY</p>
            </div>
        </span>
        <span className="image_container">
            <img src="https://static.wixstatic.com/media/a00e7791c7984675a5c2439fdf4a37c6.jpg/v1/fill/w_973,h_600,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/a00e7791c7984675a5c2439fdf4a37c6.jpg" alt="Modern Digital Watch" width="327" height="480" fetchpriority="high" />
            <div className="image_content">
                <p className="guide">NO ILLEGAL CONTENT</p>
            </div>
        </span>
      {/* Add other image containers */}
    </div>
  );
}

 

export function Apps() {
  return (
    <>
      <Navbar />
      <MainContent />
      <ImageSection />
      <Footer />
    </>
  );
}

export default Apps;
