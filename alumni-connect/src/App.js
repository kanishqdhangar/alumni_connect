// import React from 'react';
// import Navbar from './components/Navbar';
// import MainContent from './components/MainContent';
// import ImageSection from './components/ImageSection';
// import Footer from './components/Footer';
// import Apps from './components/front';

import React from 'react';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';

function App(){
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;