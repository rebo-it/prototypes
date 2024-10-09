import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de importar Bootstrap
import './HeaderBar.css';
import HeaderButton from "../Buttons/HeaderButton";

interface HeaderBarprops {}

const HeaderBar: React.FC<HeaderBarprops> = () => {
	return (
		<div className="container-fluid p-0">
			<div className="ContactInfo bg-dark d-flex align-items-center">
				{<HeaderButton label="" IconClass="bi bi-whatsapp" ContactLink=""/>}
				
			</div>
			<div className="LogoContainer d-flex align-items-center justify-content-between ">
				<img className="Logo img-fluid" src={require('../Figma Components/ReboLogoWhite.png')} alt="LogoRebo"/>
				<div className="ButtonContainer d-flex gap-3">
					{<HeaderButton label="" IconClass="bi bi-whatsapp" ContactLink=""/>}
				</div>
			</div>
		</div>
	);
};

export default HeaderBar;