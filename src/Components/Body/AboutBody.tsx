import React from "react";
import './AboutBody.css'
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de importar Bootstrap
import BodyTop1Button from "../Buttons/BodyTop1Button";

const AboutBody: React.FC = () => {
  return (
    <div className="FullBody container-fluid bg-image p-0">
        <div className="Top1Body p-0">
            <p className="h1 text-white" style={{font:'ubuntu', paddingTop:'50px', fontWeight:'bold'}}> Acerca de nosotros</p>

        </div>
        <div className="MidBody1About row justify-content-center p-0">
        <div className="LeftSectionMid1 col-6 ">
          <div className="Top1 row justify-content-left">
            <div className="Etiqueta-Productos col h1 text-white text-center">
              Acerca de Nosotros
            </div>
          </div>
          <div className="Top2 row justify-content-center text-wrap py-3  text-black" > 
          <p className="h3 text-white text-center" > 
             
            </p>
          </div>
          <div className="Top3 row justify-content-center mt-4">
            <div className="ButtonMid col-6 col-sm-auto">
            <BodyTop1Button label="MÁS INFORMACIÓN" ContactLink="mailto:edgar.mtz@rebo.mx" ButtonColor="rgba(255, 113, 0, 1)" TextColor="white" />
            </div>
            <div className="ButtonMid col-6 col-sm-auto">
            <BodyTop1Button label="COTIZA AHORA" ContactLink="mailto:edgar.mtz@rebo.mx" ButtonColor="white" TextColor="rgba(255, 113, 0, 1)" />
            </div>
          </div>
        </div>
        <div className="RightSectionMid1 position-relative col-6 d-flex justify-content-center align-items-center">
         <img className="ReboHero3 img-fluid z-1 position-absolute top-15 end-0" src={require('../Figma Components/grupo-rebo-hero-3 1.png')} alt="Logo" />
         <img className="ReboHero4 img-fluid z-2 position-absolute top-50 start-0 d-none d-md-block" src={require('../Figma Components/grupo-rebo-hero-4 1.png')} alt="Logo" />
         <img className="Garantia img-fluid z-0 position-absolute top-50 end-0" src={require('../Figma Components/Rectangle 26.png')} alt="Logo" />
        </div>
        
      </div> 
      <div>
        
  	  </div>  

    </div>
    


);
};

export default AboutBody;