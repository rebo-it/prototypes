import react from "react";
import './BodyStructure.css';

interface BodyStructureprops {

}
const BodyStructure: react.FC<BodyStructureprops>=() =>{
   return (
		  <div className="FullBody">
				<div className="TopBody">
					<div className="Top1"></div>
					<div className="Top2"></div>
					<div className="Top3"></div>

				</div>

      </div>
  );
};
export default BodyStructure;