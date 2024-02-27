import React from 'react';
import './Meet.css'; // Import your CSS file
import Navbar from './Navigation';
import Footer from './Footer';
import Meets from './Meet.jpg.jpeg';


const Meet = () => {
  return (
    <div>
      

      <div className="meet">
        <div className="heading">
          <p>Our Services</p>
        </div>
        <div className="services">
          <section className="meeting">
            <ul>
              <li>
                <img className="reference_photo" src={Meets} alt="service" />
              </li>
              <li>
                <div className="info">
                  <p className="description">Online Meeting</p>
                  <hr />
                  <div className="list">
                    <p>1 hr</p>
                    <p>Free</p>
                  </div>
                  <button className="action">Book Now</button>
                </div>
              </li>
            </ul>
          </section>
          <section className="counselling">
            <ul>
              <li>
                <img className="reference_photo" src={Meets} alt="service" />
              </li>
              <li>
                <div className="info">
                  <p className="description">Counselling</p>
                  <hr />
                  <div className="list">
                    <p>1 hr</p>
                    <p>Free</p>
                  </div>
                  <button className="action">Book Now</button>
                </div>
              </li>
            </ul>
          </section>
          <section className="referal">
            <ul>
              <li>
                <img className="reference_photo" src={Meets} alt="service" />
              </li>
              <li>
                <div className="info">
                  <p className="description">Referal</p>
                  <hr />
                  <div className="list">
                    <p>1 hr</p>
                    <p>Free</p>
                  </div>
                  <button className="action">Book Now</button>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </div>

      
    </div>
  );
};

export function Apps() {
    return (
      <>
        <Navbar />
        <Meet />
        <Footer />
      </>
    );
  }
  
  export default Apps;
