import react from "react";
import './BodyStructure.css';

interface BodyStructureprops {

}
const BodyStructure: react.FC<BodyStructureprops>=() =>{
   return (
		  <div className="FullBody">
				<div className="TopBody">
					<div className="Top1">
					 <img className="LogoReboTop" src={require('../Figma Components/ReboTopSection.png')} />
					</div>
					<div className="Top2">
						Lo sentimos, este sitio web aún se encuentra bajo construcción.
					</div>
					<div className="Top3"></div>

				</div>

      </div>
  );
};
export default BodyStructure;