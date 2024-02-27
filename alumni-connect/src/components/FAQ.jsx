import React from 'react';
import './FAQ.css'; // Import your CSS file
import Navbar from './Navigation';
import Footer from './Footer';


const FAQs = () => {
  return (
    <>
    <div>
      

      <section className="faqs">
        <div className="heading_box">
          <p className="que_heading">COMMON QUESTIONS</p>
          <p>You Asked, We Answered</p>
        </div>

        <div className="boxes">
          <div className="que" id="que1">1. How can I stay connected with the university and fellow alumni?</div>
          <div className="ans" id="ans1">You can stay connected by joining AlumniConnect, our dedicated platform for alumni. You'll receive updates on events, news, and opportunities through the platform.</div>
        </div>
        <div className="boxes">
          <div className="que" id="que2">2. Are there any networking events or alumni reunions planned for the near future? How can I participate?</div>
          <div className="ans" id="ans2">Yes, we regularly organize networking events and reunions. Keep an eye on the Events section on AlumniConnect for announcements. You can RSVP and participate through the platform.</div>
        </div>
        <div className="boxes">
          <div className="que" id="que3">3. Are there opportunities for alumni to contribute as guest speakers, panelists, or volunteers at university events?</div>
          <div className="ans" id="ans3">Absolutely! We welcome alumni contributions. If interested, please contact the Alumni Affairs Office or check for opportunities on AlumniConnect.</div>
        </div>
      </section>

    
    </div>
    </>
  );
};

export function Apps() {
    return (
      <>
        <Navbar />
        <FAQs />
        <Footer />
      </>
    );
  }
  
  export default Apps;

