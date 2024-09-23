import react from "react";
import './BodyStructure.css';
import BodyTop1Button from "../Buttons/BodyTop1Button";

interface BodyStructureprops {

}
const BodyStructure: react.FC<BodyStructureprops>=() =>{
   return (
		  <div className="FullBody">
				<div className="TopBody">
					<div className="Top1">
					 <img className="LogoReboTop" src={require('../Figma Components/ReboTopSection.png')} alt="" />
					</div>
					<div className="Top2">
						Lo sentimos, este sitio web aún se encuentra bajo construcción.
					</div>
					<div className="Top3">
						<div className="Button1Top3">
							<BodyTop1Button label="contacto@rebo.mx" ContactLink="mailto:contacto@rebo.mx" ButtonColor="rgba(255, 113, 0, 1)" TextColor="white"/>
						</div>
						<div className="Button2Top3">
							<BodyTop1Button label="edgar.mtz@rebo.mx" ContactLink="mailto:edgar.mtz@rebo.mx" ButtonColor="white" TextColor="rgba(255, 113, 0, 1)"/>
						</div>
						<div className="Button3Top3">
							<BodyTop1Button label="55 6158 5215" ContactLink="https://wa.me/525561585215" ButtonColor="rgba(255, 113, 0, 1)" TextColor="white"/>
						</div>
					</div>

						
				</div>

      </div>
  );
};
export default BodyStructure;