import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Alumnus.css';
import Navbar from './Navigation';
import Footer from './Footer';
import {Baseurl} from "./Baseurl"

const AlumniList = () => {
  const [alumniList, setAlumniList] = useState([]);

  useEffect(() => {
    // Fetch alumni data from backend API
    axios.get(`${Baseurl}/alumnus`)
      .then(response => {
        setAlumniList(response.data);
      })
      .catch(error => {
        console.error('Error fetching alumni data:', error);
      });
  }, []);

  return (
    <>
    
    <div className='box'>
        <div><Navbar /></div>
        <div className='content'>
      <h1>Batch 2016-20</h1>
      <div className='small-box'>
      <ul>
        {alumniList.map((alumni, index) => (
            <div className='cards'>
          <li key={index}>
            
            <h2>{alumni.name}</h2>
            <p><strong>Email:</strong> {alumni.email}</p>
            <p><strong>Phone:</strong> {alumni.phone}</p>
            <p><strong>Qualifications:</strong> {alumni.qualifications}</p>
            <p><strong>Current Workplace:</strong> {alumni.currentworkplace}</p>
            <p><strong>Job Title:</strong> {alumni.jobTitle}</p>
            <p><strong>Achievement/Research:</strong> {alumni.achivementResearch}</p>
            
          </li>
          </div>
        ))}
      </ul>
      </div>
      </div>
      <div className='content'>
      <h1>Batch 2017-21</h1>
      <div className='small-box'>
      <ul>
        {alumniList.map((alumni, index) => (
            <div className='cards'>
          <li key={index}>
            
            <h2>{alumni.name}</h2>
            <p><strong>Email:</strong> {alumni.email}</p>
            <p><strong>Phone:</strong> {alumni.phone}</p>
            <p><strong>Qualifications:</strong> {alumni.qualifications}</p>
            <p><strong>Current Workplace:</strong> {alumni.currentworkplace}</p>
            <p><strong>Job Title:</strong> {alumni.jobTitle}</p>
            <p><strong>Achievement/Research:</strong> {alumni.achivementResearch}</p>
            
          </li>
          </div>
        ))}
      </ul>
      </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default AlumniList;
