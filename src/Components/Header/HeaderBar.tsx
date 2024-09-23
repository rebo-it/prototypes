import React from "react";
import './HeaderBar.css';
import HeaderButton from "../Buttons/HeaderButton";

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
				<HeaderButton label="contacto@rebo.mx" ContactLink="mailto:contacto@rebo.mx"/>
				<HeaderButton label="contacto@rebo.mx" ContactLink="mailto:contacto@rebo.mx"/>
				<HeaderButton label="contacto@rebo.mx" ContactLink="mailto:contacto@rebo.mx"/>

				</div>
				
			</div>
			
    </div>
    );
  };
  
  export default HeaderBar;