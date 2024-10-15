import React from 'react';
import './App.css';
import HeaderBar from './Components/Header/HeaderBar';
import BodyStructure from './Components/Body/BodyStructure';
import "bootstrap-icons/font/bootstrap-icons.css";
function App() {
  return (
    <div className="App">
      <div className='HeaderApp'>
        <HeaderBar/>
      </div>
      <div className='BodyApp'>
       <BodyStructure/>
      </div>
      
    </div>
  );
}

export default App;
