import React from 'react';

import HeaderBar from '../Header/HeaderBar';
function NosotrosPage() {
  return (
    <div className="App">
      <div className='HeaderApp'>
        <HeaderBar/>
      </div>
      <div className='BodyApp'>
       
        <NosotrosPage/>
      </div>
      
    </div>
  );
}

export default NosotrosPage;
