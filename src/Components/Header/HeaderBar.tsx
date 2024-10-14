import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de importar Bootstrap
import './HeaderBar.css';
import HeaderButton from "../Buttons/HeaderButton";

interface HeaderBarprops {}

const HeaderBar: React.FC<HeaderBarprops> = () => {
	return (
		<div className="Header container-fluid p-0">
			<div className="ContactInfo bg-dark d-flex align-items-center">
			<nav className="navbar navbar-expand-sm ">

					<div className="container-fluid">
						
						<ul className="navbar-nav">
							<li className="nav-item">
							<a className="nav-link" href=""><i className="bi bi-whatsapp"></i>Link 1</a>
							</li>
							<li className="nav-item justify-content-end">
							<a className="nav-link" href="">Link 2</a>
							</li>
							<li className="nav-item">
							<a className="nav-link" href="">Link 3</a>
							</li>
						</ul>
					</div>

			</nav>
				
			</div>
			<div className="LogoContainer d-flex align-items-center justify-content-between ">
				<img className="Logo img-fluid" src={require('../Figma Components/ReboLogoWhite.png')} alt="LogoRebo"/>
				<div className="ButtonContainer d-flex gap-3 justify-content-start">
					<nav className="nav  justify-content-start nav-pills flex-column flex-sm-row">
					<HeaderButton label="INICIO" IconClass="" ContactLink="" IconColor="white"/>
					<HeaderButton label="NOSOTROS" IconClass="" ContactLink="" IconColor="white"/>
					<HeaderButton label="PRODUCTOS+" IconClass="" ContactLink="" IconColor="white"/>
					<HeaderButton label="FAQS" IconClass="" ContactLink="" IconColor="white"/>
					<HeaderButton label="CONTACTANOS" IconClass="" ContactLink="" IconColor="white"/>
					<img className="3Dots img-fluid nav-item dropdown" src={require('../Figma Components/Group 1.png')} alt="3 dots"/>
					</nav>
					
				</div>
			</div>
		</div>
	);
};

export default HeaderBar;