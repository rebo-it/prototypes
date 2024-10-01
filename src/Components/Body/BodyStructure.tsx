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
        <div className="Top2 row justify-content-center text-center py-3 bg-dark text-white"> 
		<p className="h5 h-md2"> 
        Lo sentimos, este sitio web aún se encuentra bajo construcción. Comúnicate con nosotros en los siguientes enlaces:
    </p>
        </div>
        <div className="Top3 row justify-content-center mt-4">
          <div className="col-12 col-sm-auto">
            <BodyTop1Button label="contacto@rebo.mx" ContactLink="mailto:contacto@rebo.mx" ButtonColor="rgba(255, 113, 0, 1)" TextColor="white" />
          </div>
          <div className="col-12 col-sm-auto">
            <BodyTop1Button label="edgar.mtz@rebo.mx" ContactLink="mailto:edgar.mtz@rebo.mx" ButtonColor="white" TextColor="rgba(255, 113, 0, 1)" />
          </div>
          <div className="col-12 col-sm-auto">
            <BodyTop1Button label="55 6158 5215" ContactLink="https://wa.me/525561585215" ButtonColor="rgba(255, 113, 0, 1)" TextColor="white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyStructure;