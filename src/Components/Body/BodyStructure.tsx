import React from "react";
import './BodyStructure.css';
import BodyTop1Button from "../Buttons/BodyTop1Button";
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de importar Bootstrap
import LandingPageProducts from "../Cards/LandingPageProducts";

import ContactButton from "../Buttons/ContactButton";

const BodyStructure: React.FC = () => {
  return (
    <div className="FullBody container-fluid bg-image p-0">
      <div className="TopBody">
        <div className="Top1 row justify-content-left">
          <div className="col text-start">
            <img className="LogoReboTop img-fluid" src={require('../Figma Components/ReboTopSection.png')} alt="Logo" />
          </div>
        </div>
        <div className="Top2 row justify-content-start text-wrap py-3  text-black" > 
		     <p className="h1 h-md2 text-start text-white"> 
            Equipo y calzado de seguridad industrial
          </p>
        </div>
        <div className="Top3 row justify-content-start mt-4">
          <div className="col-12 col-sm-auto">
            <BodyTop1Button label="VER PRODUCTOS" ContactLink="mailto:contacto@rebo.mx" ButtonColor="rgba(255, 113, 0, 1)" TextColor="white" />
          </div>
          <div className="col-12 col-sm-auto">
            <BodyTop1Button label="COTIZA AHORA" ContactLink="mailto:edgar.mtz@rebo.mx" ButtonColor="white" TextColor="rgba(255, 113, 0, 1)" />
          </div>

        </div>
      </div>
        <img className="Garantia img-fluid" src={require('../Figma Components/Rectangle 21.png')} alt="Logo" />
      <div className="line-1"></div>
      <div className="MidBody">
        <div className="Top4 row justify-content-left">
          <div className="Etiqueta-Productos col h2 text-white text-center">
            PRODUCTOS
          </div>
        </div>
        <div className="Top5 row justify-content-center text-wrap py-3  text-black" > 
		     <p className="h3 text-white text-center" > 
            Equipo y calzado de seguridad industrial
          </p>
        </div>
        <div className="Top6 row  mt-4 justify-content-end">
          <div className="card1 col-4 col-xs-auto justify-content-end">
            <LandingPageProducts ContactLink=""label="Equipo de Protección Industrial"  label2=''/>
          </div>
          <div className="card2 col-4 col-xs-auto justify-content-center">
            <LandingPageProducts ContactLink=""label="Equipo de Protección Industrial"  label2=''/>
          </div>
          <div className="card3 col-4 col-xs-auto justify-content-start">
            <LandingPageProducts ContactLink=""label="Equipo de Protección Industrial"  label2=''/>
          </div>
        </div>
      </div>
      <div className="MidBody2 row justify-content-end">
        <div className=" MidBody2Left col-4  justify-content-start">
          
        </div>
        <div className="MidBody2Right col-8 align-items-center position-relative">
          
          <div className="Top7  justify-content-end">
            <div className="Etiqueta-Productos col h2 text-white text-center">
              PRODUCTOS
            </div>
          </div>
          <div className="Top8   row justify-content-center text-wrap py-3  text-black" > 
          <p className="h3 text-white text-center" > 
              Equipo y calzado de seguridad industrial
            </p>
          </div>
          <div className="Top9 z-1  row justify-content-center mt-4">
            <div className="ButtonMid col-6 col-sm-auto">
            <BodyTop1Button label="COTIZA AHORA" ContactLink="mailto:edgar.mtz@rebo.mx" ButtonColor="white" TextColor="rgba(255, 113, 0, 1)" />
            </div>
            <div className="ButtonMid col-6 col-sm-auto">
            <BodyTop1Button label="COTIZA AHORA" ContactLink="mailto:edgar.mtz@rebo.mx" ButtonColor="white" TextColor="rgba(255, 113, 0, 1)" />
            </div>
          </div>
        </div>
        
      </div>
      <div className="MidBody3 row justify-content-center p-0">
        <div className="LeftSectionMid3 col-6 ">
          <div className="Top10 row justify-content-left">
            <div className="Etiqueta-Productos col h2 text-white text-center">
              
            </div>
          </div>
          <div className="Top11 row justify-content-center text-wrap py-3  text-black" > 
          <p className="h3 text-white text-center" > 
             
            </p>
          </div>
          <div className="Top12 row justify-content-center mt-4">
            <div className="ButtonMid col-6 col-sm-auto">
            <BodyTop1Button label="COTIZA AHORA" ContactLink="mailto:edgar.mtz@rebo.mx" ButtonColor="white" TextColor="rgba(255, 113, 0, 1)" />
            </div>
            <div className="ButtonMid col-6 col-sm-auto">
            <BodyTop1Button label="COTIZA AHORA" ContactLink="mailto:edgar.mtz@rebo.mx" ButtonColor="white" TextColor="rgba(255, 113, 0, 1)" />
            </div>
          </div>
        </div>
        <div className="RightSectionMid3 position-relative col-6 d-flex justify-content-center align-items-center">
         <img className="ReboHero3 img-fluid z-1 position-absolute top-15 end-0" src={require('../Figma Components/grupo-rebo-hero-3 1.png')} alt="Logo" />
         <img className="ReboHero4 img-fluid z-2 position-absolute top-50 start-0 d-none d-md-block" src={require('../Figma Components/grupo-rebo-hero-4 1.png')} alt="Logo" />
         <img className="Garantia img-fluid z-0 position-absolute top-50 end-0" src={require('../Figma Components/Rectangle 26.png')} alt="Logo" />
        </div>
        
      </div>
      <div className="EndBody  row align-items-center p-0">
        <div className="Top13 col-4 justify-content-left">
          <div className="LogoRebo col h2 text-white text-center align-items-center">
            <img className="LogoReboEnd img-fluid" src={require('../Figma Components/Frame.png')} alt="Logo" />
          </div>
        </div>
        <div className="Top14 col-4 justify-content-center text-wrap py-3  text-black" > 
		     <p className="h1 text-white text-start" > 
            PRODUCTOS
          </p>
          <p className="h3 text-white text-start" > 
            Uniformes industriales
          </p>
          <p className="h3 text-white text-start" > 
            Equipo de protección personal
          </p>
          <p className="h3 text-white text-start" > 
            Calzado industrial
          </p>
          <p className="h3 h-md2 text-white text-start" > 
            Herramientas
          </p>
        </div>
        <div className="Top15 col-4  justify-content-top mt-4 d-none d-sm-block">
          <p className="h1 h-md2 text-white" style={{font:'ubuntu'}}> CONTACTO</p>
          <div className="col-4 col-sm-auto">
          <ContactButton label="55 55 2852 8221" ContactLink="" IconClass="bi bi-whatsapp"/>
          </div>
          <div className="col-4 col-sm-auto">
          <ContactButton label="55 55 2852 8221" ContactLink="" IconClass="bi bi-envelope"/>
          </div>
          <div className="col-4 col-sm-auto">
          <ContactButton label="55 55 2852 8221" ContactLink="" IconClass="bi bi-geo-alt"/>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default BodyStructure;