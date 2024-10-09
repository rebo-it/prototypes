import React from "react";
import './BodyStructure.css';
import BodyTop1Button from "../Buttons/BodyTop1Button";
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de importar Bootstrap
import LandingPageProducts from "../Cards/LandingPageProducts";
import Image1 from "/WIP/prototypes/src/images/casco1.png"

const BodyStructure: React.FC = () => {
  return (
    <div className="FullBody container-fluid bg-image">
      <div className="TopBody">
        <div className="Top1 row justify-content-left">
          <div className="col text-start">
            <img className="LogoReboTop img-fluid" src={require('../Figma Components/ReboTopSection.png')} alt="Logo" />
          </div>
        </div>
        <div className="Top2 row justify-content-start text-wrap py-3  text-black" > 
		     <p className="h1 h-md2 text-start"> 
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
        <div className="Top6 row justify-content-center mt-4">
          <div className="col-12 col-sm-auto">
          <LandingPageProducts ContactLink=""label="Equipo de Protección Industrial"  label2=''/>
          </div>
          <div className="col-12 col-sm-auto">
          <LandingPageProducts ContactLink=""label="Equipo de Protección Industrial"  label2=''/>
          </div>
          <div className="col-12 col-sm-auto">
          <LandingPageProducts ContactLink=""label="Equipo de Protección Industrial"  label2=''/>
          </div>
        </div>
      </div>
      <div className="MidBody2 row justify-content-end">
        <div className="Top7 row justify-content-end">
          <div className="Etiqueta-Productos col h2 text-white text-center">
            PRODUCTOS
          </div>
        </div>
        <div className="Top8 row justify-content-center text-wrap py-3  text-black" > 
		     <p className="h3 text-white text-center" > 
            Equipo y calzado de seguridad industrial
          </p>
        </div>
        <div className="Top9 row justify-content-center mt-4">
          <div className="col-12 col-sm-auto">
          <BodyTop1Button label="COTIZA AHORA" ContactLink="mailto:edgar.mtz@rebo.mx" ButtonColor="white" TextColor="rgba(255, 113, 0, 1)" />
          </div>
          <div className="col-12 col-sm-auto">
          <BodyTop1Button label="COTIZA AHORA" ContactLink="mailto:edgar.mtz@rebo.mx" ButtonColor="white" TextColor="rgba(255, 113, 0, 1)" />
          </div>
        </div>
      </div>
      <div className="MidBody3">
        <div className="Top10 row justify-content-left">
          <div className="Etiqueta-Productos col h2 text-white text-center">
            PRODUCTOS
          </div>
        </div>
        <div className="Top11 row justify-content-center text-wrap py-3  text-black" > 
		     <p className="h3 text-white text-center" > 
            Equipo y calzado de seguridad industrial
          </p>
        </div>
        <div className="Top12 row justify-content-center mt-4">
          <div className="col-12 col-sm-auto">
          <BodyTop1Button label="COTIZA AHORA" ContactLink="mailto:edgar.mtz@rebo.mx" ButtonColor="white" TextColor="rgba(255, 113, 0, 1)" />
          </div>
          <div className="col-12 col-sm-auto">
          <BodyTop1Button label="COTIZA AHORA" ContactLink="mailto:edgar.mtz@rebo.mx" ButtonColor="white" TextColor="rgba(255, 113, 0, 1)" />
          </div>
        </div>
      </div>
      <div className="EndBody">
        <div className="Top13 row justify-content-left">
          <div className="Etiqueta-Productos col h2 text-white text-center">
            PRODUCTOS
          </div>
        </div>
        <div className="Top14 row justify-content-center text-wrap py-3  text-black" > 
		     <p className="h3 text-white text-center" > 
            Equipo y calzado de seguridad industrial
          </p>
        </div>
        <div className="Top15 row justify-content-center mt-4">
          <div className="col-12 col-sm-auto">
          <BodyTop1Button label="COTIZA AHORA" ContactLink="mailto:edgar.mtz@rebo.mx" ButtonColor="white" TextColor="rgba(255, 113, 0, 1)" />
          </div>
          <div className="col-12 col-sm-auto">
          <BodyTop1Button label="COTIZA AHORA" ContactLink="mailto:edgar.mtz@rebo.mx" ButtonColor="white" TextColor="rgba(255, 113, 0, 1)" />
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default BodyStructure;