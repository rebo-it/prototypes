import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import SignUpPage from './Components/Sign-up-page/SignUpPage';
//import <HeaderOne></HeaderOne>

function App() {
  return (
    <div>
      <div>
        <LandingPage/>
      </div>
    <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<SignUpPage />} />
    </Routes>
  </Router>
  </div>

  );
}

export default App;
