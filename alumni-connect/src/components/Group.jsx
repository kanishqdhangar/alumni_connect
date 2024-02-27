import React from 'react';
import './Group.css'; // Import your CSS file
import Navbar from './Navigation';
import Footer from './Footer';


const Groups = () => {
  return (
    <main className="groups">
      <h1 className="groups--h1" id="Heading">Group Feed</h1>
      <div className="container3">
        <p className="create--head">Create your own group...</p>
        <button className="create">Create</button>
      </div>
      <div className="container">
        <div className="firstcontainer">
          <div className="join-head">
            This post is from a suggested group
            <button id="joinbutton">Join</button>
          </div>
          <hr />
          <div className="chat-header">
            <div className="post">
              <div className="profile-pic">S</div>
              <div>
                <div className="username">smaterial451 <span id="verifyicon" className="material-symbols-outlined">verified_user</span></div>
                <div className="time-location">7 days ago • posted in AlumniConnect Group</div>
              </div>
            </div>
            <button className="share-button"><span className="material-symbols-outlined">share</span></button>
          </div>
          <div className="chat-content">
            <p>Welcome to our group AlumniConnect Group! A space for us to connect and share with each other. Start by posting your thoughts, sharing media, or creating a poll.</p>
            <div className="chat-reactions">
                {/* under production */}
              <button className="reactionbutton"><span className="material-symbols-outlined"></span></button>
              <button className="reactionbutton"><span className="material-symbols-outlined"></span></button>
            </div>
            <div className="counts">
              <div id="reactioncounts">Reaction</div>
              <div>Comments</div>
            </div>
          </div>
          <div>
            <div className="inputbox"><input className="inputbox1" type="text" placeholder="Write a comment..." /></div>
            <div className="chat-input">
              {/* <button className="commentbutton"><span className="material-symbols-outlined"></span></button>
              <button className="commentbutton"><span className="material-symbols-outlined"></span></button>
              <button className="commentbutton"><span className="material-symbols-outlined"></span></button> */}
            </div>
          </div>
        </div>
        <div className="container2">
          <input type="text" id="searchBox" placeholder="   Search for groups..." />
          <div id="suggestedGroups">
            <h2>Suggested Groups</h2>
            <div className="group">
              <p id="groupname">
                {/* under production */}
                <span id="groupprofile" className="material-symbols-outlined"></span>
                AlumniConnect Group
              </p>
              <div>
                <button id="addgroupicon"><span className="material-symbols-outlined"></span></button>
                <div className="group--foot">
                  <p>Type: Public</p>
                  <p>Members: 1</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export function Apps() {
    return (
      <>
        <Navbar />
        <Groups />
        <Footer />
      </>
    );
  }
  
  export default Apps;
  
