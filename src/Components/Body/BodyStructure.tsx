import React from "react";
import './BodyStructure.css';
import BodyTop1Button from "../Buttons/BodyTop1Button";
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de importar Bootstrap

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

      <div className="MidBody">
        <div className="Top1 row justify-content-left">
          <div className="col text-start">
            <img className="LogoReboTop img-fluid" src={require('../Figma Components/ReboTopSection.png')} alt="Logo" />
          </div>
        </div>
        <div className="Top2 row justify-content-center text-wrap py-3  text-black" > 
		     <p className="h1 h-md2" > 
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
    </div>
  );
};

export default BodyStructure;