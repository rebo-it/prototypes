import React from 'react';
import HeaderBar from '../Header and Footer/HeaderBar';
import AboutBody from '../Body/AboutBody';
import Footer from '../Header and Footer/Footer';
import MidSection from '../Sections/MidSection';
import History from '../Sections/History';
function NosotrosPage() {
  return (
    <div className="App">
      <div className='HeaderApp'>
        <HeaderBar/>
      </div>
      <div className='BodyApp'>
      <div className="Top1Body p-0">
            <p className="h1 text-white" style={{font:'ubuntu', paddingTop:'50px', fontWeight:'bold'}}> Acerca de nosotros</p>

        </div>
      <div style={{height:'3px', backgroundColor:'white'}}></div>
       <AboutBody/>
       <div style={{height:'3px', backgroundColor:'rgba(255, 113, 0, 1)'}}></div>
      </div>
      <History/>
      <MidSection/>
      
      <Footer/>
      
    </div>
  );
}

export default NosotrosPage;
