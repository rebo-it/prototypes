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
							<BodyTop1Button label="VER PRODUCTOS" ContactLink="" ButtonColor="Orange" TextColor="white"/>
						</div>
						<div className="Button2Top3">
							<BodyTop1Button label="COMPRA AHORA" ContactLink="" ButtonColor="white" TextColor="orange"/>
						</div>
					</div>

						
				</div>

      </div>
  );
};
export default BodyStructure;