import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de importar Bootstrap
import './HeaderBar.css';

interface HeaderBarprops {}

const HeaderBar: React.FC<HeaderBarprops> = () => {
	return (
		<div className="container-fluid p-0">
			<div className="ContactInfo bg-dark d-flex align-items-center">
				{/* Información de contacto aquí */}
			</div>
			<div className="LogoContainer d-flex align-items-center justify-content-between ">
				<img className="Logo img-fluid" src={require('../Figma Components/ReboLogoWhite.png')} alt="LogoRebo"/>
				<div className="ButtonContainer d-flex gap-3">
					{/* Botones o enlaces aquí */}
				</div>
			</div>
		</div>
	);
};

export default HeaderBar;