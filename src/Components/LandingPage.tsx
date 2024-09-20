import React from 'react';
import HeaderWithButtons from './Header/HeaderWithButtons';
import './LandingPage.css'
import BodyLandingPage from './BodyComponent/BodyLandingPage'
// import { Component} from 'react'; 
const LandingPage: React.FC = () => {
 
  return (
    <div className='LandingPage'>
      <HeaderWithButtons />
      <BodyLandingPage />
      
    </div>
  );
};

export default LandingPage;