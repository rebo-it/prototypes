import React from "react";
import './HeaderBar.css';


interface HeaderBarprops{
  
}
const HeaderBar: React.FC<HeaderBarprops> = () => {

	return (
    <div className="HeaderContainer">
			<div className="ContactInfo">
				
			</div>
			<div className="LogoContainer"> 
				<img className="Logo" src={require('../Figma Components/ReboLogoWhite.png')} alt="LogoRebo"/>
				<div className="ButtonContainer">
				

				</div>
				
			</div>
			
    </div>
    );
  };
  
  export default HeaderBar;