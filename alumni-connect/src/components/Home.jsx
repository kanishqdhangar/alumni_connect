import React, { useState } from 'react';
import { MdFunctions } from 'react-icons/md';
import './Home.css'; // Import your CSS file
import login from "./login.jpeg";
import { Link } from "react-router-dom";
import socialHandle from "./socialHandle.png";
import grp1 from "./grpPhoto1.webp";
import grp2 from "./grpPhoto2.webp";
import grp3 from "./grpPhoto3.webp";
import grp4 from "./grpPhoto4.webp";
import chatIcon from "./chat_icon.png";
// import Navbar from './Navigation';
import Footer from './Footer';
import logo from './Logo.png';

function Navbar() {
    const [clicked, setClicked] = useState(false);
    return (
      <div className="nav">
        <div className="uppernavbar">
          <div className="logo"><Link to="/"><img src={logo}></img></Link></div>
          <div className="searchbar">
            <input type="text" name="searchbar" maxLength="100" placeholder="Search here..." value="" />
            <img height="30" width="30" src="https://cdn-icons-png.flaticon.com/128/2811/2811806.png" alt="Search Icon" />
          </div>
          <div><Link to="/signup"><img className="login" src={login} alt="Login" /></Link></div>
          <div className="dropdown">
            {/* Add your dropdown content here */}
          </div>
        </div>
        <ul className={`nav-list ${clicked ? 'active' : 'navlist'}`}>
          {/* <li><Link to="/">Home</Link></li> */}
          <li><Link to="/groups">Groups</Link></li>
          <li><Link to="/meet">Meet</Link></li>
          {/* <li><a className="color" href="forums/">Forums</a></li> */}
          <li><Link to="/FAQ">FAQ</Link></li>
          {/* <li><a className="color" href="Members/">Members</a></li> */}
          {/* <li><a className="color" href="contact/">Help</a></li> */}
          <li><Link to="/alumnus">Alumnus</Link></li>
          <li><Link to="/about">About</Link></li>
          {/* <li><a className="link" href="socialMediaHandle.com"><img src="socialHandle.png" alt="Social Handle" /></a></li> */}
        </ul>
        {/* <div className="mobile">
            <i id="bar" onClick={() => setClicked(!clicked)}>
              {clicked ? <FiX /> : <FiAlignRight />}
            </i>
        </div> */}
      </div>
    );
  }


const ExploreSection = () => (
  <section className="explore">
    <p className="heading_explore">EXPLORE ALUMNICONNECT</p>
    <p className="description">Join the Discussion</p>
  </section>
);

const NewsSection = () => (
  <section className="news">
    <p className="capital">IN THE NEWS</p>
    <p className="lower">What You Need to Know</p>
  </section>
);

const PhotosSection = () => (
  <section className="photos">
    <div className="event1">
      <img className="event" src={grp1} alt="event 1" />
      <div className="photo1">Meeting Of Batch 2024</div>
    </div>
    <div className="event2">
      <img className="event" src={grp2} alt="event 2" />
      <div className="photo2">Winning National Science Day Award</div>
    </div>
    <div className="event3">
      <img className="event" src={grp3} alt="event 3" />
      <div className="photo3">H.C.Verma</div>
    </div>
  </section>
);

const AboutSection = () => (
  <div className="about">
    <aside id="aboutConnect">
      <p className="aboutHead">About AlumniConnect</p>
      <p className="aboutPara">Alumni Connect is an innovative and dynamic educational platform that fosters meaningful connections between alumni and their alma mater. This platform serves as a bridge between past and present, providing a space for alumni to engage with current students, share valuable insights, and contribute to the continuous growth of their educational institution. Through Alumni Connect, former students can offer mentorship, career advice, and networking opportunities, creating a vibrant community that transcends graduation. This initiative not only strengthens the bond between alumni and the institution but also enriches the educational experience for current students by exposing them to a diverse range of perspectives and real-world insights. By facilitating these connections, Alumni Connect becomes an invaluable resource for lifelong learning, professional development, and the cultivation of a strong and supportive educational community.</p>
    </aside>
  </div>
);

const EducationSection = () => (
  <div className="education">
    <p className="educationHead">Education</p>
  </div>
);

const VisionSection = () => (
  <section className="vision">
    <article>
      <p className="articleHead">Give your dreams a vision</p>
      AlumniConnect is the ultimate platform for alumni seeking to reconnect and engage with our thriving community. Our website serves as a central hub, facilitating connections between past and present students. Explore the Alumni Directory to rediscover old friends, stay informed about upcoming events, and build lasting connections that transcend time and distance. Join us in fostering a sense of community and shared experiences, where the journey continues long after graduation. Welcome to AlumniConnect, where connections are made and memories endure.
    </article>
    <div className="image">
      <img className="event4" src={grp4} alt="event 4" />
    </div>
  </section>
);



export function AppsHome() {
    return (
      <>
      <div className='home'>
        <Navbar />
        <ExploreSection/>
        <NewsSection/>
        <PhotosSection/>
        <AboutSection/>
        <EducationSection/>
        <VisionSection/>
        {/* <ImageSection /> */}
        <Footer />
        </div>
      </>
    );
  }
  
  export default AppsHome;
  