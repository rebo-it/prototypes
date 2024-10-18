import React from 'react';

import HeaderBar from '../Header and Footer/HeaderBar';
import AboutBody from '../Body/AboutBody';
function NosotrosPage() {
  return (
    <div className="App">
      <div className='HeaderApp'>
        <HeaderBar/>
      </div>
      <div className='BodyApp'>
       <AboutBody/>
      
      </div>
      
    </div>
  );
}

export default NosotrosPage;
