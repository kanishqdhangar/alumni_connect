// import React from 'react';
// import Navbar from './components/Navbar';
// import MainContent from './components/MainContent';
// import ImageSection from './components/ImageSection';
// import Footer from './components/Footer';
// import Apps from './components/front';

import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import About from './components/About';
import Signup from './components/Signup';
import Login from './components/Login';
import Alumnus from './components/Alumnus';
import Home from './components/Home';
import Meet from './components/Meet';
import FAQ from './components/FAQ';
import Groups from './components/Group';

function App(){
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/alumnus' element={<Alumnus/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/meet' element={<Meet/>}/>
      <Route path='/FAQ' element={<FAQ/>}/> 
      <Route path='/groups' element={<Groups/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;