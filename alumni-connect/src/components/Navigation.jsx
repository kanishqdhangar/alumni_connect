import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FiAlignRight, FiX } from "react-icons/fi";
import login from "./login.jpeg";
import logo from "./Logo.png";
import './Navigation.css';

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
          <li><Link to="/">Home</Link></li>
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
        <div className="mobile">
            <i id="bar" onClick={() => setClicked(!clicked)}>
              {clicked ? <FiX /> : <FiAlignRight />}
            </i>
        </div>
      </div>
    );
  }

  export default Navbar;