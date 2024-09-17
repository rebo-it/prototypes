import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import SignUpPage from './Components/Sign-up-page/SignUpPage';
import 'bootstrap-icons/font/bootstrap-icons.css';
import WorkInProgress from "./Components/WIP_page/Work_in_progress";



function App() {
  return (
    <Router>
     <Routes>
        <Route path="/WIP" element={<WorkInProgress />} />
        <Route path="*" element={<LandingPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        
        
     </Routes>
    </Router>

  );
}

export default App;
